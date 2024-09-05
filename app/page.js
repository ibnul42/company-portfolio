import Featured from "@/components/Featured";
import HerSection from "@/components/HerSection";
import Hiring from "@/components/Hiring";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HerSection />
      <Featured />
      <Hiring />
    </div>
  );
}
