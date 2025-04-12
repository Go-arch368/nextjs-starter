import React from "react";
import { render, screen } from "@testing-library/react";
import SignInPage from "@/app/sign-in/page";

// Mock the AuthWrapper component with displayName
jest.mock("@/components/AuthWrapper", () => {
  const MockAuthWrapper = () => (
    <div data-testid="auth-wrapper">Mocked AuthWrapper</div>
  );
  MockAuthWrapper.displayName = "AuthWrapper"; // Set the displayName explicitly
  return MockAuthWrapper;
});

describe("SignInPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the AuthWrapper component", () => {
    render(<SignInPage />);
    expect(screen.getByTestId("auth-wrapper")).toBeInTheDocument();
  });

  // Optional: Confirm page loads without crashing
  it("renders without throwing", () => {
    expect(() => render(<SignInPage />)).not.toThrow();
  });
});
