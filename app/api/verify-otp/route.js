import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// ตรวจสอบ OTP
export async function POST(req) {
  const { otp } = await req.json();

  // ตรวจสอบ OTP ในฐานข้อมูล
  const user = await prisma.user.findFirst({
    where: { otp },
  });

  if (!user) {
    return NextResponse.json({ success: false, message: "Invalid OTP." });
  }

  const now = new Date();
  if (user.otpExpiration < now) {
    return NextResponse.json({ success: false, message: "OTP expired." });
  }

  // อัปเดตสถานะการยืนยัน
  await prisma.user.update({
    where: { id: user.id },
    data: { isVerified: true },
  });

  return NextResponse.json({ success: true, message: "OTP verified successfully!" });
}
