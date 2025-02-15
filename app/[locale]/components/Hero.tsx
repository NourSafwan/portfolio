import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("main.hero");
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';  // Set text direction for Arabic

  return (
    <div className="pb-20 pt-36" id="top">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-0 -left-10 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-0 md:top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-0 md:top-10 left-[80%] h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-0 md:top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        <Spotlight className="top-0 -left-20 h-screen " fill="purple" />
      </div>

      <div className="h-screen w-full bg-black-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-center text-xs text-blue-100 max-w-80" dir={dir}>
          {t("title1")} <br />{t("title2")}
          </h2>
          <TextGenerateEffect
            words={t("TextGenerateEffect")}
            className="text-center text-[40px] md:text-5xl lg:text-6xl capitalize"
          />
          <p className="text-center capitalize md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl" dir={dir}>
            {t("p1")}<span className="text-purple">{t("p2")}</span>{t("p3")}
          </p>
          <a href="#about">
            <MagicButton
              title={t("button")}
              icon={<FaLocationArrow />}
              position={`${locale == "ar"?'left':'right'}`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
