import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Acme Platform</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The everything app for your business.
      </p>
      <nav className="flex gap-4">
        <a href="/pricing" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Pricing
        </a>
        <a href="/docs" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
          Documentation
        </a>
      </nav>
    </div>
  );
}
