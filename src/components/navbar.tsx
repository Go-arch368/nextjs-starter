"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ChevronDown, Headphones, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState<string | null>(
    null
  );

  const browseCategories = [
    "Vegetables",
    "Beverages",
    "Bakery",
    "Dairy Products",
    "Snacks",
  ];

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Groceries",
      dropdown: [
        "Dals and Pulses",
        "Ghee and Oils",
        "Atta and Flours",
        "Masala and Spices",
        "Rice and Rice products",
      ],
    },
    {
      name: "Electronics",
      dropdown: ["Mobiles", "Laptops", "Accessories"],
    },
    {
      name: "Fashion",
      dropdown: ["Men Western wear", "Womens western wear"],
    },
    {
      name: "Shop",
      nestedDropdown: {
        Groceries: ["Rice", "Milk", "Eggs"],
        Electronics: ["Mobile Phones", "Laptops", "Headphones"],
        Fashion: ["T-Shirts", "Dresses", "Shoes"],
      },
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Pages",
      dropdown: ["About", "FAQ", "Contact"],
    },
    { name: "Blog", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="h-16">
        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="p-2 text-gray-700 lg:hidden"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setIsBrowseOpen(true)}
              onMouseLeave={() => setIsBrowseOpen(false)}
            >
              <button className="flex items-center gap-2 whitespace-nowrap rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800">
                Browse All Categories <ChevronDown size={16} />
              </button>

              {isBrowseOpen && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md border bg-white shadow-lg">
                  {browseCategories.map((cat) => (
                    <li key={cat}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
            <ul className="flex gap-4 text-sm font-medium text-gray-900">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href || "#"}
                    className="flex items-center gap-1 whitespace-nowrap hover:text-green-700"
                  >
                    {item.name}
                    {(item.dropdown || item.nestedDropdown) && (
                      <ChevronDown size={14} />
                    )}
                  </Link>

                  {item.dropdown && hoveredMenu === item.name && (
                    <ul className="absolute left-0 top-full z-50 mt-2 w-48 rounded-md border bg-white shadow-lg">
                      {item.dropdown.map((sub) => (
                        <li key={sub}>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.nestedDropdown && hoveredMenu === item.name && (
                    <div className="absolute left-1/2 top-full z-50 mt-2 flex w-[700px] -translate-x-1/2 rounded-md border bg-white p-4 shadow-lg">
                      {Object.entries(item.nestedDropdown).map(
                        ([category, subItems]) => (
                          <div key={category} className="w-1/3 px-4">
                            <div className="mb-2 font-bold text-green-800">
                              {category}
                            </div>
                            <ul className="space-y-1">
                              {subItems.map((sub) => (
                                <li key={sub}>
                                  <Link
                                    href="#"
                                    className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-800"
                                  >
                                    {sub}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 font-semibold text-green-700 sm:flex sm:gap-3">
              <Headphones size={20} />
              <div className="text-right leading-tight">
                <div className="text-sm">1900 - 888</div>
                <div className="text-xs font-normal text-gray-600">
                  24/7 Support
                </div>
              </div>
            </div>

            <SignedOut>
              <SignInButton>
                <button className="hidden rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 md:block">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>

      {isMobileOpen && (
        <div className="bg-white px-6 pb-6 shadow-inner lg:hidden">
          <div className="mb-3 pt-2 font-semibold text-gray-800">Browse</div>
          <ul className="mb-6 space-y-3">
            {browseCategories.map((cat) => (
              <li key={cat}>
                <Link
                  href="#"
                  className="block rounded px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className="flex w-full items-center justify-between rounded px-2 py-2.5 text-left text-sm font-medium text-gray-800 hover:bg-gray-50"
                  onClick={() =>
                    setOpenDropdownMobile(
                      openDropdownMobile === item.name ? null : item.name
                    )
                  }
                >
                  {item.name}
                  {(item.dropdown || item.nestedDropdown) && (
                    <ChevronDown size={16} />
                  )}
                </button>

                {(item.dropdown || item.nestedDropdown) &&
                  openDropdownMobile === item.name && (
                    <ul className="mt-1 space-y-1 pl-4 text-sm text-gray-600">
                      {item.dropdown?.map((d) => (
                        <li key={d}>
                          <Link
                            href="#"
                            className="block rounded px-2 py-2 hover:bg-gray-50"
                          >
                            {d}
                          </Link>
                        </li>
                      ))}

                      {item.nestedDropdown &&
                        Object.entries(item.nestedDropdown).map(
                          ([cat, subs]) => (
                            <div key={cat} className="mb-2">
                              <div className="mb-1 mt-3 px-2 font-semibold text-green-700">
                                {cat}
                              </div>
                              <ul className="pl-2">
                                {subs.map((sub) => (
                                  <li key={sub}>
                                    <Link
                                      href="#"
                                      className="block rounded px-2 py-1.5 text-gray-700 hover:bg-gray-50"
                                    >
                                      {sub}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
