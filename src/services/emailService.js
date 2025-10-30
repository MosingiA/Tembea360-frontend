// Email service using EmailJS
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'service_tembea360';
const EMAIL_TEMPLATE_ID = 'template_booking';
const EMAIL_PUBLIC_KEY = 'your_emailjs_public_key';

export const sendBookingConfirmation = async (bookingData) => {
  try {
    const templateParams = {
      to_email: bookingData.contactInfo.email,
      to_name: `${bookingData.contactInfo.firstName} ${bookingData.contactInfo.lastName}`,
      tour_name: bookingData.tour.name,
      booking_date: bookingData.date,
      guests: bookingData.guests,
      total_amount: bookingData.pricing.total.toFixed(2),
      booking_reference: `TM360-${Date.now().toString().slice(-6)}`
    };

    const response = await emailjs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      templateParams,
      EMAIL_PUBLIC_KEY
    );

    return { success: true, reference: templateParams.booking_reference };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};