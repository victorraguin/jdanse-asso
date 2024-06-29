import mongoose, { Schema, Document, Model } from 'mongoose';

interface IEvent extends Document {
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  link: string;
  imageUrl: string;
  description?: string;
  isFavorite?: boolean;
}

const EventSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this event.'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide a date for this event.'],
  },
  startTime: {
    type: String,
    required: [true, 'Please provide a start time for this event.'],
  },
  endTime: {
    type: String,
    required: [true, 'Please provide an end time for this event.'],
  },
  location: {
    type: String,
    required: [true, 'Please provide a location for this event.'],
  },
  link: {
    type: String,
    required: [true, 'Please provide a link for this event.'],
  },
  imageUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  isFavorite: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const Event: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
