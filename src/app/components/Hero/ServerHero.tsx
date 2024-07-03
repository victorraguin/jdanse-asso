import { Suspense } from "react";
import React from "react";
import Loading from "@/utils/loading";
import { EventTypes } from "@/types/global";
import Hero from "./Hero";

export default async function ServerHero() {
  async function getFavEvent(): Promise<EventTypes | null> {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/events`
      );
      const data = (await response.json()).data;
      if (data.length > 0) {
        const closestFavEvent = data.filter(
          (event: EventTypes) => event.isFavorite
        );
        const closestFavEventDate = closestFavEvent.sort(
          (
            a: { date: string | number | Date },
            b: { date: string | number | Date }
          ) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            return aDate.getTime() - bDate.getTime();
          }
        );
        return closestFavEventDate[0] || null;
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    return null;
  }

  const favEvent = await getFavEvent();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero favEvent={favEvent} />
      </Suspense>
    </>
  );
}
