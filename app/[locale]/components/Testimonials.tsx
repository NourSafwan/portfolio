import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import { testimonials } from "@/data";
import { useTranslations, useLocale } from "next-intl";

const Testimonials = () => {
  const t = useTranslations("main");
  const testimonials = t.raw("testimonials");
    const locale = useLocale();
    const dir = locale == 'ar' ? "rtl" : "ltr";
    const direction = locale == 'ar' ? "left" : "right";


  return (
    <section id="testimonials" className="py-20" >
      <h1 className="heading" dir={dir}>
      {t("testimonialsTitle.p1")} 
        <span className="text-purple"> {t("testimonialsTitle.p2")} </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction={direction}
            speed="slow"
            dir={dir}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
