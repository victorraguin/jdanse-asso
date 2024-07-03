import { EventTypes } from "@/types/global";
import Loading from "@/utils/loading";
import { Suspense } from "react";
import EventsList from "./EventList";

export default async function ServerEvents() {
    async function getEvents(): Promise<EventTypes[]> {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/events`
        );
        const data = (await response.json()).data;
        return data;
    }

    const events = await getEvents();

    return (
        <Suspense fallback={<Loading />}>
            <EventsList events={events} />
        </Suspense>
    );
}