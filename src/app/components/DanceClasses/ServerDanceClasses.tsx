import { DanceClass } from "@/types/global";
import DanceClasses from "./DanceClasses";
import { Suspense } from "react";
import Loading from "@/utils/loading";

export default async function ServerDanceClasses() {
  async function getDanceClasses(): Promise<DanceClass[]> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/dances`
    );
    const data = (await response.json()).data;
    return data;
  }

  const danceClasses = await getDanceClasses();

  return (
    <Suspense fallback={<Loading />}>
      <DanceClasses classes={danceClasses} />
    </Suspense>
  );
}
