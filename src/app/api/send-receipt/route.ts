import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { generateReceiptEmail, generateReceiptTextEmail } from '@/lib/email-templates';

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
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate total
    const total = items.reduce((sum: number, item: OrderItem) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price * item.quantity;
    }, 0);

    const orderDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const receiptData = {
      customerEmail,
      orderId: orderId.slice(-8).toUpperCase(),
      orderDate,
      items,
      subtotal: total,
      total,
      currency: 'usd',
    };

    const htmlContent = generateReceiptEmail(receiptData);
    const textContent = generateReceiptTextEmail(receiptData);

    const result = await sendEmail({
      to: customerEmail,
      subject: `Payment Receipt #${receiptData.orderId} - BlessFourchette`,
      html: htmlContent,
      text: textContent,
    });

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Receipt sent successfully',
      });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending receipt:', error);
    return NextResponse.json(
      { error: errorMessage || 'Failed to send receipt' },
      { status: 500 }
    );
  }
}
