import Image from "next/image"

export function HeroSection() {
  return (
    <section id="accueil" className="relative h-screen overflow-hidden">
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
        <div className="mb-8">
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
          Bless Fourchette
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-lg max-w-4xl">
          Nourrir et servir selon nos valeurs et croyances
        </p>
      </div>

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>
    </section>
  );
}
