import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(
  async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  {
    afterSignInUrl: "/categories", // optional default if redirectUrl not given
    afterSignUpUrl: "/categories",

  }
);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Matches everything except static files
}