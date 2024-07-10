import { GalleryImageTypes } from "@/types/global";
import GalleryImage from "@/models/GalleryImage";
import dbConnect from "../mongoose";

export async function getGalleryImages() { 
    await dbConnect();
    try {
        const images = (await GalleryImage.find({})) as GalleryImageTypes[];
        if (!images) return [];
        const data = JSON.parse(JSON.stringify(images));
        return data;
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error.message };
        }
        return { success: false, error: "Unknown error" };
    }
}

export async function addManyImages(imageUrls: string[]) {
    await dbConnect();
    try {
        const images = await GalleryImage.insertMany(
            imageUrls.map((url: string) => ({
                imageUrl: url,
            }))
        );
        return { success: true, data: images };
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error.message };
        }
        return { success: false, error: "Unknown error" };
    }
}