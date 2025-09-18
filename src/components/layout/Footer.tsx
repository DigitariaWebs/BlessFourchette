import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] text-white mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">BLESS FOURCHETTE</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nourish with faith, share with love.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Navigation
            </h4>
            <nav className="space-y-3">
              <Link 
                href="/"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/menu"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Menu
              </Link>
              <Link 
                href="#a-propos"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Our Story
              </Link>
              <Link 
                href="#contact"
                className="block text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-[var(--color-accent)]">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--color-accent)]" />
                <a 
                  href="mailto:info@blessfourchette.com"
                  className="text-gray-300 hover:text-[var(--color-accent)] transition-colors duration-200"
                >
                  info@blessfourchette.com
                </a>
              </div>
            </div>
          </div>

          {/* Additional Space for Future Content */}
          <div className="md:col-span-1">
            {/* This column can be used for social media links, additional info, etc. */}
          </div>
        </div>

        {/* Bottom Divider and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bless Fourchette. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-400 hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
