import Loading from "@/utils/loading";
import { Suspense } from "react";
import BannerText from "./BannerText";
import { getBanner } from "@/lib/data/bannerAction";

export default async function ServerBanner() {
  const banner = await getBanner();

  return (
    <Suspense fallback={<Loading />}>
      {banner && <BannerText banner={banner} />}
    </Suspense>
  );
}
