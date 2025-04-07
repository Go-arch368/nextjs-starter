"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

const About = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-xl">
        Please sign in to view this page
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold text-indigo-700">
        Hello, {user.firstName}!
      </h1>
    </div>
  );
};

export default About;
