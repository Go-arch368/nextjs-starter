"use client";

import { useState } from "react";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ChevronDown, Headphones, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    "Home",
    "Groceries",
    "Electronics",
    "Fashion",
    "About",
    "Shop",
    "Blog",
    "Pages",
    "Contact",
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-4">
          <button
            aria-label="Browse all categories"
            className="group relative z-0 box-border flex h-10 min-w-20 transform-gpu select-none appearance-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md bg-green-700 px-4 py-1.5 text-sm font-medium text-white subpixel-antialiased outline-none tap-highlight-transparent hover:bg-green-800 data-[focus-visible=true]:z-10 data-[pressed=true]:scale-[0.97] data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-offset-2 data-[focus-visible=true]:outline-green-700"
          >
            Browse All Categories
            <ChevronDown size={16} />
          </button>
        </div>

        <ul className="hidden gap-6 text-sm font-medium text-gray-900 md:flex">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link href="#" className="hover:text-green-700">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="text-gray-700 hover:text-green-700"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2 font-semibold text-green-700">
            <Headphones size={20} />
            <div className="text-right leading-tight">
              <div className="text-sm">1900 - 888</div>
              <div className="text-xs font-normal text-gray-600">
                24/7 Support Center
              </div>
            </div>
          </div>

          <div>
            <SignedOut>
              <SignInButton>
                <button className="rounded-md bg-green-700 px-4 py-1.5 text-white hover:bg-green-800">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>

      {isMobileOpen && (
        <ul className="flex flex-col gap-3 border-t bg-white px-4 pb-4 text-sm font-medium text-gray-900 md:hidden">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link href="#" className="block py-1 hover:text-green-700">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
