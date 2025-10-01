import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-5 py-3 flex justify-center sm:justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyApp</h1>

        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/product"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Product
          </Link>
          <Link
            href="/user"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            User
          </Link>
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
