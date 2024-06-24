import mongoose, { Schema, Document, Model } from 'mongoose';

interface IEvent extends Document {
  title: string;
  date: Date;
  time: string;
  location: string;
  link: string;
  imageUrl: string;
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
  time: {
    type: String,
    required: [true, 'Please provide a time for this event.'],
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
});

const Event: Model<IEvent> = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export default Event;
