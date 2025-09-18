import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-primary)] text-white shadow-lg">
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
            <a
              href="#services"
              className="px-3 py-2 hover:text-[var(--color-secondary)] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#mission"
              className="px-3 py-2 hover:text-[var(--color-secondary)] transition-colors font-medium"
            >
              Mission
            </a>
            <a
              href="#tarifs"
              className="px-3 py-2 hover:text-[var(--color-secondary)] transition-colors font-medium"
            >
              Tarifs
            </a>
            <a
              href="#activites"
              className="px-3 py-2 hover:text-[var(--color-secondary)] transition-colors font-medium"
            >
              Activités
            </a>
          </nav>

          {/* Contact button on the right */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
