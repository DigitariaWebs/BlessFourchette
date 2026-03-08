"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/useI18n"

export function AboutSection() {
  const { t } = useI18n();
  
  // Tailwind height classes for each image
  const imageHeightClasses = [
    "h-48 md:h-80", // 200px mobile, 350px desktop
    "h-44 md:h-64", // 180px mobile, 280px desktop  
    "h-40 md:h-56", // 160px mobile, 240px desktop
    "h-44 md:h-64", // 180px mobile, 280px desktop
    "h-48 md:h-80"  // 200px mobile, 350px desktop
  ]
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  const hoverVariants = {
    hover: {
      scale: 1.02,
      y: -5
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1
    }
  }

  const imageData = [
    {
      src: "/AboutSection/djondjonriz.webp",
      alt: "Haitian black rice jonjon",
      titleKey: "about.djonDjonRice"
    },
    {
      src: "/AboutSection/Plantains.png",
      alt: "Smashed fried plantains",
      titleKey: "about.friedPlantains"
    },
    {
      src: "/Menu/Couscous.png",
      alt: "Delicious Haitian couscous",
      titleKey: "about.couscous"
    },
    {
      src: "/AboutSection/rizcolle.jpg",
      alt: "Haitian red beans and rice",
      titleKey: "about.redBeansRice"
    },
    {
      src: "/AboutSection/saladeBettrave.jpg",
      alt: "beet salad",
      titleKey: "about.beetSalad"
    }
  ]

  return (
    <section id="about-us">
      {/* Food pictures Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 mt-10 justify-center items-center md:items-end w-full overflow-hidden px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {imageData.map((image, index) => (
          <motion.div
            key={index}
            className={`relative group cursor-pointer w-full md:flex-1 ${imageHeightClasses[index]}`}
            variants={imageVariants}
            whileHover="hover"
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg"
              variants={hoverVariants}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content overlay */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.h3
                  className="text-lg font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {t(image.titleKey)}
                </motion.h3>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      {/* Title Section */}
      <div className="relative min-h-[40vh] pt-6 flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">
            {t("about.ourStory")}
          </h2>
          <p className="text-2xl md:text-3xl text-[var(--color-foreground)] font-medium">
            {t("about.missionSubtitle")}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative py-6 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
                {t("about.moreThanMealService")}
              </h3>
              <p className="text-lg text-[var(--color-foreground)] leading-relaxed mb-8">
                {t("about.mealServiceDescription")}
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
                <p className="text-1xl md:text-2xl font-serif italic text-[var(--color-secondary)] leading-relaxed mb-4">
                  &quot;{t("about.scriptureQuote")}&quot;
                </p>
                <cite className="text-lg font-semibold text-[var(--color-accent)]">
                  — {t("about.scriptureReference")}
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Shared table image */}
          <div className="relative h-96 md:h-[540px] rounded-2xl overflow-hidden">
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
              {t("about.givingBack")}
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
                {t("about.givingBackDescription")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    {t("about.research")}
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {t("about.researchDescription")}
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    {t("about.support")}
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {t("about.supportDescription")}
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <h4 className="font-bold text-[var(--color-secondary)] mb-2">
                    {t("about.awareness")}
                  </h4>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {t("about.awarenessDescription")}
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
                {t("about.foundersVision")}
              </h3>
              <div className="w-24 h-1 bg-[var(--color-secondary)] mb-8"></div>
            </div>

            <p className="text-xl text-[var(--color-foreground)] leading-relaxed">
              {t("about.foundersVisionDescription")}
            </p>

            <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
              <p className="text-lg italic text-[var(--color-secondary)] font-medium">
                &quot;{t("about.foundersQuote")}&quot;
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
