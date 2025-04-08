import { Button } from "@heroui/button";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <h1 className="text-center text-4xl font-extrabold text-indigo-600">
        Hello, World! 👋
        <Button color="primary">Primary Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="success">Success Button</Button>
      </h1>
    </main>
  );
}
