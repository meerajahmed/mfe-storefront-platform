export function Footer() {
  return (
    <footer className="border-t bg-gray-50/50 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-bold text-2xl tracking-tight text-gray-900">Acme Platform</p>
          <p className="text-gray-500 text-base mt-4 max-w-xs leading-relaxed">
            The everything app for your business. Built with speed and security in mind.
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-4">Product</p>
          <nav className="flex flex-col gap-3 text-sm text-gray-600">
            <a href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="/docs" className="hover:text-blue-600 transition-colors">Documentation</a>
            <a href="/features" className="hover:text-blue-600 transition-colors">Features</a>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-gray-900 mb-4">Company</p>
          <nav className="flex flex-col gap-3 text-sm text-gray-600">
            <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
          </nav>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}