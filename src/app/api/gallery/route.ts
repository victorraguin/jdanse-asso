import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import GalleryImage from '@/models/GalleryImage';
import { middleware } from '../middleware'; // Importez le middleware

export async function GET() {
  await dbConnect();
  try {
    const images = await GalleryImage.find({});
    return NextResponse.json({ success: true, data: images });
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
    const imageUrls = body.imageUrls;
    const images = await GalleryImage.insertMany(imageUrls.map((url: string) => ({ imageUrl: url })));
    return NextResponse.json({ success: true, data: images }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
  }
}
