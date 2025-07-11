import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

// import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { useTranslations, useLocale } from "next-intl";

interface SocialLinks {
  id: number;
  img: string;
  link: string;
}

const Footer = () => {
  const t = useTranslations("main");
  const socialMedia = t.raw("socialMedia") as SocialLinks[];
  
  const locale = useLocale();
  const dir = locale == 'ar' ? "rtl" : "ltr";

  const year = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={384}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center" dir={dir}>
        <h1 className="heading lg:max-w-[45vw]">
          {t("footer.title.p1")} <span className="text-purple">{t("footer.title.p2")}</span> {t("footer.title.p3")}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        {t("footer.desc")}
        </p>
        <a href="mailto:nouraldin374@gmail.com">
          <MagicButton
            title={t("footer.button")}
            icon={<FaLocationArrow />}
            position={`${locale == "ar"?'left':'right'}`}
          />
        </a>
      </div>
      <div className="flex mt-16 mb-10 md:flex-row flex-col-reverse justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light pt-7" dir={dir}>
        {t("footer.copyright")} © {isNaN(year)? "2025" : year} {t("footer.name")}
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 max-sm:mt-5"
              href={info.link}
              target="_blank"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
