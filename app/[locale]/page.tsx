
import Hero from "@/app/[locale]/components/Hero";
import Grid from "@/app/[locale]/components/Grid";
import { FloatingNav } from "@/app/[locale]/components/ui/FloatingNav";
import RecentProjects from "@/app/[locale]/components/RecentProjects";
// import { navItems } from "@/data";
import Testimonials from "@/app/[locale]/components/Testimonials";
import Experience from "@/app/[locale]/components/Experience";
import MyApproach from "@/app/[locale]/components/MyApproach";
import Footer from "@/app/[locale]/components/Footer";
import { ToTop } from "@/app/[locale]/components/ui/ToTop";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./components/LocaleSwitcher";


export default function Home() {
  const t = useTranslations("main");

  const navItems = t.raw("navItems");
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="gap-2" />
        <LocaleSwitcher/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <MyApproach />
        <Footer />
        <ToTop />
      </div>
    </main>
  );
}
