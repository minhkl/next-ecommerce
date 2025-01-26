import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          <nav className="hidden items-center space-x-4 md:flex">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home Page
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-gray-900">
              Shop Now
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost">Join</Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
