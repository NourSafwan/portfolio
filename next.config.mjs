import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";

// Step 1: Create the next-intl plugin
const withNextIntl = createNextIntlPlugin();

// Step 2: Define your base Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {};

// Step 3: Apply the next-intl plugin to the base configuration
const nextConfigWithIntl = withNextIntl(nextConfig);

// Step 4: Apply the Sentry configuration to the next-intl-enabled config
export default withSentryConfig(nextConfigWithIntl, {
  // Sentry configuration options
  org: "nour-aldin-safwan",
  project: "portfolio",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});