import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

const nextConfigWithIntl = withNextIntl(nextConfig);

export default withSentryConfig(
  nextConfigWithIntl,
  {
    org: "nour-aldin-safwan",
    project: "portfolio",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);