import React from "react";
import { render } from "@testing-library/react";
import { Providers } from "@/app/providers";

jest.mock("@heroui/react", () => ({
  HeroUIProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="heroui-provider">{children}</div>
  ),
}));

describe("Providers component", () => {
  it("wraps children with HeroUIProvider", () => {
    const { getByTestId, getByText } = render(
      <Providers>
        <div>Test Child</div>
      </Providers>
    );

    expect(getByTestId("heroui-provider")).toBeInTheDocument();
    expect(getByText("Test Child")).toBeInTheDocument();
  });
});
