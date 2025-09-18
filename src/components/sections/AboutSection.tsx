import Image from "next/image"

export function AboutSection() {
  return (
    <section id="notre-histoire" className="bg-[var(--color-muted)]">
      {/* Title Section */}
      <div className="relative min-h-[40vh] pt-6 flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">
            Notre Histoire
          </h2>
          <p className="text-2xl md:text-3xl text-[var(--color-foreground)] font-medium">
            Une Mission Enracinée dans la Foi et la Communauté
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-6 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
                Plus qu&apos;un Service de Repas
              </h3>
              <p className="text-lg text-[var(--color-foreground)] leading-relaxed mb-8">
                BLESS FOURCHETTE est bien plus qu&apos;un service de
                repas—c&apos;est une communauté fondée sur la foi, la générosité
                et le partage. Nous croyons que nourrir le corps et l&apos;âme
                va de pair, et que chaque repas est une opportunité de créer des
                liens et de servir avec amour.
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
                  &quot;Et Dieu dit: Voici, je vous donne toute herbe portant de
                  la semence et qui est à la surface de toute la terre, et tout
                  arbre ayant en lui du fruit d&apos;arbre et portant de la
                  semence: ce sera votre nourriture.&quot;
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
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Giving Back Section */}
      <div className="bg-[var(--color-muted)] to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              Redonner: Le Cœur de Notre Entreprise
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
                className="object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <p className="text-xl text-[var(--color-muted-foreground)] leading-relaxed">
                Une partie de chaque dollar que vous dépensez soutient
                activement la lutte contre l&apos;anémie falciforme. Nous sommes
                fiers de contribuer à la recherche médicale, au soutien des
                patients et aux programmes de sensibilisation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    Recherche
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Financement d&apos;études innovantes
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    Soutien
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Aide aux patients et familles
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    Sensibilisation
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    Éducation et prévention
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
                La Vision de Notre Fondatrice
              </h3>
              <div className="w-24 h-1 bg-[var(--color-secondary)] mb-8"></div>
            </div>

            <p className="text-xl text-[var(--color-foreground)] leading-relaxed">
              Notre passion pour la santé holistique et la foi guide chaque
              aspect de BLESS FOURCHETTE. Soutenir la lutte contre l&apos;anémie
              falciforme n&apos;est pas seulement une mission d&apos;entreprise,
              C&apos;est un appel du cœur, une conviction profonde que nous
              pouvons faire une différence dans la vie des autres.
            </p>

            <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-lg italic text-[var(--color-secondary)] font-medium">
                &quot;Chaque repas que nous préparons, chaque famille que nous
                servons, chaque dollar que nous reversons—tout cela fait partie
                d&apos;un dessein plus grand pour nourrir notre communauté et
                guérir notre monde.&quot;
              </p>
            </div>
          </div>

          {/* Hands preparing healthy food image */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/AboutSection/HandsPreparingHealthyFood.png"
              alt="Professional chef hands preparing healthy, nutritious food with care"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
