// __tests__/home.test.tsx
import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page"; // Adjust path as needed

// Mock the Button component from @heroui/button
jest.mock("@heroui/button", () => ({
  Button: ({
    children,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
  }) => <button {...props}>{children}</button>,
}));

describe("Home component", () => {
  it("renders main heading and description", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /welcome to our platform/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/explore the world of endless opportunities/i)
    ).toBeInTheDocument();
  });

  it("renders all 3 primary buttons", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /get started/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /browse categories/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /contact support/i })
    ).toBeInTheDocument();
  });

  it("renders all 3 feature cards", () => {
    render(<Home />);
    expect(screen.getByText(/hot deals/i)).toBeInTheDocument();
    expect(screen.getByText(/new arrivals/i)).toBeInTheDocument();
    expect(screen.getByText(/customer reviews/i)).toBeInTheDocument();
  });
});
