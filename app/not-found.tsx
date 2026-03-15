import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl text-gray-400 mb-8">Page Not Found</h2>
      <Link 
        href="/"
        className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
