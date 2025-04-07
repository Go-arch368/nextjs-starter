"use client";

import React from "react";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="my-6 flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo or Brand Name */}
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Clerk-Template
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-base font-medium">
        <li>
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-green-700 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-green-700 transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-green-700 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div>
        <SignedOut>
          <SignInButton>
            <button className="rounded-md bg-green-700 text-white px-4 py-2 hover:bg-green-800 transition">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
