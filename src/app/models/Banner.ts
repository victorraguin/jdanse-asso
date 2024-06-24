import mongoose, { Schema, Document, Model } from 'mongoose';

interface IBanner extends Document {
  message: string;
  buttonText?: string;
  buttonLink?: string;
}

const BannerSchema: Schema = new Schema({
  message: {
    type: String,
    required: [true, 'Please provide a message for the banner.'],
  },
  buttonText: {
    type: String,
    required: false,
  },
  buttonLink: {
    type: String,
    required: false,
  },
});

const Banner: Model<IBanner> = mongoose.models.Banner || mongoose.model<IBanner>('Banner', BannerSchema);

export default Banner;
