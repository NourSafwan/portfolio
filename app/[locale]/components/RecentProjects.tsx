// import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { FaLocationArrow } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  bgImg: string;
  iconList: { id: number; name: string; image: string; }[];
  link: string;
}

const RecentProjects = () => {
  const t = useTranslations("main");
  const locale = useLocale();
  const dir = locale == 'ar' ? "rtl" : "ltr";
  const projects = t.raw("projects") as Project[];


  return (
    <div className="py-20" id="projects" dir={dir}>
      <h1 className="heading capitalize">
        {t("projectsTitle.p1")}{" "}
        <span className="text-purple">{t("projectsTitle.p2")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 mt-10">
        {projects.map(({ id, title, des, img, bgImg, iconList, link }) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={id}
          >
            <PinContainer title="Visit" href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden  mb-10">
                <div className="w-full h-full overflow-hidden rounded-3xl  ">
                  <img src={bgImg} alt="bg-img" />
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-[1px] px-5 left-1/2 -translate-x-1/2 w-"
                  />
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex flex-row items-center justify-start ">
                  <AnimatedTooltip items={iconList} />
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
