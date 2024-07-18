"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "./../components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Experience from "./../components/Experience";
import MyApproach from "./../components/MyApproach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <MyApproach />
        <Footer />
      </div>
    </main>
  );
}
