import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="bg-gray-50 p-8 pt-32 text-gray-800">
      <h1 className="mb-4 text-3xl font-bold">Welcome to Our Platform 🚀</h1>
      <p className="mb-6 text-lg">
        Explore the world of endless opportunities. Sign in to get started or
        browse our categories.
      </p>

      <div className="mb-8 flex gap-4">
        <Button color="primary">Get Started</Button>
        <Button color="success">Browse Categories</Button>
        <Button color="danger">Contact Support</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold">🔥 Hot Deals</h2>
          <p className="text-sm">
            Save big on our best-selling products this week. Limited time only!
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold">🛒 New Arrivals</h2>
          <p className="text-sm">
            Discover the latest additions to our collection across all
            categories.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-2 text-xl font-semibold">💬 Customer Reviews</h2>
          <p className="text-sm">
            See what our happy customers are saying about their experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
