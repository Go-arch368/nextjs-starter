// src/components/AuthWrapper.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import AuthWrapper from "@/components/AuthWrapper";

describe("AuthWrapper", () => {
  it("renders correctly", () => {
    render(<AuthWrapper />);
    expect(screen.getByTestId("auth-wrapper")).toBeInTheDocument();
  });
});
