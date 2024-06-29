import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import GalleryImage from '@/models/GalleryImage';

export async function DELETE(request: NextRequest) {
  await dbConnect();

  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json(
      { success: false, error: "ID not provided" },
      { status: 400 }
    );
  }

  try {
    const result = await GalleryImage.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { success: false, error: "Image not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Image deleted" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}
