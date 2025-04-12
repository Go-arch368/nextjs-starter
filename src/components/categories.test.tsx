// __tests__/categories.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import Categories from "@/app/categories/page";

// Mock the Navbar component and add a display name to resolve the warning
jest.mock("@/components/navbar", () => {
  const MockNavbar = () => (
    <div data-testid="homepage-mock">HomePage Component</div>
  );
  MockNavbar.displayName = "MockNavbar"; // Set a display name for the mocked component
  return MockNavbar;
});

describe("Categories component", () => {
  it("renders the HomePage component", () => {
    const { getByTestId } = render(<Categories />);
    expect(getByTestId("homepage-mock")).toBeInTheDocument();
  });
});
