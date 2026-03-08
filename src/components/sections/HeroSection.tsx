"use client";

import Image from "next/image"
import { useI18n } from "@/i18n/useI18n"

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HeroSection.jpg"
        alt="Bless Fourchette"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
        {/* Favicon/Logo */}
        <div className="mb-3">
          <Image
            src="/favicon.png"
            alt="Bless Fourchette Logo"
            width={220}
            height={220}
            className="drop-shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg text-[var(--color-primary)]">
          {t("hero.title")}
        </h1>

        {/* Subtitle */}
        <section className=" max-w-4xl flex flex-col gap-5 justify-center items-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-lg">{t("hero.subtitle")}</p>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent" />
          <p className="text-md md:text-xl lg:text-2xl font-medium drop-shadow-lg max-w-4xl text-[var(--color-secondary)] px-2">
            {t("hero.description")}
          </p>
        </section>
        
      </div>

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
    </section>
  );
}
