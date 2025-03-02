import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { sendOTPEmail } from '@/utils/sendEmail';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiration = new Date();
    otpExpiration.setMinutes(otpExpiration.getMinutes() + 10);

    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกข้อมูลลงฐานข้อมูลโดยไม่ต้องกำหนดค่าให้ newUser
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        otp,
        otpExpiration,
        isVerified: false,
      },
    });

    await sendOTPEmail(email, otp);

    return NextResponse.json({ message: 'OTP sent to email' }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
