
import { NextRequest, NextResponse } from 'next/server';
import { sendCateringEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.eventType || !formData.guestCount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    await sendCateringEmail(formData);

    return NextResponse.json(
      { message: 'Catering request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Catering form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send catering request' },
      { status: 500 }
    );
  }
}
