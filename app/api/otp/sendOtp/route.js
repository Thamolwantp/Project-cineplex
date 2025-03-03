import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    // ตั้งค่าเซิร์ฟเวอร์อีเมล (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'testcineplex976@gmail.com', // อีเมลของคุณ
        pass: 'sgfe ekof cwwn sshu', // รหัสผ่านแอป (App Password)
      },
    });

    const mailOptions = {
      from: 'testcineplex976@gmail.com',
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`, // ส่งรหัส OTP ในอีเมล
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'OTP sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return new Response(JSON.stringify({ message: 'Failed to send OTP', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
