export default function DocsHomePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-gray-600 mb-8">
        Everything you need to build with Acme Platform.
      </p>
      <div className="grid gap-4">
        <a href="/docs/getting-started" className="block p-4 border rounded-lg hover:border-blue-500">
          <h2 className="font-semibold">Getting Started</h2>
          <p className="text-gray-600 text-sm">Learn the basics</p>
        </a>
        <a href="/docs/api" className="block p-4 border rounded-lg hover:border-blue-500">
          <h2 className="font-semibold">API Reference</h2>
          <p className="text-gray-600 text-sm">Complete API documentation</p>
        </a>
      </div>
    </div>
  );
}