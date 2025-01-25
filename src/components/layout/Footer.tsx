import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Subscribe Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold mb-4 block">
              Logo
            </Link>
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Subscribe to Updates</h3>
              <p className="text-sm text-gray-600 mb-4">
                Stay informed about our latest products and offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email Here"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button>Join</Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Read our policy here.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/order-tracking"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="/loyalty"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Loyalty Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
