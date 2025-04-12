import { NextResponse } from "next/server";
import clerkMiddleware from "./middleware"; // Adjust the import path as necessary

// Mock the Clerk middleware and necessary Next.js objects
jest.mock("@clerk/nextjs/server", () => ({
  clerkMiddleware: jest.fn((handler) => handler),
}));

// Mock NextResponse
jest.mock("next/server", () => ({
  NextResponse: {
    next: jest.fn().mockReturnValue({ next: true }),
    redirect: jest.fn().mockImplementation((url) => ({ redirect: true, url })),
  },
}));

// Define types for mock objects
interface MockAuth {
  userId: string | null;
  auth: jest.Mock;
}

interface MockRequest {
  nextUrl: { pathname: string; searchParams: URLSearchParams };
  url: string;
}

describe("clerkMiddleware", () => {
  let mockAuth: MockAuth;
  let mockReq: MockRequest;

  beforeEach(() => {
    // Mock auth object
    mockAuth = {
      userId: null,
      auth: jest
        .fn()
        .mockImplementation(async () => ({ userId: mockAuth.userId })),
    };

    // Mock request object
    mockReq = {
      nextUrl: { pathname: "/", searchParams: new URLSearchParams() },
      url: "http://localhost:3000",
    };

    jest.clearAllMocks();
  });

  const setRequestPath = (path: string) => {
    mockReq.nextUrl.pathname = path;
  };

  describe("public routes", () => {
    const publicRoutes = [
      "/",
      "/sign-in",
      "/sign-up",
      "/categories",
      "/categories/123",
      "/api/test",
    ];

    it.each(publicRoutes)(
      "should allow access to public route %s",
      async (path) => {
        setRequestPath(path);
        const response = await clerkMiddleware(mockAuth, mockReq);
        expect(NextResponse.next).toHaveBeenCalled();
        expect(response).toEqual({ next: true });
      }
    );
  });

  describe("protected routes", () => {
    beforeEach(() => {
      setRequestPath("/protected");
    });

    it("should redirect to sign-in when not authenticated", async () => {
      const response = await clerkMiddleware(mockAuth, mockReq);

      expect(mockAuth.auth).toHaveBeenCalled();
      expect(NextResponse.redirect).toHaveBeenCalledWith(
        new URL("/sign-in?redirect_url=%2Fprotected", "http://localhost:3000")
      );
      expect(response).toEqual({ redirect: true, url: expect.any(URL) });
    });

    it("should allow access when authenticated", async () => {
      mockAuth.userId = "user_123";
      const response = await clerkMiddleware(mockAuth, mockReq);
      expect(response).toEqual({ next: true });
    });
  });

  describe("config matcher", () => {
    it("should have the correct matcher configuration", async () => {
      const { config } = await import("./middleware"); // Using `import` instead of `require`
      expect(config.matcher).toEqual([
        "/((?!api|_next|v1|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|svg|css|js|woff2?)$).*)",
      ]);
    });
  });
});
