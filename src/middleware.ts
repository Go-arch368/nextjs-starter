// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  // 1. Define public routes matching your layout
  const publicRoutes = [
    "/",
    "/sign-in",
    "/sign-up",
    "/categories",
    "/categories/(.*)",
    "/api/(.*)",
  ];

  // 2. Skip auth for public routes
  if (publicRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // 3. CORRECT WAY: Get auth state (await the promise)
  const authState = await auth();

  // 4. Redirect unauthenticated users to your styled sign-in page
  if (!authState.userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  // 5. For authenticated users
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next|v1|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|svg|css|js|woff2?)$).*)",
  ],
};
