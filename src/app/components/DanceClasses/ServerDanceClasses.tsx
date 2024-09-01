"use client";
import { DanceClass } from "@/types/global";
import DanceClasses from "./DanceClasses";
import { Suspense, use, useEffect, useState } from "react";
import Loading from "@/utils/loading";
import { getDanceClasses } from "@/lib/data/danceAction";

export default function ServerDanceClasses() {
  const [danceClasses, setDanceClasses] = useState<DanceClass[]>();
  
  useEffect(() => {
    getDanceClasses().then((data) => {
      setDanceClasses(data);
    });
  }, []);

  if (!danceClasses) {
    return <Loading />;
  }

  return (
    <div>
      <DanceClasses classes={danceClasses} />
    </div>
  );
}
