// src/components/navbar.signedout.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock for signed-out scenario
jest.mock("@clerk/nextjs", () => {
  const SignedOut = ({ children }: React.PropsWithChildren) => <>{children}</>;
  SignedOut.displayName = "MockSignedOut";

  const SignInButton = ({ children }: React.PropsWithChildren) => (
    <button>{children}</button>
  );
  SignInButton.displayName = "MockSignInButton";

  return {
    SignedIn: () => null,
    SignedOut,
    SignInButton,
    UserButton: () => null,
  };
});

import Navbar from "./navbar";

describe("Navbar (Signed Out)", () => {
  it("shows Sign In button when signed out", () => {
    render(<Navbar />);
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
