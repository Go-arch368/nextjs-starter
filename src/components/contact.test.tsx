// __tests__/contact.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "@/app/contact/page";

describe("Contact component", () => {
  it("renders the heading and description", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(
      screen.getByText("This is the contact page. Feel free to reach out!")
    ).toBeInTheDocument();
  });

  it("has proper styling classes applied", () => {
    const { container } = render(<Contact />);
    expect(container.firstChild).toHaveClass(
      "flex",
      "min-h-screen",
      "items-center"
    );
  });
});
