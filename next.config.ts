/* eslint-disable */
import type { NextConfig } from "next";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = withPWA({
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  // ======== NEW ADDITIONS ========
  experimental: {
    serverComponentsExternalPackages: ["@clerk/nextjs"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Fix Cloudflare/Lighthouse cookie warnings
        {
          key: "Content-Security-Policy",
          value: [
            "script-src 'self' https://clerk.accounts.dev",
            "connect-src 'self' https://clerk.accounts.dev",
          ].join("; "),
        },
        // Force secure cookies for Clerk
        {
          key: "Set-Cookie",
          value: `__Secure-auth=1; Path=/; Secure; SameSite=Lax; HttpOnly`,
        },
      ],
    },
  ],
  // Fix 404 errors for RSC requests
  rewrites: async () => [
    {
      source: "/blog:_rsc",
      destination: "/blog",
    },
  ],
});

export default nextConfig;