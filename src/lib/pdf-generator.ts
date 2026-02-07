import { PDFDocument, rgb } from 'pdf-lib';

interface OrderItem {
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface ReceiptData {
  customerEmail: string;
  orderId: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  total: number;
  currency: string;
  isAdmin?: boolean;
}

export const generateReceiptPDF = async (data: ReceiptData): Promise<Buffer> => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]); // A4 size
  const { height, width } = page.getSize();
  const margin = 40;
  const contentWidth = width - 2 * margin;

  let yPosition = height - margin;

  // Header
  page.drawText('BLESS FOURCHETTE', {
    x: margin,
    y: yPosition,
    size: 24,
    color: rgb(0.77, 0.62, 0.4), // Gold color
  });

  yPosition -= 35;
  page.drawText(data.isAdmin ? 'ORDER RECEIPT' : 'PAYMENT RECEIPT', {
    x: margin,
    y: yPosition,
    size: 14,
    color: rgb(0.3, 0.3, 0.3),
  });

  yPosition -= 35;

  // Receipt Info
  page.drawText(`Receipt #: ${data.orderId}`, {
    x: margin,
    y: yPosition,
    size: 10,
  });

  yPosition -= 18;
  page.drawText(`Date: ${data.orderDate}`, {
    x: margin,
    y: yPosition,
    size: 10,
  });

  yPosition -= 18;
  page.drawText(`Customer: ${data.customerEmail}`, {
    x: margin,
    y: yPosition,
    size: 10,
    maxWidth: contentWidth,
  });

  yPosition -= 30;

  // Items Header
  page.drawText('Item', {
    x: margin,
    y: yPosition,
    size: 10,
  });
  page.drawText('Qty', {
    x: margin + 300,
    y: yPosition,
    size: 10,
  });
  page.drawText('Price', {
    x: margin + 380,
    y: yPosition,
    size: 10,
  });

  yPosition -= 5;
  page.drawLine({
    start: { x: margin, y: yPosition },
    end: { x: width - margin, y: yPosition },
    color: rgb(0.8, 0.8, 0.8),
  });

  yPosition -= 20;

  // Items
  data.items.forEach((item) => {
    const price = parseFloat(item.price.replace('$', ''));
    const lineTotal = (price * item.quantity).toFixed(2);

    page.drawText(item.title.substring(0, 35), {
      x: margin,
      y: yPosition,
      size: 10,
      maxWidth: 260,
    });

    page.drawText(`×${item.quantity}`, {
      x: margin + 300,
      y: yPosition,
      size: 10,
    });

    page.drawText(`$${lineTotal}`, {
      x: margin + 380,
      y: yPosition,
      size: 10,
    });

    yPosition -= 16;

    if (item.description) {
      page.drawText(item.description.substring(0, 50), {
        x: margin + 10,
        y: yPosition,
        size: 8,
        color: rgb(0.5, 0.5, 0.5),
        maxWidth: 250,
      });
      yPosition -= 14;
    }
  });

  yPosition -= 15;

  // Totals
  page.drawLine({
    start: { x: margin, y: yPosition },
    end: { x: width - margin, y: yPosition },
    color: rgb(0.8, 0.8, 0.8),
  });

  yPosition -= 25;
  page.drawText('TOTAL:', {
    x: margin,
    y: yPosition,
    size: 14,
  });

  page.drawText(`$${data.total.toFixed(2)}`, {
    x: margin + 380,
    y: yPosition,
    size: 14,
    color: rgb(0.77, 0.62, 0.4), // Gold
  });

  yPosition -= 40;

  // Footer
  const footerText = data.isAdmin
    ? 'Please prepare the items listed above. Status: Payment Received - Order Confirmed'
    : 'Thank you for your order! Your meal is being prepared with care.';

  page.drawText(footerText, {
    x: margin,
    y: yPosition,
    size: 9,
    color: rgb(0.5, 0.5, 0.5),
    maxWidth: contentWidth,
  });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
};
