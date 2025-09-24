"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutSection() {
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
      title: "Djon Djon Rice"
    },
    {
      src: "/AboutSection/Plantains.png",
      alt: "Smashed fried plantains",
      title: "Fried Plantains"
    },
    {
      src: "/AboutSection/pureePoidsNoir.jpg",
      alt: "Black bean purée and white rice",
      title: "Black Bean Purée"
    },
    {
      src: "/AboutSection/rizcolle.jpg",
      alt: "Haitian red beans and rice",
      title: "Red Beans & Rice"
    },
    {
      src: "/AboutSection/saladeBettrave.jpg",
      alt: "beet salad",
      title: "Beet Salad"
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
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Content overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.h3
                  className="text-lg font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {image.title}
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
                <p className="text-1xl md:text-2xl font-serif italic text-[var(--color-secondary)] leading-relaxed mb-4">
                  &quot;And God said: Behold, I have given you every herb
                  bearing seed, which is upon the face of all the earth, and
                  every tree, in which is the fruit of a tree yielding seed; to
                  you it shall be for meat.&quot;
                </p>
                <cite className="text-lg font-semibold text-[var(--color-accent)]">
                  — Genesis 1:29
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
