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

export interface GalleryImageTypes {
  _id: number;
  imageUrl: string;
}

export interface Event {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  isFavorite?: boolean;
  time: string;
  location: string;
  link: string;
  imageUrl: string;
}