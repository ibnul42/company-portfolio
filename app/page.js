import Development from "@/components/Development";
import Featured from "@/components/Featured";
import HerSection from "@/components/HerSection";
import Hiring from "@/components/Hiring";
import Workflow from "@/components/Workflow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HerSection />
      <Workflow />
      <Development />
      <Featured />
      <Hiring />
    </div>
  );
}
