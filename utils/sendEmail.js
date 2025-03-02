import nodemailer from 'nodemailer';

export async function sendOTPEmail(email, otp) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'testcineplex976@gmail.com',
        pass: 'sgfe ekof cwwn sshu',
      },
    });

    const mailOptions = {
      from: 'testcineplex976@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
