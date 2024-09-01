export interface BannerTypes {
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
  id: string;
  imageSrc: string;
  title: string;
  category: string;
  description: string;
  videoSrc?: string;
  location: string;
  days: {
    day: string;
    time: string;
    age: string;
  }[];
  schedule?: ScheduleTypes[];
  tarifs: string;
  reductions: string;
  forfaits: string;
};

interface ClassInfo {
  time: string;
  name: string;
  age: string;
  id: string;
}

export interface ScheduleTypes {
  day: string;
  location: string;
  classes: ClassInfo[];
}
