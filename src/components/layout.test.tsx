import React from "react"; // Removed ReactNode import
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

// Mock ClerkProvider from @clerk/nextjs
jest.mock("@clerk/nextjs", () => {
  const MockClerkProvider = ({ children }: React.PropsWithChildren) => (
    <div data-testid="clerk-provider">{children}</div>
  );
  MockClerkProvider.displayName = "MockClerkProvider";
  return { ClerkProvider: MockClerkProvider };
});

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Inter: () => ({ className: "mocked-inter-font" }),
}));

// Mock Categories page
jest.mock("@/app/categories/page", () => {
  const MockCategories = () => (
    <div data-testid="categories">Mocked Categories</div>
  );
  MockCategories.displayName = "MockCategories";
  return MockCategories;
});

// Mock Providers
jest.mock("@/app/providers", () => {
  const MockProviders = ({ children }: React.PropsWithChildren) => (
    <div data-testid="providers">{children}</div>
  );
  MockProviders.displayName = "MockProviders";
  return { Providers: MockProviders };
});

describe("RootLayout", () => {
  it("renders layout correctly with children", () => {
    render(
      <RootLayout>
        <div data-testid="child">Test Child</div>
      </RootLayout>
    );

    expect(screen.getByTestId("clerk-provider")).toBeInTheDocument();
    expect(screen.getByTestId("categories")).toBeInTheDocument();
    expect(screen.getByTestId("providers")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
