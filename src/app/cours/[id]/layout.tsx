import ServerBanner from "@/components/Banner/ServerBanner";
import Footer from "@/components/Footer";
import ServerHeader from "@/components/Header/ServerHeader";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div className="bg-black">
      <ServerBanner />
      <ServerHeader />
      {children}
      <Footer />
    </div>
  );
}
