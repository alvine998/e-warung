"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const images = [
  "https://source.unsplash.com/random/800x400?nature",
  "https://source.unsplash.com/random/800x400?water",
  "https://source.unsplash.com/random/800x400?mountain",
];

export default function SliderBanner() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Slides */}
      <div className="relative flex items-center justify-center">
        <motion.img
          key={index}
          src={images[index]}
          alt="Slide Image"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full lg:h-64 h-40 object-cover rounded-xl shadow-lg bg-gray-300 animate-pulse"
        />
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}
