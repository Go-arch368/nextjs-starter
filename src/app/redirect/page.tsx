"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectAfterLogin() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/categories");
    }
  }, [isSignedIn, router]);

  return <div>Redirecting...</div>; 
}
