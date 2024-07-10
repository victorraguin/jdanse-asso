import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Banner from '@/models/Banner';
import { middleware } from '../middleware'; // Importez le middleware
import { headers } from 'next/headers';

export async function GET() {
  await dbConnect();
  try {
    const banner = await Banner.findOne({});
    return NextResponse.json({ success: true, data: banner });
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
    const banner = await Banner.create(body);
    const response = NextResponse.json({ success: true, data: banner }, { status: 201 });
    response.headers.set('Cache-Control', 'no-store');
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  const authResponse = await middleware(request);
  if (authResponse.status !== 200) return authResponse;

  await dbConnect();
  try {
    const body = await request.json();
    const banner = await Banner.findOneAndUpdate({}, body, { new: true, upsert: true });
    const response = NextResponse.json({ success: true, data: banner });
    response.headers.set('Cache-Control', 'no-store');
    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const authResponse = await middleware(request);
  if (authResponse.status !== 200) return authResponse;

  await dbConnect();
  try {
    await Banner.deleteOne({});
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}
