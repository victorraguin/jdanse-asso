import Banner from "@/models/Banner";
import dbConnect from "../mongoose";
import { NextRequest, NextResponse } from "next/server";
import { BannerTypes } from "@/types/global";
import { middleware } from "@/api/middleware";

export async function getBanner() { 
    await dbConnect();
    try {
        const banner = await Banner.findOne({});
        if (!banner) return [];
        const data = JSON.parse(JSON.stringify(banner));
        return data;
      } catch (error) {
        if (error instanceof Error) {
          return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
      }
}

export async function addBanner(banner: BannerTypes, req: NextRequest) {
    const authResponse = await middleware(req);
    if (authResponse.status !== 200) return authResponse;
    await dbConnect();
    try {
        const newBanner = await Banner.create(banner);
        return NextResponse.json({ success: true, data: newBanner });
      } catch (error) {
        if (error instanceof Error) {
          return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
      }
}

export async function updateBanner(banner: BannerTypes) {
    await dbConnect();
    try {
        const newBanner = await Banner.findOneAndUpdate({}, banner, { new: true, upsert: true });
        return NextResponse.json({ success: true, data: newBanner });
      } catch (error) {
        if (error instanceof Error) {
          return NextResponse.json({ success: false, error: error.message }, { status: 400 });
        }
        return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 400 });
      }
}

export async function deleteBanner(req: NextRequest) {
    const authResponse = await middleware(req);
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

