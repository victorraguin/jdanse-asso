import mongoose, { Schema, Document, Model } from 'mongoose';

interface IGalleryImage extends Document {
  imageUrl: string;
}

const GalleryImageSchema: Schema = new Schema({
  imageUrl: {
    type: String,
    required: [true, 'Please provide an image URL for the gallery.'],
  },
});

const GalleryImage: Model<IGalleryImage> = mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema);

export default GalleryImage;
