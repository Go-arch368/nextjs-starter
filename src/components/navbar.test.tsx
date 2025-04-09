import { render, screen, fireEvent, act } from "@testing-library/react";
import Navbar from "./navbar";
import "@testing-library/jest-dom";
import React, { ReactNode } from "react";

jest.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  SignedOut: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  SignInButton: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
  UserButton: () => <div>UserButton</div>,
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("Navbar Component", () => {
  it("renders Browse All Categories button", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /browse all categories/i })
    ).toBeInTheDocument();
  });

  it("shows dropdown on Browse All Categories hover", async () => {
    render(<Navbar />);
    const browseBtn = screen.getByRole("button", {
      name: /browse all categories/i,
    });

    act(() => {
      fireEvent.mouseEnter(browseBtn);
    });

    expect(await screen.findByText("Vegetables")).toBeInTheDocument();
    expect(await screen.findByText("Dairy Products")).toBeInTheDocument();
  });
});
