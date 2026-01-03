import HeroSection from "./components/heroSection";
import Features from "./components/features";
import Footer from "./components/footer";
import Carousel from "./components/ui/Carousel";
import SocialProof from "./components/ui/SocialProof";

export default function Home() {
  return (
    <div className="bg-black font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <Features />
        <Carousel />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
