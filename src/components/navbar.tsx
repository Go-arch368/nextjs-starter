"use client";

import React from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => (
  <nav className="my-6 flex items-center justify-between bg-white px-6 py-4 shadow-md">
   
    <Link href="/" className="text-2xl font-bold text-gray-800">
      Clerk-Template
    </Link>

    
    <ul className="hidden gap-6 text-base font-medium text-gray-700 md:flex">
      <li>
        <Link href="/" className="transition hover:text-green-700">
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className="transition hover:text-green-700">
          About
        </Link>
      </li>
      <li>
        <Link href="/services" className="transition hover:text-green-700">
          Services
        </Link>
      </li>
      <li>
        <Link href="/contact" className="transition hover:text-green-700">
          Contact
        </Link>
      </li>
    </ul>

    
    <div>
      <SignedOut>
        <SignInButton>
          <button className="rounded-md bg-green-700 px-4 py-2 text-white transition hover:bg-green-800">
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

export default Navbar;
