import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import GalleryImage from "@/models/GalleryImage";
import { GalleryImageTypes } from "@/types/global";

export async function GET(request: NextRequest) {
  await dbConnect();
  try {
    const images = (await GalleryImage.find({})) as GalleryImageTypes[];
    console.log(images);
    return NextResponse.json(images);
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

export async function POST(request: NextRequest) {
  await dbConnect();
  try {
    const body = await request.json();
    const { imageUrls } = body;

    const images = await GalleryImage.insertMany(
      imageUrls.map((url: string) => ({
        imageUrl: url,
      }))
    );
    return NextResponse.json({ success: true, data: images }, { status: 201 });
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
