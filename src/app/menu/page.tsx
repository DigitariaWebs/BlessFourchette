"use client";

import React, { Suspense, useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { getMenuConfig, MenuItem } from "../../data/menuData";
import { useRouter, useSearchParams } from "next/navigation";
import { Cart } from "../../components/ui/Cart";
import { CartButton } from "../../components/ui/CartButton";

interface CartItem extends MenuItem {
  quantity: number;
}

function MenuContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const menuType = (searchParams.get("type") as string) || "school";
  const menuConfig = getMenuConfig(menuType);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);

      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const categories = [
    "School Menu",
    "Family Menu",
    "Weekend Menu",
    "Fritaille",
  ];

  const handleCategoryClick = (category: string) => {
    let newMenuType = "school"; // default

    if (category === "School Menu") {
      newMenuType = "school";
    } else if (category === "Family Menu") {
      newMenuType = "family";
    } else if (category === "Weekend Menu") {
      newMenuType = "weekend";
    } else if (category === "Fritaille") {
      newMenuType = "fritaille";
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
            {categories.map((category) => {
              // Determine if this category is active based on menu type
              let isActive = false;
              if (category === "School Menu" && menuType === "school") {
                isActive = true;
              } else if (category === "Family Menu" && menuType === "family") {
                isActive = true;
              } else if (
                category === "Weekend Menu" &&
                menuType === "weekend"
              ) {
                isActive = true;
              } else if (category === "Fritaille" && menuType === "fritaille") {
                isActive = true;
              }

              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={
                    isActive
                      ? "bg-[#7cb342] text-white px-6 py-3 rounded-lg font-medium text-sm tracking-wide transition-colors duration-200"
                      : "bg-transparent text-[#1a4d3a] px-6 py-3 rounded-lg font-medium text-sm tracking-wide border border-[#1a4d3a] hover:bg-[#7cb342] hover:text-white transition-all duration-200 cursor-pointer"
                  }
                >
                  {category}
                </button>
              );
            })}
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
                    <div key={item.id} className="pb-3 group">
                      <h4 className="text-xl font-medium text-[#1a4d3a] mb-3">
                        {item.title}
                      </h4>
                      <div className="flex items-baseline">
                        <span className="text-gray-600 text-sm flex-1 pr-2">
                          {item.description}
                        </span>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 border-b border-dotted border-gray-400 mx-2 mb-1 min-w-[40px]"></div>
                          <span className="text-[#7cb342] font-bold whitespace-nowrap">
                            {item.price}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="ml-2 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-lg transition-all hover:scale-110 shadow-md"
                            title="Add to cart"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Components */}
      <Cart
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {totalItems > 0 && (
        <CartButton
          itemCount={totalItems}
          onClick={() => setIsCartOpen(true)}
        />
      )}

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
