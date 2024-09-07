import Development from "@/components/Development";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Hiring from "@/components/Hiring";
import Workflow from "@/components/Workflow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Workflow />
      <Development />
      <Featured />
      <Hiring />
    </div>
  );
}
