'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are your order deadlines?",
    answer: "Orders must be placed by 6:00 PM the day before delivery. For example, to receive meals on Monday, you must order by Sunday at 6:00 PM. This ensures we have enough time to prepare fresh, quality meals for everyone."
  },
  {
    question: "How do you handle food allergies and dietary restrictions?",
    answer: "We take allergies and dietary restrictions very seriously. Please specify any allergies or dietary needs in the special instructions section when placing your order. We can accommodate most dietary restrictions including vegetarian, gluten-free, and nut-free options. Our kitchen follows strict protocols to prevent cross-contamination."
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer: "Yes, you can modify or cancel your order up to 6:00 PM the day before delivery. After this deadline, we cannot guarantee changes as meal preparation may have already begun. Please contact us as soon as possible if you need to make changes."
  },
  {
    question: "What areas do you deliver to?",
    answer: "We currently deliver to schools and families within our service area. During checkout, you can enter your address to confirm delivery availability. If you're outside our current delivery zone, pickup options are available at our location."
  },
  {
    question: "How do I track my order?",
    answer: "After placing your order, you'll receive a confirmation email with tracking information. We'll send updates when your order is being prepared and when it's out for delivery. You can also contact us directly for real-time updates on your order status."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and secure online payment methods. All transactions are processed through our secure payment gateway to ensure your financial information is protected."
  }
];

function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      // If clicking the same item, just close it
      setOpenItem(null);
    } else if (openItem !== null) {
      // If another item is open, close it first then open the new one
      setOpenItem(null);
      setTimeout(() => {
        setOpenItem(index);
      }, 300); // Wait for close animation to complete (300ms)
    } else {
      // If no item is open, open immediately
      setOpenItem(index);
    }
  };

  return (
    <div className="space-y-4">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg border border-[var(--color-muted)] overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[var(--color-muted)]/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50"
          >
            <h4 className="text-lg font-semibold text-[var(--color-secondary)] pr-4">
              {item.question}
            </h4>
            <div
              className={`flex-shrink-0 w-6 h-6 text-[var(--color-accent)] transition-transform duration-200 ${
                openItem === index ? "rotate-180" : ""
              }`}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-5 pt-2">
              <div className="w-full h-px bg-gradient-to-r from-[var(--color-accent)]/20 to-transparent mb-4"></div>
              <p className="text-[var(--color-foreground)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ContactAndFaqSection() {
  return (
    <section id="contact-faq" className="py-20 px-6 scroll-mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            CONTACT / FAQ
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[var(--color-secondary)]"></div>
            <h3 className="text-xl md:text-2xl text-[var(--color-secondary)] font-medium">
              We&apos;re here to help with your questions
            </h3>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)]"></div>
          </div>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information - Left Side */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-muted)]">
              <h3 className="text-3xl font-bold text-[var(--color-secondary)] mb-6">
                Contact Us
              </h3>
              <div className="w-16 h-1 bg-[var(--color-accent)] mb-8"></div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:info@blessfourchette.com"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-muted)]/30 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)] mb-1 transition-colors duration-200">
                      Email
                    </h4>
                    <span className="text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
                      info@blessfourchette.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-muted)]/30 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)] mb-1 transition-colors duration-200">
                      Phone
                    </h4>
                    <span className="text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
                      (123) 456-7890
                    </span>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+1234567891"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-muted)]/30 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)] mb-1 transition-colors duration-200">
                      Phone 2
                    </h4>
                    <span className="text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200 font-medium">
                      (123) 456-7891
                    </span>
                  </div>
                </a>

                {/* Location */}
                <a
                  href="https://maps.google.com/?q=123+Healthy+Street+Montreal+QC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[var(--color-muted)]/30 transition-colors duration-200 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-secondary)] mb-2 transition-colors duration-200">
                      Location
                    </h4>
                    <div className="text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200">
                      <p>
                        123 Healthy Street, Fresh Food District, Montreal, QC
                        H1A 2B3
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <h4 className="font-semibold text-[var(--color-secondary)] mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[var(--color-muted)] hover:bg-[var(--color-accent)] rounded-xl flex items-center justify-center transition-colors duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-muted-foreground)] group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[var(--color-muted)] hover:bg-[var(--color-accent)] rounded-xl flex items-center justify-center transition-colors duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-muted-foreground)] group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-[var(--color-muted)] hover:bg-[var(--color-accent)] rounded-xl flex items-center justify-center transition-colors duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 text-[var(--color-muted-foreground)] group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="mt-8 p-4 bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 rounded-xl border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0"
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
                  <div>
                    <h5 className="font-semibold text-[var(--color-secondary)] mb-1">
                      Quick Response Promise
                    </h5>
                    <p className="text-sm text-[var(--color-foreground)]">
                      We typically respond to all inquiries within 2-4 hours
                      during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion - Right Side */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-[var(--color-secondary)] mb-4">
                Frequently Asked Questions
              </h3>
              <div className="w-16 h-1 bg-[var(--color-accent)] mb-6"></div>
              <p className="text-[var(--color-foreground)] text-lg leading-relaxed">
                Find answers to common questions about ordering, delivery, and
                our services.
              </p>
            </div>

            <FAQAccordion />
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-2xl p-8 border border-[var(--color-muted)]">
            <h4 className="text-2xl font-bold text-[var(--color-secondary)] mb-4">
              Still have questions?
            </h4>
            <p className="text-[var(--color-foreground)] mb-6 max-w-2xl mx-auto">
              Our friendly team is here to help! Don&apos;t hesitate to reach
              out if you need any additional information or have specific
              dietary requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@blessfourchette.com"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send us an Email
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[var(--color-muted)] text-[var(--color-secondary)] px-6 py-3 rounded-xl font-semibold border border-[var(--color-border)] transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Give us a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
