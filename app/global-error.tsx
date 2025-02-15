"use client";

import * as Sentry from "@sentry/nextjs";
import NextError from "next/error";
import { useEffect } from "react";
import Link from "next/link";
import { routing } from '@/i18n/routing';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div>
          <h1>Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link href={`/${routing.defaultLocale}`}>
            Go to the default page
          </Link>
        </div>
        {/* <NextError statusCode={0} /> */}
      </body>
    </html>
  );
}