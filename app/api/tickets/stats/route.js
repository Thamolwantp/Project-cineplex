import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const stats = await prisma.$queryRaw`
      SELECT DATE(purchase_at) AS purchase_date, COUNT(ticket_id) AS tickets_sold
      FROM ticket
      GROUP BY purchase_date
      ORDER BY purchase_date DESC;
    `;

    // ✅ แปลง `BigInt` เป็น `Number`
    const fixedStats = stats.map(row => ({
      purchase_date: row.purchase_date,
      tickets_sold: Number(row.tickets_sold) // 👈 แปลงจาก BigInt เป็น Number
    }));

    return NextResponse.json(fixedStats, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}