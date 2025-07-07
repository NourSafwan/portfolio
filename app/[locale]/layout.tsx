import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Locale, routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// --- Font Setup ---
const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"], weight: "400" });

// --- Dynamic Metadata Setup ---
// This is the single, correct way to handle metadata for your multilingual site.
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    // --- Static Metadata (now inside generateMetadata) ---
    metadataBase: new URL("https://noursafwan.vercel.app"),
    themeColor: '#0F172A', // A dark color matching your theme
    manifest: '/manifest.json',

    // --- Dynamic Properties (based on locale) ---
    title: {
      default: t("title"),
      template: `%s | Nour Aldin Safwan`,
    },
    description: t("description"),
    keywords: [
        // Personal Names
        'Nour Safwan', 'Nour Aldin Safwan', 'نور صفوان', 'نور الدين صفوان',
        // Roles
        'Full Stack Developer', 'Backend Developer', 'Frontend Developer', 'Web Designer', 'UI/UX Designer',
        'مطور ويب متكامل', 'مطور باك اند', 'مطور فرونت اند', 'مصمم مواقع', 'مصمم UI/UX',
        // Core Technologies
        'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Next.js', 'React', 'Express.js',
        // Databases & APIs
        'MongoDB', 'SQL', 'PostgreSQL', 'Prisma', 'API Development', 'REST API',
        // Additional Tools & Skills
        'Figma', 'Responsive Design', 'Authentication', 'JWT'
    ],
    
    // --- Internationalization & SEO ---
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    
    // --- Social Media Sharing (Open Graph) ---
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: `/${locale}`,
      siteName: 'Nour Safwan Portfolio',
      images: [
        {
          url: '/preview.png', // This relative path uses metadataBase
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      locale: locale,
    },
  };
}

// --- Root Layout Component ---
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Validate the incoming locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Set the font based on the current language
  const fontClass = locale === "ar" ? cairo.className : inter.className;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={fontClass}>
        {/* Provides translation messages to client components */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          {/* Handles theme switching (dark/light mode) */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {/* Vercel's tools for performance and visitor analytics */}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}