"use client";

import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { ChevronDown, Headphones } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="w-screen bg-gray-100">
      <Navbar className="w-full bg-white px-6 py-1 shadow-md">
        <NavbarContent className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              className="bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700"
              endContent={<ChevronDown size={16} />}
            >
              Browse All Categories
            </Button>
          </div>

          <div className="flex gap-6 text-sm font-medium text-gray-800">
            <NavbarItem>
              <Link href="#">Home</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Groceries</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Electronics</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Fashion</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">About</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Shop</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Blog</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Pages</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#">Contact</Link>
            </NavbarItem>
          </div>

          <div className="ml-auto flex items-center gap-6">
            {/* Support Info */}
            <div className="flex items-center gap-2 font-semibold text-green-600">
              <Headphones size={20} />
              <div className="text-right leading-tight">
                <div className="text-sm">1900 - 888</div>
                <div className="text-xs font-normal text-gray-500">
                  24/7 Support Center
                </div>
              </div>
            </div>

            <div>
              <SignedOut>
                <SignInButton>
                  <button
                    className="rounded-md bg-green-700 px-4 py-1.5 text-sm text-white transition hover:bg-green-800"
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
          </div>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
