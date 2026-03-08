"use client";

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { LanguageSwitcher } from "@/i18n/LanguageSwitcher";
import { useI18n } from "@/i18n/useI18n";

function HeaderNav() {
  const { t } = useI18n();
  
  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
      <Link
        href="/#home"
        className="px-2 py-2 hover:text-[var(--color-primary)] transition-colors font-medium whitespace-nowrap"
      >
        {t("header.home")}
      </Link>
      <Link
        href="/#about-us"
        className="px-2 py-2 hover:text-[var(--color-primary)] transition-colors font-medium whitespace-nowrap"
      >
        {t("header.about")}
      </Link>
      <Link
        href="/#how-to-order"
        className="px-2 py-2 hover:text-[var(--color-primary)] transition-colors font-medium whitespace-nowrap"
      >
        {t("header.howToOrder")}
      </Link>
      <Link
        href="/menu"
        className="px-2 py-2 hover:text-[var(--color-primary)] transition-colors font-medium whitespace-nowrap"
      >
        {t("header.menu")}
      </Link>
      <Link
        href="/consultation"
        className="px-2 py-2 hover:text-[var(--color-primary)] transition-colors font-medium whitespace-nowrap"
      >
        {t("header.bookConsultation")}
      </Link>
      <Link
        href="/#contact-faq"
        className="px-2 py-2 hover:text-[var(--color-primary)] transition-colors font-medium whitespace-nowrap"
      >
        {t("header.faq")}
      </Link>
    </nav>
  );
}

export default function Header() {
  const { t } = useI18n();
  
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-secondary)] text-white shadow-lg">
      <div className="container mx-auto px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo on the left */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/Logo.png"
              alt="Bless Fourchette Logo"
              width={420}
              height={120}
              className="h-14 w-auto lg:h-16"
            />
          </div>

          {/* Navigation in the middle */}
          <HeaderNav />

          {/* Contact button and Language Switcher on the right */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Link href="/#contact-faq">
              <Button variant="default" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                {t("header.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
