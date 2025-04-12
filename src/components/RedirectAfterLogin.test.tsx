import React from "react";
import { render, screen } from "@testing-library/react";
import RedirectAfterLogin from "@/app/redirect/page";
import { useUser } from "@clerk/nextjs";

// Mock Clerk useUser
jest.mock("@clerk/nextjs", () => ({
  useUser: jest.fn(),
}));

// Mock Next.js router
const pushMock = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("RedirectAfterLogin", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  it("renders the redirect message", () => {
    (useUser as jest.Mock).mockReturnValue({ isSignedIn: false });

    render(<RedirectAfterLogin />);
    expect(screen.getByText("Redirecting...")).toBeInTheDocument();
    expect(pushMock).not.toHaveBeenCalled(); // Extra safety check
  });

  it("redirects when user is signed in", () => {
    (useUser as jest.Mock).mockReturnValue({ isSignedIn: true });

    render(<RedirectAfterLogin />);
    expect(pushMock).toHaveBeenCalledWith("/categories");
  });
});
