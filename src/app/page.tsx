import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="bg-gray-50 px-4 py-16 md:px-8 lg:px-16 text-gray-800">
  <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
    Welcome to Our Platform 🚀
  </h1>

  <p className="mb-6 text-base sm:text-lg md:text-xl">
    Explore the world of endless opportunities. Sign in to get started or browse our categories.
  </p>

  <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
    <Button color="primary" className="w-full sm:w-auto">Get Started</Button>
    <Button color="success" className="w-full sm:w-auto">Browse Categories</Button>
    <Button color="danger" className="w-full sm:w-auto">Contact Support</Button>
  </div>

 
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-2 text-lg font-semibold sm:text-xl">🔥 Hot Deals</h2>
      <p className="text-sm sm:text-base">
        Save big on our best-selling products this week. Limited time only!
      </p>
    </div>

    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-2 text-lg font-semibold sm:text-xl">🛒 New Arrivals</h2>
      <p className="text-sm sm:text-base">
        Discover the latest additions to our collection across all categories.
      </p>
    </div>

    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-2 text-lg font-semibold sm:text-xl">💬 Customer Reviews</h2>
      <p className="text-sm sm:text-base">
        See what our happy customers are saying about their experiences.
      </p>
    </div>
  </div>
</div>

  );
}
