import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Event from '@/models/Event';
import { middleware } from '../../middleware'; // Importez le middleware
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  await dbConnect();
  try {
    const event = await Event.findById(id);
    if (!event) {
      return NextResponse.json({ success: false, error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const authResponse = await middleware(request);
  if (authResponse.status !== 200) return authResponse;

  const { id } = params;
  await dbConnect();
  try {
    const body = await request.json();
    const event = await Event.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!event) {
      return NextResponse.json({ success: false, error: 'Event not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  'use server';
  const authResponse = await middleware(request);
  if (authResponse.status !== 200) return authResponse;

  const { id } = params;
  await dbConnect();
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return NextResponse.json({ success: false, error: 'Event not found' }, { status: 404 });
    }
    revalidatePath("/admin/events");
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}
