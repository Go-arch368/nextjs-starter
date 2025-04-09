import dynamic from "next/dynamic";

const SignIn = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignIn),
  {
    ssr: false,
  }
);

export default function AuthWrapper() {
  return <SignIn />;
}
