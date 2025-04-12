// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const publicRoutes = [
    "/",
    "/sign-in",
    "/sign-up",
    "/categories",
    "/categories/(.*)",
    "/api/(.*)",
  ];

  if (publicRoutes.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const authState = await auth();

  if (!authState.userId) {
    const signInUrl = new URL("/sign-in", req.url);
    signInUrl.searchParams.set("redirect_url", req.nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next|v1|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|svg|css|js|woff2?)$).*)",
  ],
};
