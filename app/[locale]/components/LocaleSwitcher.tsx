import { useLocale } from "next-intl";
import Link from "next/link";

export default function LocaleSwitcher() {
    const locale = useLocale()
  return (
    <div className="z-50 absolute top-10 left-1/2 -translate-x-1/2 flex shadow-2xl shadow-purple rounded-full bg-black-100">
      <Link href={"/en"} className={`py-3 px-3 md:px-5 ${locale == 'en'?"bg-purple text-black-100":"bg-black-100 hover:bg-purple hover:text-black-100"} rounded-l-full transition-all`}>
      🇺🇸 English
      </Link>
      <Link href={"/ar"} className={`py-3 px-3 md:px-5 ${locale == 'ar'?"bg-purple text-black-100":"bg-black-100 hover:bg-purple hover:text-black-100"} rounded-r-full transition-all`}>
      🇪🇬 العربية
      </Link>
    </div>
  );
}