import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const movies = await prisma.movie.findMany();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { 
      tag, title, category, time, language, cinema, 
      fdate, actor, director, resume, image_url, ldate, 
      timer1, timer2, timer3 
    } = await req.json();


    if (!title || !category || !language) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newMovie = await prisma.movie.create({
      data: {
        tag,
        title,
        category,
        time: Number(time),
        language,
        cinema,
        fdate: fdate ? new Date(fdate) : null,
        actor,
        director,
        resume,
        image_url,
        ldate: ldate ? new Date(ldate) : null,
        timer1: timer1 ? new Date(timer1) : null,
        timer2: timer2 ? new Date(timer2) : null,
        timer3: timer3 ? new Date(timer3) : null,
      },
    });

    return NextResponse.json(newMovie, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Movie ID is required' }, { status: 400 });
    }

    const deletedMovie = await prisma.movie.delete({
      where: { addmoive_id: Number(id) }, 
    });

    return NextResponse.json(deletedMovie, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
