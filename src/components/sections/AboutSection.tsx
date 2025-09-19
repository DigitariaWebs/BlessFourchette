import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about-us">
      {/* Title Section */}
      <div className="relative min-h-[40vh] pt-6 flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">
            Our Story
          </h2>
          <p className="text-2xl md:text-3xl text-[var(--color-foreground)] font-medium">
            A Mission Rooted in Faith and Community
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-6 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
                More Than Just a Meal Service
              </h3>
              <p className="text-lg text-[var(--color-foreground)] leading-relaxed mb-8">
                BLESS FOURCHETTE is more than just a meal service—it&apos;s a
                community founded on faith, generosity, and sharing. We believe
                that nourishing the body and soul go hand in hand, and that
                every meal is an opportunity to create connections and serve
                with love.
              </p>
            </div>

            {/* Scripture Highlight */}
            <div className="relative bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 p-8 rounded-2xl border-l-4 border-[var(--color-accent)]">
              <div className="absolute top-4 left-4 text-[var(--color-accent)] opacity-20">
                <svg
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic text-[var(--color-secondary)] leading-relaxed mb-4">
                  &quot;And God said: Behold, I have given you every herb
                  bearing seed, which is upon the face of all the earth, and
                  every tree, in which is the fruit of a tree yielding seed; to
                  you it shall be for meat.&quot;
                </p>
                <cite className="text-lg font-semibold text-[var(--color-accent)]">
                  — Genèse 1:29
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Shared table image */}
          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/AboutSection/ASharedTable.png"
              alt="A shared table with family and friends enjoying a meal together"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Giving Back Section */}
      <div className=" to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              Giving Back: The Heart of Our Business
            </h3>
            <div className="w-24 h-1 bg-[var(--color-secondary)] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hands of compassion image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/AboutSection/HandsOfCompassion.png"
                alt="Hands of compassion nurturing growth and life"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xl text-[var(--color-foreground)] leading-relaxed">
                A portion of every dollar you spend actively supports the fight
                against sickle cell anemia. We are proud to contribute to
                medical research, patient support, and awareness programs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    Research
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Funding innovative studies
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    Support
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Help for patients and families
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    Awareness
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Education and prevention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Vision Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
                Our Founder&apos;s Vision
              </h3>
              <div className="w-24 h-1 bg-[var(--color-secondary)] mb-8"></div>
            </div>

            <p className="text-xl text-[var(--color-foreground)] leading-relaxed">
              Our passion for holistic health and faith guides every aspect of
              BLESS FOURCHETTE. Supporting the fight against sickle cell anemia
              is not just a business mission—it&apos;s a calling from the heart,
              a deep conviction that we can make a difference in others&apos;
              lives.
            </p>

            <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-lg italic text-[var(--color-secondary)] font-medium">
                &quot;Every meal we prepare, every family we serve, every dollar
                we give back—all of this is part of a greater purpose to nourish
                our community and heal our world.&quot;
              </p>
            </div>
          </div>

          {/* Hands preparing healthy food image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/AboutSection/HandsPreparingHealthyFood.png"
              alt="Professional chef hands preparing healthy, nutritious food with care"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
