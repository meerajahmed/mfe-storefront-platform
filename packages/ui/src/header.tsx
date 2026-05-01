export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="/" className="font-bold text-2xl tracking-tight text-gray-900">
            Acme
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Docs
            </a>
            <a href="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/app"
            className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            Dashboard
          </a>
        </div>
      </div>
    </header>
  );
}