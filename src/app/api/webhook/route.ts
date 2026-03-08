import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { sendEmail } from "@/lib/email";
import { generateReceiptEmail } from "@/lib/email-templates";
import type { Stripe } from 'stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 },
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", errorMessage);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 },
    );
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      // Fetch full session details with line items
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items", "line_items.data.price.product"],
      });

      const customerEmail = fullSession.customer_details?.email;
      const lineItems =
        fullSession.line_items?.data.map((item) => ({
          title: item.description || "Item",
          description: (item.price?.product as Stripe.Product)?.description || "",
          price: `$${((item.amount_total || 0) / 100).toFixed(2)}`,
          quantity: item.quantity || 1,
        })) || [];

      const subtotal = lineItems.reduce((sum, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return sum + price * item.quantity;
      }, 0);

      // Send receipt email
      if (customerEmail) {
        const receiptHtml = generateReceiptEmail({
          customerEmail,
          orderId: fullSession.id,
          orderDate: new Date().toISOString(),
          items: lineItems,
          subtotal,
          total: (fullSession.amount_total || 0) / 100,
          currency: fullSession.currency || "usd",
        });

        await sendEmail({
          to: customerEmail,
          subject: "Payment Receipt - BlessFourchette",
          html: receiptHtml,
        });

        console.log("Receipt sent to:", customerEmail);
      }

      console.log("Payment successful for session:", session.id);
      break;
    }
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      console.log("PaymentIntent succeeded:", paymentIntent.id);
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      console.error(
        "Payment failed:",
        paymentIntent.id,
        paymentIntent.last_payment_error?.message,
      );
      break;
    }
    default:
      console.log("Unhandled event type:", event.type);
  }

  return NextResponse.json({ received: true });
}
