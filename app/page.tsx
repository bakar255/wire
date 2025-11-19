import Image from "next/image";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <HeroSection/>
    </div>
  );
}
