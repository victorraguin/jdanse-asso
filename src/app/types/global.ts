export interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
  imageUrl: string;
}

export interface Banner {
  message: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface GalleryImage {
  _id: string;
  imageUrl: string;
}

export interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  link: string;
  imageUrl: string;
}

export interface EventsListProps {
  events: Event[];
}
