import { Suspense } from "react";
import React from "react";
import Loading from "@/utils/loading";
import Hero from "./Hero";
import { get } from "lodash";
import { getFavoriteEvents } from "@/lib/data/eventAction";

export default async function ServerHero() {

  const favEvent = await getFavoriteEvents()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Hero favEvent={favEvent} />
      </Suspense>
    </>
  );
}
