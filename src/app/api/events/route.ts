import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Event from '@/models/Event';
import { middleware } from '../middleware'; // Importez le middleware

export async function GET() {
  await dbConnect();
  try {
    const events = await Event.find({});
    return NextResponse.json({ success: true, data: events });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const authResponse = await middleware(request);
  if (authResponse.status !== 200) return authResponse;

  await dbConnect();
  try {
    const body = await request.json();
    const event = await Event.create(body);
    return NextResponse.json({ success: true, data: event }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}
