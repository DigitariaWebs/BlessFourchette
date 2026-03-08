"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, Users, FileText, Mail, Phone, Check } from "lucide-react";

// Available time slots: Monday and Thursday 6PM-9PM (45-minute slots)
const TIME_SLOTS = [
  { id: "mon-6:00", day: "Monday", time: "6:00 PM", available: true },
  { id: "mon-6:45", day: "Monday", time: "6:45 PM", available: true },
  { id: "mon-7:30", day: "Monday", time: "7:30 PM", available: true },
  { id: "mon-8:15", day: "Monday", time: "8:15 PM", available: true },
  { id: "thu-6:00", day: "Thursday", time: "6:00 PM", available: true },
  { id: "thu-6:45", day: "Thursday", time: "6:45 PM", available: true },
  { id: "thu-7:30", day: "Thursday", time: "7:30 PM", available: true },
  { id: "thu-8:15", day: "Thursday", time: "8:15 PM", available: true },
];

const EVENT_TYPES = [
  { id: "birthday", label: "Birthday Party" },
  { id: "corporate", label: "Corporate Event" },
  { id: "family", label: "Family Gathering" },
  { id: "wedding", label: "Wedding/Engagement" },
  { id: "other", label: "Other Event" },
];

interface BookingFormData {
  eventType: string;
  selectedDate: string;
  selectedTime: string;
  numberOfPeople: string;
  theme: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

export default function ConsultationPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    eventType: "",
    selectedDate: "",
    selectedTime: "",
    numberOfPeople: "",
    theme: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.selectedDate) newErrors.selectedDate = "Please select a date";
    if (!formData.selectedTime) newErrors.selectedTime = "Please select a time slot";
    if (!formData.numberOfPeople) newErrors.numberOfPeople = "Please enter expected number of guests";
    if (!formData.theme) newErrors.theme = "Please describe your event theme";
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone) newErrors.phone = "Please enter your phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/consultation-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      setSubmitStatus("success");
      setFormData({
        eventType: "",
        selectedDate: "",
        selectedTime: "",
        numberOfPeople: "",
        theme: "",
        name: "",
        email: "",
        phone: "",
        notes: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get available days (Mondays and Thursdays)
  const getAvailableDays = () => {
    const days: Date[] = [];
    const today = new Date();
    const currentDay = today.getDay();
    
    // Find next Monday (1) and Thursday (4)
    let daysUntilMonday = (1 - currentDay + 7) % 7;
    if (daysUntilMonday === 0) daysUntilMonday = 7;
    
    let daysUntilThursday = (4 - currentDay + 7) % 7;
    if (daysUntilThursday === 0) daysUntilThursday = 7;

    // Add dates for the next 4 weeks
    for (let week = 0; week < 4; week++) {
      const monday = new Date(today);
      monday.setDate(today.getDate() + daysUntilMonday + week * 7);
      if (monday >= today) days.push(monday);

      const thursday = new Date(today);
      thursday.setDate(today.getDate() + daysUntilThursday + week * 7);
      if (thursday >= today) days.push(thursday);
    }

    return days;
  };

  const availableDays = getAvailableDays();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateForInput = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1a4d3a] tracking-wider uppercase mb-4">
              Book a Consultation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a 45-minute Zoom consultation to discuss your upcoming event. 
              We are available every Monday and Thursday from 6:00 PM to 9:00 PM.
            </p>
          </div>

          {/* Availability Info */}
          <div className="bg-amber-100 border-l-4 border-amber-500 p-6 mb-10 rounded-r-lg">
            <h3 className="font-semibold text-amber-800 flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              Consultation Availability
            </h3>
            <ul className="text-amber-700 space-y-1">
              <li>• Every Monday & Thursday</li>
              <li>• 6:00 PM - 9:00 PM</li>
              <li>• 45-minute sessions via Zoom</li>
            </ul>
          </div>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="bg-green-100 border-l-4 border-green-500 p-6 mb-10 rounded-r-lg">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Booking Confirmed!</h3>
                  <p className="text-green-700">
                    Thank you for your booking request. We will contact you shortly to confirm your consultation slot.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="bg-red-100 border-l-4 border-red-500 p-6 mb-10 rounded-r-lg">
              <p className="text-red-700">
                Something went wrong. Please try again or contact us directly.
              </p>
            </div>
          )}

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.eventType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select event type</option>
                  {EVENT_TYPES.map((type) => (
                    <option key={type.id} value={type.label}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Preferred Date *
                </label>
                <select
                  name="selectedDate"
                  value={formData.selectedDate}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.selectedDate ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a date</option>
                  {availableDays.map((date) => (
                    <option key={formatDateForInput(date)} value={formatDateForInput(date)}>
                      {formatDate(date)}
                    </option>
                  ))}
                </select>
                {errors.selectedDate && <p className="text-red-500 text-sm mt-1">{errors.selectedDate}</p>}
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Preferred Time *
                </label>
                <select
                  name="selectedTime"
                  value={formData.selectedTime}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.selectedTime ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a time slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot.id} value={`${slot.day} ${slot.time}`}>
                      {slot.day} - {slot.time}
                    </option>
                  ))}
                </select>
                {errors.selectedTime && <p className="text-red-500 text-sm mt-1">{errors.selectedTime}</p>}
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  Expected Number of Guests *
                </label>
                <input
                  type="text"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  placeholder="e.g., 20-30 guests"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.numberOfPeople ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.numberOfPeople && <p className="text-red-500 text-sm mt-1">{errors.numberOfPeople}</p>}
              </div>

              {/* Theme */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Event Theme / Description *
                </label>
                <input
                  type="text"
                  name="theme"
                  value={formData.theme}
                  onChange={handleInputChange}
                  placeholder="Describe your event theme or vision"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.theme ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.theme && <p className="text-red-500 text-sm mt-1">{errors.theme}</p>}
              </div>

              {/* Contact Info Section */}
              <div className="md:col-span-2 pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-[#1a4d3a] mb-4">Contact Information</h3>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Additional Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any additional information about your event..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7cb342] text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-[#689f38] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Book Consultation"}
                </button>
              </div>
            </div>
          </form>

          {/* Contact Direct Message */}
          <div className="text-center mt-8 text-gray-600">
            <p>
              For urgent inquiries, please contact us directly at{" "}
              <a href="tel:+1234567890" className="text-[#7cb342] hover:underline">
                +1 (234) 567-890
              </a>{" "}
              or{" "}
              <a href="mailto:info@blessfourchette.com" className="text-[#7cb342] hover:underline">
                info@blessfourchette.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
