"use client";

import React from "react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => (
  <nav className="my-6 flex items-center justify-between bg-white px-6 py-4 shadow-md">
    Clerk-Template
    <ul className="hidden gap-6 text-base font-medium text-gray-700 md:flex">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
    <div>
      <SignedOut>
        <SignInButton>
          <button
            className="rounded-md bg-green-700 px-4 py-2 text-white transition hover:bg-green-800"
            data-testid="sign-in-btn"
          >
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div data-testid="user-button">
          <UserButton />
        </div>
      </SignedIn>
    </div>
  </nav>
);

export default Navbar;
