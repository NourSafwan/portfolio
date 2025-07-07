import React from "react";

// import { workExperience } from "@/data";
import { Button } from "./ui/moving-border";
import { useTranslations, useLocale } from "next-intl";

interface Experiences {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}


const Experience = () => {
  const t = useTranslations("main");
  const workExperience = t.raw("workExperience")as Experiences[];
      const locale = useLocale();
      const dir = locale == 'ar' ? "rtl" : "ltr";
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        {t("workExperienceTitle.p1")} <span className="text-purple">{t("workExperienceTitle.p2")}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `1.75rem`,
            }}
            className="flex-1 text-white border-slate-800 "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 w-full px-4 md:px-8 items-center md:items-start" dir={dir}>
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5 ">
                <h1 className="text-center md:text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-center md:text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
