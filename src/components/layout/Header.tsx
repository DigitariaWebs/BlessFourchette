import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-secondary)] text-white shadow-lg">
      <div className="container mx-auto px-10 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="Bless Fourchette Logo"
              width={420}
              height={120}
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation in the middle */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/#accueil"
              className="px-3 py-2 hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="#notre-histoire"
              className="px-3 py-2 hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              À Propos
            </Link>
            <Link
              href="/#services"
              className="px-3 py-2 hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/menu"
              className="px-3 py-2 hover:text-[var(--color-primary)] transition-colors font-medium"
            >
              Menu
            </Link>
          </nav>

          {/* Contact button on the right */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
