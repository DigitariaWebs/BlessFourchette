interface OrderItem {
  title: string;
  description: string;
  price: string;
  quantity: number;
}

interface ReceiptEmailData {
  customerEmail: string;
  orderId: string;
  orderDate: string;
  items: OrderItem[];
  subtotal: number;
  total: number;
  currency: string;
}

export const generateReceiptEmail = (data: ReceiptEmailData): string => {
  const itemsHtml = data.items
    .map(
      (item) => `
    <tr>
      <td style="padding: 15px 10px; border-bottom: 1px solid #F0EDE5;">
        <div class="item-name" style="font-weight: 600; color: #2D2A26; margin-bottom: 5px; font-size: 15px;">${item.title}</div>
        <div style="font-size: 13px; color: #777; line-height: 1.4;">${item.description}</div>
      </td>
      <td style="padding: 15px 10px; border-bottom: 1px solid #F0EDE5; text-align: center; color: #2D2A26; font-weight: 500; white-space: nowrap;">
        ×${item.quantity}
      </td>
      <td style="padding: 15px 10px; border-bottom: 1px solid #F0EDE5; text-align: right; color: #C5A065; font-weight: 600; font-size: 15px; white-space: nowrap;">
        ${item.price}
      </td>
    </tr>
  `,
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
  <title>Payment Receipt - BlessFourchette</title>
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
  <style>
    /* Email client resets */
    body, table, td, div, p, a { -webkit-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    
    /* Mobile-first responsive styles */
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; padding: 15px 10px !important; }
      .content-box { padding: 25px 15px !important; }
      .header-title { font-size: 36px !important; }
      .success-icon { width: 60px !important; height: 60px !important; }
      .success-title { font-size: 22px !important; }
      .success-text { font-size: 14px !important; }
      .order-id-box { padding: 20px 15px !important; }
      .order-id-text { font-size: 24px !important; letter-spacing: 1px !important; }
      .details-table td { display: block !important; width: 100% !important; text-align: left !important; padding: 8px 0 !important; }
      .items-table th, .items-table td { padding: 10px 5px !important; font-size: 11px !important; }
      .item-name { font-size: 13px !important; }
      .total-label { font-size: 16px !important; }
      .total-amount { font-size: 24px !important; }
      .footer-text { font-size: 11px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; min-width: 100%; font-family: Arial, sans-serif; background-color: #f5f5f5; -webkit-font-smoothing: antialiased;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 0;" cellspacing="0" cellpadding="0">
    <tr>
      <td style="padding: 20px 10px;">
        <div class="email-container" style="max-width: 600px; margin: 0 auto; padding: 30px 20px; background-color: #F9F7F2; border-radius: 12px;">

          <!-- Elegant Header -->
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 35px;" cellspacing="0" cellpadding="0">
            <tr>
              <td style="text-align: center;">
                <h1 class="header-title" style="color: #C5A065; font-family: 'Dancing Script', cursive; font-size: 48px; margin: 0 0 5px 0; font-weight: 700; line-height: 1.2;">
                  BlessFourchette
                </h1>
                <p style="margin: 0; color: #777; font-size: 14px; letter-spacing: 1px;">PAYMENT RECEIPT</p>
              </td>
            </tr>
          </table>

          <!-- White Content Box -->
          <div class="content-box" style="background-color: white; padding: 35px 30px; border-radius: 12px; box-shadow: 0 2px 15px rgba(0,0,0,0.08);">
            
            <!-- Success Message -->
            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 35px;" cellspacing="0" cellpadding="0">
              <tr>
                <td style="text-align: center;">
                  <!-- Icon using table for better email client support -->

                  <h2 class="success-title" style="color: #2D2A26; font-size: 26px; font-weight: 600; margin: 0 0 12px 0; line-height: 1.3;">
                    Payment Received!
                  </h2>
                  <p class="success-text" style="color: #777; font-size: 15px; line-height: 1.6; margin: 0;">
                    Thank you for your payment. Your delicious meal is being prepared with care.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Order ID Box -->
            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 35px 0;" cellspacing="0" cellpadding="0">
              <tr>
                <td style="text-align: center;">
                  <div class="order-id-box" style="background-color: #F9F7F2; padding: 25px; border-radius: 10px; border: 2px solid #C5A065;">
                    <p style="color: #999; margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Receipt Number</p>
                    <p class="order-id-text" style="color: #C5A065; font-size: 32px; font-weight: bold; letter-spacing: 2px; margin: 0; font-family: monospace; word-break: break-all;">
                      #${data.orderId}
                    </p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Order Details -->
            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0; padding: 25px 0; border-top: 1px solid #F0EDE5; border-bottom: 1px solid #F0EDE5;" cellspacing="0" cellpadding="0">
              <tr>
                <td class="details-table" style="padding: 10px 0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; width: 40%;">Date</td>
                <td class="details-table" style="padding: 10px 0; text-align: right; color: #2D2A26; font-weight: 500; font-size: 14px; width: 60%;">${data.orderDate}</td>
              </tr>
              <tr>
                <td class="details-table" style="padding: 10px 0; color: #999; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; width: 40%;">Email</td>
                <td class="details-table" style="padding: 10px 0; text-align: right; color: #2D2A26; font-weight: 500; font-size: 14px; width: 60%; word-break: break-word;">${data.customerEmail}</td>
              </tr>
            </table>

            <!-- Order Items -->
            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;" cellspacing="0" cellpadding="0">
              <tr>
                <td>
                  <h3 style="color: #2D2A26; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; text-align: center; text-transform: uppercase; letter-spacing: 1px;">
                    Items Purchased
                  </h3>
                  <table class="items-table" role="presentation" style="width: 100%; border-collapse: collapse;" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr style="background-color: #F9F7F2;">
                        <th style="padding: 12px 10px; text-align: left; color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Item</th>
                        <th style="padding: 12px 10px; text-align: center; color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 50px;">Qty</th>
                        <th style="padding: 12px 10px; text-align: right; color: #999; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 80px;">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${itemsHtml}
                    </tbody>
                  </table>

                  <!-- Total -->
                  <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 25px; padding-top: 25px; border-top: 2px solid #C5A065;" cellspacing="0" cellpadding="0">
                    <tr>
                      <td class="total-label" style="padding: 10px 0; color: #2D2A26; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Total Paid</td>
                      <td class="total-amount" style="padding: 10px 0; text-align: right; color: #C5A065; font-size: 28px; font-weight: 700; white-space: nowrap;">
                        $${data.total.toFixed(2)}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Additional Info -->
            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 35px; padding-top: 30px; border-top: 1px solid #F0EDE5;" cellspacing="0" cellpadding="0">
              <tr>
                <td style="text-align: center;">
                  <p style="color: #2D2A26; font-size: 15px; font-weight: 600; margin: 0 0 10px 0;">
                    Questions about your receipt?
                  </p>
                  <p style="color: #777; font-size: 14px; margin: 0; word-break: break-word;">
                    Contact us at <a href="mailto:${process.env.SMTP_USER}" style="color: #C5A065; text-decoration: none; font-weight: 500;">${process.env.SMTP_USER}</a>
                  </p>
                </td>
              </tr>
            </table>

          </div>

          <!-- Footer -->
          <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 25px;" cellspacing="0" cellpadding="0">
            <tr>
              <td class="footer-text" style="text-align: center; color: #999; font-size: 12px; line-height: 1.6;">
                <p style="margin: 5px 0;">
                  If you didn't make this purchase, please contact us immediately.
                </p>
                <p style="margin: 15px 0 0 0;">
                  © ${new Date().getFullYear()} BlessFourchette. All rights reserved.
                </p>
              </td>
            </tr>
          </table>

        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export const generateReceiptTextEmail = (data: ReceiptEmailData): string => {
  const itemsText = data.items
    .map(
      (item) =>
        `${item.title} ×${item.quantity} - ${item.price}\n  ${item.description}\n`,
    )
    .join("\n");

  return `
═══════════════════════════════════════════════
         B L E S S F O U R C H E T T E         
              PAYMENT RECEIPT
═══════════════════════════════════════════════

✨ PAYMENT RECEIVED! ✨

Thank you for your payment. Your delicious 
meal is being prepared with care.

───────────────────────────────────────────────

RECEIPT NUMBER: #${data.orderId}

───────────────────────────────────────────────

Receipt Details:
• Date: ${data.orderDate}
• Email: ${data.customerEmail}

───────────────────────────────────────────────

ITEMS PURCHASED:

${itemsText}

───────────────────────────────────────────────

TOTAL PAID: $${data.total.toFixed(2)} ${data.currency.toUpperCase()}

═══════════════════════════════════════════════

Questions about your receipt?
Contact us at: ${process.env.SMTP_USER}

If you didn't make this purchase, please contact us immediately.

© ${new Date().getFullYear()} BlessFourchette. All rights reserved.
  `;
};
