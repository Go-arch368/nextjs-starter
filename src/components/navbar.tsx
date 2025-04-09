"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ChevronDown, Headphones, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

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
      dropdown: ["Men Wester wear", "Womens western wear"],
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
      //dropdown: ["Offers", "New Arrivals", "Gift Cards"],
      href: "/about",
    },
    {
      name: "Pages",
      dropdown: ["About", "FAQ", "Contact"],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <div
          className="relative"
          onMouseEnter={() => setIsBrowseOpen(true)}
          onMouseLeave={() => setIsBrowseOpen(false)}
        >
          <button className="flex items-center gap-2 rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800">
            Browse All Categories
            <ChevronDown size={16} />
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

        <ul className="relative hidden gap-6 text-sm font-medium text-gray-900 md:flex">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() =>
                (item.dropdown || item.nestedDropdown) &&
                setHoveredMenu(item.name)
              }
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link
                href={item.href || "#"}
                className="flex items-center gap-1 hover:text-green-700"
              >
                {item.name}
                {(item.dropdown || item.nestedDropdown) && (
                  <ChevronDown size={14} />
                )}
              </Link>

              {/* Simple dropdown */}
              {item.dropdown && hoveredMenu === item.name && (
                <ul className="absolute left-0 top-full z-50 mt-2 w-40 rounded-md border bg-white shadow-lg">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem}>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {item.nestedDropdown && hoveredMenu === item.name && (
                <div className="absolute left-0 top-full z-50 mt-2 flex w-[700px] rounded-md border bg-white p-4 shadow-lg">
                  {Object.entries(item.nestedDropdown).map(
                    ([category, subItems]) => (
                      <div key={category} className="w-1/3 px-4">
                        <div className="mb-2 text-base font-bold text-green-800">
                          {category}
                        </div>
                        <ul className="space-y-1">
                          {subItems.map((sub) => (
                            <li key={sub}>
                              <Link
                                href="#"
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-all hover:bg-green-100 hover:text-green-800"
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
          {[...browseCategories, ...navItems.map((item) => item.name)].map(
            (item) => (
              <li key={item}>
                <Link href="#">{item}</Link>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}
