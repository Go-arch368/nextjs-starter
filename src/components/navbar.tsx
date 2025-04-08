"use client";

import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => (
  <nav className="my-6 flex items-center justify-between bg-white px-6 py-4 shadow-md">
    <div className="text-xl font-semibold text-gray-900">Clerk Template</div>

    <ul className="hidden gap-6 text-base font-medium text-gray-700 md:flex">
      <li className="transition hover:text-green-700">Home</li>
      <li className="transition hover:text-green-700">About</li>
      <li className="transition hover:text-green-700">Services</li>
      <li className="transition hover:text-green-700">Contact</li>
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
