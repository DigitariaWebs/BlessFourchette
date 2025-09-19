import React from 'react';

export function HowToOrderSection() {
  return (
    <section id="how-to-order" className="py-20 px-6 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            HOW TO ORDER
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--color-secondary)]"></div>
            <h3 className="text-xl md:text-2xl text-[var(--color-secondary)] font-medium">
              Simple • Fast • Secure
            </h3>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)]"></div>
          </div>
          <p className="text-xl text-[var(--color-foreground)] leading-relaxed max-w-2xl mx-auto">
            Order fresh, convenient meals in a few easy steps. Choose your menu,
            pick your date, and pay securely.
          </p>
        </div>

        {/* Ordering Steps - Clean Minimalist Design */}
        <div className="mb-24">
          {/* Steps - Vertical Timeline Design */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-4xl font-bold text-white">1</span>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent mt-8"></div>
                </div>

                <div className="flex-grow">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-muted)] group-hover:border-[var(--color-accent)]/30 group-hover:shadow-xl transition-all duration-300">
                    <h4 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
                      Choose Your Menu
                    </h4>
                    <p className="text-[var(--color-foreground)] text-lg leading-relaxed mb-4">
                      Browse our Menu École (Monday-Thursday) for school meals
                      or Menu Famille (Friday) for family platters. Each option
                      features fresh, nutritious ingredients.
                    </p>
                    <div className="flex items-center gap-3 bg-[var(--color-accent)]/10 rounded-xl p-4">
                      <svg
                        className="w-5 h-5 text-[var(--color-accent)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[var(--color-accent)] font-medium">
                        Order deadline: 6:00 PM the day before
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]  rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-4xl font-bold text-white">2</span>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent mt-8"></div>
                </div>

                <div className="flex-grow">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-muted)] group-hover:border-[var(--color-accent)]/30 group-hover:shadow-xl transition-all duration-300">
                    <h4 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
                      Customize Your Order
                    </h4>
                    <p className="text-[var(--color-foreground)] text-lg leading-relaxed mb-4">
                      Select your preferred delivery date, specify the number of
                      portions needed, and choose between pickup or delivery
                      options.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                        <span>Date selection</span>
                      </div>
                      <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
                        <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                        <span>Portion control</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]  rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-4xl font-bold text-white">3</span>
                    </div>
                  </div>
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent mt-8"></div>
                </div>

                <div className="flex-grow">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-muted)] group-hover:border-[var(--color-accent)]/30 group-hover:shadow-xl transition-all duration-300">
                    <h4 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
                      Add Special Instructions
                    </h4>
                    <p className="text-[var(--color-foreground)] text-lg leading-relaxed mb-4">
                      Include any important notes such as food allergies,
                      dietary restrictions, school information, or specific
                      delivery instructions.
                    </p>
                    <div className="bg-[var(--color-muted)]/30 rounded-xl p-4">
                      <p className="text-[var(--color-muted-foreground)] italic">
                        &ldquo;Please note: vegetarian option for classroom 3B,
                        no nuts due to allergies&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]  rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-4xl font-bold text-white">4</span>
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-muted)] group-hover:border-[var(--color-accent)]/30 group-hover:shadow-xl transition-all duration-300">
                    <h4 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
                      Secure Payment & Confirmation
                    </h4>
                    <p className="text-[var(--color-foreground)] text-lg leading-relaxed mb-4">
                      Complete your payment using your preferred method.
                      You&apos;ll receive instant confirmation and tracking
                      information for your order.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-2 rounded-full text-sm font-medium">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Secure Payment
                      </span>
                      <span className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-2 rounded-full text-sm font-medium">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Instant Confirmation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
