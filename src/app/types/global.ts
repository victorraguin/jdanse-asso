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

export interface EventTypes {
  _id?: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  link: string;
  imageUrl: string;
  description?: string;
  isFavorite?: boolean;
}

export type DanceClass = {
  imageSrc: string;
  title: string;
  description: string;
  location: string;
  days: {
    day: string;
    time: string;
    age: string;
  }[];
}