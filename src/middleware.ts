import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

export default clerkMiddleware(
  async (auth, req) => {
    console.log("Middleware running...");
    console.log("Request URL:", req.url);
    
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  {
    afterSignInUrl: "/categories",
    afterSignUpUrl: "/categories",
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    "/(api|trpc)(.*)",
  ],
};
