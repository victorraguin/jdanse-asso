import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../mongoose";
import Event from "@/models/Event";
import { middleware } from "@/api/middleware";
import { EventTypes } from "@/types/global";

export async function getEvents() {
  await dbConnect();
  try {
    const events = await Event.find({});
    if (!events) return [];
    const data = JSON.parse(JSON.stringify(events));
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function getEventById(id: string) {
  await dbConnect();
  try {
    const event = await Event.findById(id);
    if (!event) return [];
    const data = JSON.parse(JSON.stringify(event));
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function addEvent(event: Event) {
  await dbConnect();
  try {
    const newEvent = await Event.create(event);
    return NextResponse.json({ success: true, data: newEvent });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function updateEvent(event: EventTypes, req: NextRequest) {
  const authResponse = await middleware(req);
  if (authResponse.status !== 200) return authResponse;
  await dbConnect();
  try {
    const newEvent = await Event.findOneAndUpdate({}, event, {
      new: true,
      upsert: true,
    });
    return NextResponse.json({ success: true, data: newEvent });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function updateEventById(
  id: string,
  event: EventTypes,
  req: NextRequest
) {
  const authResponse = await middleware(req);
  if (authResponse.status !== 200) return authResponse;
  await dbConnect();
  try {
    const newEvent = await Event.findByIdAndUpdate(id, event, {
      new: true,
      runValidators: true,
    });
    if (!newEvent) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: newEvent });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function getFavoriteEvents() {
  await dbConnect();
  try {
    const events = await Event.find({ isFavorite: true });
    if (!events) return [];
    const closestFavEventDate = events.sort(
      (
        a: { date: string | number | Date },
        b: { date: string | number | Date }
      ) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        return aDate.getTime() - bDate.getTime();
      }
    );
    const data = JSON.parse(JSON.stringify(closestFavEventDate));
    return data[0];
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function deleteEvent(req: NextRequest) {
  const authResponse = await middleware(req);
  if (authResponse.status !== 200) return authResponse;
  await dbConnect();
  try {
    await Event.deleteOne({});
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}

export async function deleteEventById(id: string, req: NextRequest) {
  const authResponse = await middleware(req);
  if (authResponse.status !== 200) return authResponse;
  await dbConnect();
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return NextResponse.json(
        { success: false, error: "Event not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 400 }
    );
  }
}
