import { EventTypes } from "@/types/global";
import Loading from "@/utils/loading";
import { Suspense } from "react";
import EventsList from "./EventList";
import { getEvents } from "@/lib/data/eventAction";

export const revalidate = 0;
export default async function ServerEvents() {
  const events = await getEvents();

  return (
    <Suspense fallback={<Loading />}>
      {events.length === 0 && <></>}
      {events.length > 0 && <EventsList events={events} />}
    </Suspense>
  );
}
