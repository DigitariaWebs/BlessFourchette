import { NextRequest, NextResponse } from 'next/server';
import { sendConsultationBookingEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      eventType,
      selectedDate,
      selectedTime,
      numberOfPeople,
      theme,
      name,
      email,
      phone,
      notes,
    } = body;

    // Validate required fields
    if (!eventType || !selectedDate || !selectedTime || !numberOfPeople || !theme || !name || !email || !phone) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Send booking confirmation email
    await sendConsultationBookingEmail({
      eventType,
      selectedDate,
      selectedTime,
      numberOfPeople,
      theme,
      name,
      email,
      phone,
      notes,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Consultation booking submitted successfully'
    });
  } catch (error) {
    console.error('Consultation booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}
