import Link from "next/link"
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-auto relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-accent)] rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-[var(--color-accent)] rounded-full translate-x-12 translate-y-12"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <Image
                  src="/Logo.png"
                  alt="Bless Fourchette Logo"
                  width={250}
                  height={250}
                  className="h-auto w-auto max-w-[250px] max-h-[250px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-2 inline-block">
              Navigation
            </h4>
            <nav className="space-y-4">
              <Link
                href="/#home"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                href="/#about-us"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1"
              >
                About
              </Link>
              <Link
                href="/#how-to-order"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1"
              >
                How to Order
              </Link>
              <Link
                href="/menu"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1"
              >
                Menu
              </Link>
              <Link
                href="/#contact-faq"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-all duration-300 hover:translate-x-1"
              >
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-2 inline-block">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@blessfourchette.com"
                    className="text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-300 block"
                  >
                    info@blessfourchette.com
                  </a>
                  <span className="text-gray-400 text-sm">
                    Email us anytime
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+18199623677"
                    className="text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-300 block"
                  >
                    +1 (819) 962-3677
                  </a>
                  <span className="text-gray-400 text-sm">Call for orders</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="block font-medium">
                      Mon-Thur: Open for school lunch orders
                    </span>
                    <span className="block">Mon-Fri: Open for families orders</span>
                    <span className="block">Sat-Sun: closed</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-[var(--color-accent)] border-b border-[var(--color-accent)] pb-2 inline-block">
              Stay Connected
            </h4>

            {/* Social Media */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Follow us for updates and delicious content
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[var(--color-accent)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Bless Fourchette. All rights
                reserved.
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving with love worldwide</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
