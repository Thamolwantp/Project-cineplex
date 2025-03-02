import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import GithubAccessTokenEmail from '../../../components/email-template';

export async function POST(req) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        // อ่านค่า email และ username จาก request body
        const { email, username } = await req.json();
        if (!email || !username) {
            return NextResponse.json({ error: 'Email and username are required' }, { status: 400 });
        }

        // สร้าง OTP 6 หลักแบบสุ่ม
        const otp = Math.floor(100000 + Math.random() * 900000);

        // แปลง React Email Template เป็น HTML
        const emailHtml = render(<GithubAccessTokenEmail username={username} otp={otp} />);

        await resend.emails.send({
            from: 'onboarding@resend.dev', // ตรวจสอบว่า Resend รองรับ domain นี้
            to: email,
            subject: 'Your OTP Code',
            html: emailHtml,
        });

        return NextResponse.json({ success: true, message: 'OTP sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

