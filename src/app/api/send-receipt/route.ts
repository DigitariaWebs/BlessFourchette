import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { generateReceiptEmail, generateReceiptTextEmail, generateWalmartFormatReceipt } from '@/lib/email-templates';
import { generateReceiptPDF } from "@/lib/pdf-generator";

interface OrderItem {
  title: string;
  description: string;
  price: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerEmail, orderId, items } = body;

    if (!customerEmail || !orderId || !items) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Calculate total
    const total = items.reduce((sum: number, item: OrderItem) => {
      const price = parseFloat(item.price.replace("$", ""));
      return sum + price * item.quantity;
    }, 0);

    const orderDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const receiptData = {
      customerEmail,
      orderId: orderId.slice(-8).toUpperCase(),
      orderDate,
      items,
      subtotal: total,
      total,
      currency: "usd",
    };

    // Generate PDF once
    const pdfBuffer = await generateReceiptPDF({
      ...receiptData,
      isAdmin: false,
    });

    const htmlContent = generateReceiptEmail(receiptData);
    const textContent = generateReceiptTextEmail(receiptData);

    const pdfAttachment = {
      filename: `receipt-${receiptData.orderId}.pdf`,
      content: pdfBuffer,
      contentType: "application/pdf",
    };

    // Send email to customer with PDF attachment
    const customerResult = await sendEmail({
      to: customerEmail,
      subject: `Payment Receipt #${receiptData.orderId} - BlessFourchette`,
      html: htmlContent,
      text: textContent,
      attachments: [pdfAttachment],
    });

    // Send Walmart-format receipt to admin with PDF attachment
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_FROM;
    let adminResult = { success: true };

    if (adminEmail) {
      const adminPdfBuffer = await generateReceiptPDF({
        ...receiptData,
        isAdmin: true,
      });

      const walmartReceipt = generateWalmartFormatReceipt(receiptData);
      adminResult = await sendEmail({
        to: adminEmail,
        subject: `[NEW ORDER] Receipt #${receiptData.orderId} - BlessFourchette`,
        html: `<pre style="font-family: monospace; white-space: pre-wrap; word-wrap: break-word;">${walmartReceipt}</pre>`,
        text: walmartReceipt,
        attachments: [
          {
            filename: `order-${receiptData.orderId}.pdf`,
            content: adminPdfBuffer,
            contentType: "application/pdf",
          },
        ],
      });
    }

    if (customerResult.success && adminResult.success) {
      return NextResponse.json({
        success: true,
        message:
          "Receipt sent successfully to customer and admin with PDF attachments",
      });
    } else {
      throw new Error("Failed to send one or more emails");
    }
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending receipt:", error);
    return NextResponse.json(
      { error: errorMessage || "Failed to send receipt" },
      { status: 500 },
    );
  }
}
