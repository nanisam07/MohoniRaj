import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 text-earth-900 flex flex-col items-center justify-center p-6 text-center">
      <h2 className="editorial-heading text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-earth-600 mb-6">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold shadow-warm transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}
