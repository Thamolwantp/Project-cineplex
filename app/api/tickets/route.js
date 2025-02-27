import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, showtimeId, seatId } = body; // ❌ เอา price ออก ไม่ให้ผู้ใช้ส่งมา

    // ✅ ตรวจสอบว่าข้อมูลที่จำเป็นถูกส่งมา
    if (!userId || !showtimeId || !seatId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ✅ ตรวจสอบว่า User, Showtime และ Seat มีอยู่จริง และดึงราคาที่นั่งจากฐานข้อมูล
    const [user, showtime, seat] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.showtime.findUnique({ where: { showtime_id: showtimeId } }),
      prisma.seat.findUnique({ where: { seat_id: seatId }, select: { price: true } }), // 🔹 ดึง price มาด้วย
    ]);

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });
    if (!showtime) return NextResponse.json({ error: 'Showtime not found' }, { status: 404 });
    if (!seat) return NextResponse.json({ error: 'Seat not found' }, { status: 404 });

    // ✅ ตรวจสอบว่าที่นั่งถูกจองไปแล้วหรือยัง
    const existingTicket = await prisma.ticket.findFirst({
      where: { seat_id: seatId, showtime_id: showtimeId },
    });

    if (existingTicket) {
      return NextResponse.json({ error: 'Seat is already booked' }, { status: 400 });
    }

    // ✅ ใช้ Transaction เพื่อให้แน่ใจว่าการสร้างตั๋วและการจองที่นั่งสำเร็จพร้อมกัน
    const result = await prisma.$transaction([
      prisma.ticket.create({
        data: {
          user_id: userId,
          showtime_id: showtimeId,
          seat_id: seatId,
          price: seat.price, // 🔹 ใช้ price จาก database
        },
      }),
      prisma.seat_reservation.create({
        data: {
          seat_id: seatId,
          showtime_id: showtimeId,
          status: 'Reserved',
          reserved_by: String(userId),
        },
      }),
    ]);

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error('Error creating ticket:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
