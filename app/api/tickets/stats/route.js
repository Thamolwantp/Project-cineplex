import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const stats = await prisma.ticket.groupBy({
      by: ['purchase_at'],
      _count: { ticket_id: true },  
      orderBy: { purchase_at: 'asc' },
    });

    return NextResponse.json(stats, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}