import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import {Locale, routing} from '@/i18n/routing';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"], weight: "400" });

export const metadata: Metadata = {
  title: "Nour Safwan",
  description:
    "A Full Stack JavaScript Developer 🚀, I consider myself as a skilled JS Developer With Exceptional talents and skills.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {


   // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const fontClass = locale === 'ar' ? cairo.className : inter.className;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={fontClass}>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
