"use client";

import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { ChevronDown, Headphones } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { isSignedIn } = useClerk();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/categories");
    }
  }, [isSignedIn, router]);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
        <Navbar className="px-6 py-1">
          <NavbarContent className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <Button className="flex items-center gap-2 bg-green-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-green-700">
                Browse All Categories
                <ChevronDown size={16} />
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

      <div className="bg-gray-100 pt-20">
        <div className="mx-auto max-w-4xl p-6">
          <h1 className="mb-4 text-3xl font-bold">Welcome to Our Store!</h1>
          <p className="text-lg text-gray-700">
            Explore a wide range of categories including groceries, electronics,
            fashion, and more. Browse through our blog, check out the latest
            deals, or contact our 24/7 support center.
          </p>
        </div>
      </div>
    </>
  );
}
