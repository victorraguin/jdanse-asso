import ServerBanner from "@/components/Banner/ServerBanner";
import Footer from "@/components/Footer";
import ServerHeader from "@/components/Header/ServerHeader";

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
