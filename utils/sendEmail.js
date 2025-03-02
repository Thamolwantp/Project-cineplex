import { Resend } from 'resend';

console.log('Resend API Key:', process.env.RESEND_API_KEY);

// สร้างอินสแตนซ์ของ Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOTPEmail(email, otp) {
  try {
    await resend.emails.send({
        from:'n.0808581943@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        html: <p>Your OTP code is <strong>${otp}</strong></p>,
      });
  } catch (error) {
    console.error('Error sending OTP email:', error);
    throw new Error('Failed to send OTP email');
  }
}