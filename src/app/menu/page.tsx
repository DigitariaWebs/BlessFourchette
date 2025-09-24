"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { getMenuConfig } from "../../data/menuData";
import { useRouter, useSearchParams } from "next/navigation";

function MenuContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const menuType = (searchParams.get("type") as string) || "school";
  const menuConfig = getMenuConfig(menuType);

  const categories = [
    "School Menu",
    "Family Menu"
  ];

  const handleCategoryClick = (category: string) => {
    let newMenuType = "school"; // default

    if (category === "School Menu") {
      newMenuType = "school";
    } else if (category === "Family Menu") {
      newMenuType = "family";
    } 

    // Update the URL with the new menu type
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (newMenuType === "school") {
      newSearchParams.delete("type"); // Remove type param for default
    } else {
      newSearchParams.set("type", newMenuType);
    }

    const newUrl = newSearchParams.toString()
      ? `?${newSearchParams.toString()}`
      : "";

    router.push(`/menu${newUrl}`);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-[90vh] py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-2">
            <h1 className="text-4xl lg:text-6xl font-semibold text-[#1a4d3a] tracking-wider uppercase">
              {menuConfig.title}
            </h1>
          </div>

          {/* Decorative Image */}
          <div className="relative mb-16">
            <Image
              src="/Menu/HeroSection.png"
              alt="Menu - Decorative food on forks"
              className="w-full h-auto max-w-7xl mx-auto rounded-lg pt-10 pb-5"
              width={1200}
              height={700}
              priority
            />
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={
                  category === menuConfig.title
                    ? "bg-[#7cb342] text-white px-6 py-3 rounded-lg font-medium text-sm tracking-wide transition-colors duration-200"
                    : "bg-transparent text-[#1a4d3a] px-6 py-3 rounded-lg font-medium text-sm tracking-wide border border-[#1a4d3a] hover:bg-[#7cb342] hover:text-white transition-all duration-200 cursor-pointer"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Notes Section - Only for School menu */}
      {menuConfig.notes && menuConfig.notes.length > 0 && (
        <section className="py-8 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-[#1a4d3a] mb-4">
                Important Notes:
              </h3>
              <ul className="space-y-2">
                {menuConfig.notes.map((note, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#7cb342] font-bold mr-2">
                      {index + 1}.
                    </span>
                    <span className="text-gray-700">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Menu Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {menuConfig.sections.map((section, sectionIndex) => (
            <div
              key={section.id}
              className={`mb-10 p-8 rounded-lg ${
                sectionIndex % 2 === 1 ? "bg-stone-50" : "bg-white"
              }`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  sectionIndex % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    sectionIndex % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    width={500}
                    height={384}
                  />
                </div>

                {/* Menu Items */}
                <div
                  className={`space-y-3 ${
                    sectionIndex % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-[#1a4d3a] text-sm font-bold mb-4 tracking-wider">
                    {section.title}
                  </h3>
                  {section.items.map((item) => (
                    <div key={item.id} className="pb-3">
                      <h4 className="text-xl font-medium text-[#1a4d3a] mb-3">
                        {item.title}
                      </h4>
                      <div className="flex items-baseline">
                        <span className="text-gray-600 text-sm">
                          {item.description}
                        </span>
                        <div className="flex-1 border-b border-dotted border-gray-400 mx-2 mb-1"></div>
                        <span className="text-[#7cb342] font-bold">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function Menu() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-[#1a4d3a]">Loading menu...</div>}>
      <MenuContent />
    </Suspense>
  );
}
