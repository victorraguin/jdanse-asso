import Loading from "@/utils/loading";
import { Suspense } from "react";
import BannerText from "./BannerText";
import { getBanner } from "@/lib/data/bannerAction";

export const revalidate = 0;
export const fetchCache = 'force-no-store';
export default async function ServerBanner() {
  const banner = await getBanner();

  return (
    <Suspense fallback={<Loading />}>
      {banner && <BannerText banner={banner} />}
    </Suspense>
  );
}
