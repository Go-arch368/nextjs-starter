import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// Helper to toggle between signed-in/signed-out states
let isSignedIn = true;

jest.mock("@clerk/nextjs", () => ({
  SignedIn: ({ children }: React.PropsWithChildren) =>
    isSignedIn ? <>{children}</> : null,
  SignedOut: ({ children }: React.PropsWithChildren) =>
    isSignedIn ? null : <>{children}</>,
  SignInButton: ({ children }: React.PropsWithChildren) => (
    <button>{children || "Sign In"}</button>
  ),
  UserButton: () => <div data-testid="user-button">User</div>,
}));

import Navbar from "./navbar";

describe("Navbar", () => {
  afterEach(() => {
    cleanup();
    isSignedIn = true; // Reset after each test
  });

  it("renders the Browse All Categories button", () => {
    render(<Navbar />);
    expect(screen.getByText("Browse All Categories")).toBeInTheDocument();
  });

  it("renders key nav items", () => {
    render(<Navbar />);
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("Electronics")).toBeInTheDocument();
    expect(screen.getByText("Fashion")).toBeInTheDocument();
  });

  it("toggles mobile menu", () => {
    render(<Navbar />);
    const toggleBtn = screen.getAllByRole("button")[0]; // Menu toggle
    fireEvent.click(toggleBtn);
    expect(screen.getByText("Browse")).toBeInTheDocument();
  });

  // Uncomment this test when the mobile dropdown logic is stable
  // it("shows dropdown when mobile dropdown is toggled", async () => {
  //   render(<Navbar />);
  //   const toggleBtn = screen.getAllByRole("button")[0];
  //   fireEvent.click(toggleBtn);
  //   fireEvent.click(await screen.findByText("Groceries"));
  //   await waitFor(() => {
  //     expect(screen.getByText("Dals and Pulses")).toBeInTheDocument();
  //   });
  // });

  it("shows UserButton when signed in", () => {
    render(<Navbar />);
    expect(screen.getByTestId("user-button")).toBeInTheDocument();
  });

  it("shows Sign In button when signed out", () => {
    isSignedIn = false;
    render(<Navbar />);
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
