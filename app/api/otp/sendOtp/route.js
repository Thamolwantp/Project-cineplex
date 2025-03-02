import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { email, otp } = await req.json();

  // สร้างการเชื่อมต่อกับบริการอีเมล (เช่น Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ใช้บริการ Gmail หรือบริการอื่นๆ
    auth: {
      user: 'testcineplex976@gmail.com', // ใส่ที่อยู่อีเมลที่ใช้ส่ง
      pass: 'sgfe ekof cwwn sshu', // ใส่รหัสผ่านหรือรหัสแอพ
    },
  });

  const mailOptions = {
    from: 'testcineplex976@gmail.com', // อีเมลผู้ส่ง
    to: email, // อีเมลผู้รับ
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`, // ข้อความที่ส่งในอีเมล
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
  }
}
