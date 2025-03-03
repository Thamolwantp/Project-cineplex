import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { userId, showtimeId, seatId } = await req.json();

    // ตรวจสอบว่าข้อมูลที่ส่งมาครบถ้วนหรือไม่
    if (!userId || !showtimeId || !seatId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // ดึงราคาของที่นั่งจากฐานข้อมูล
    const seat = await prisma.seat.findUnique({
      where: { seat_id: seatId },
      select: { price: true },
    });

    if (!seat || seat.price === null) {
      return NextResponse.json({ error: 'Invalid seat or price not set' }, { status: 400 });
    }

    // ตรวจสอบว่าที่นั่งนี้ถูกจองไปแล้วหรือยัง
    const existingReservation = await prisma.seat_reservation.findFirst({
      where: { seat_id: seatId, showtime_id: showtimeId, status: 'Reserved' },
    });

    if (existingReservation) {
      return NextResponse.json({ error: 'Seat already reserved' }, { status: 400 });
    }

    // บันทึกตั๋วลงในฐานข้อมูล
    const newTicket = await prisma.ticket.create({
      data: {
        user_id: userId,
        showtime_id: showtimeId,
        seat_id: seatId,
        price: seat.price, // ใช้ราคาที่ดึงจากฐานข้อมูล
      },
    });

    // อัปเดตสถานะที่นั่งเป็น "Reserved"
    await prisma.seat_reservation.create({
      data: {
        seat_id: seatId,
        showtime_id: showtimeId,
        status: 'Reserved',
        reserved_by: String(userId),
      },
    });

    return NextResponse.json(newTicket, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
