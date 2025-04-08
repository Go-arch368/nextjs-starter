// src/app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clerk + Next.js App",
  description: "Demo app using Clerk authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          headerSubtitle: "text-gray-900",
          headerTitle: "text-gray-900",
          dividerText: "text-gray-900",
          card: "bg-white shadow-lg",
          formButtonPrimary:
            "bg-green-700 hover:bg-green-800 text-white font-semibold",
        },
        variables: {
          colorText: "#111827",
          colorPrimary: "#047857",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
