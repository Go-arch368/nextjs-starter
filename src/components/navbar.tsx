import React from "react";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => (
  <div className="my-10 flex items-center justify-between px-6">
    <div className="logo text-xl font-bold">Clerk-Template</div>
    <ul className="flex gap-4">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact Us</li>
    </ul>
    <SignedOut>
      <SignInButton>
        <button className="rounded-md bg-green-700 px-3 py-2">Sign In</button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
);

export default Navbar;
