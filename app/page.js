import Blogs from "@/components/Blogs";
import CaseStudies from "@/components/CaseStudies";
import Development from "@/components/Development";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import Hiring from "@/components/Hiring";
import Services from "@/components/Services";
import WayOfBuilding from "@/components/WayOfBuilding";
import Workflow from "@/components/Workflow";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <CaseStudies />
      <WayOfBuilding />
      <Workflow />
      <Development />
      <Featured />
      {/* <Blogs /> */}
      {/* <Hiring /> */}
    </div>
  );
}
