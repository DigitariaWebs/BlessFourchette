import { NextRequest, NextResponse } from 'next/server';
import { generateReceiptPDF } from '@/lib/pdf-generator';

interface OrderItem {
  title: string;
  description: string;
  price: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerEmail, orderId, items, isAdmin = false } = body;

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
      isAdmin,
    };

    const pdfBuffer = await generateReceiptPDF(receiptData);

    const fileName = `receipt-${receiptData.orderId}-${Date.now()}.pdf`;

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Length': pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error generating receipt PDF:', error);
    return NextResponse.json(
      { error: errorMessage || 'Failed to generate receipt' },
      { status: 500 }
    );
  }
}
