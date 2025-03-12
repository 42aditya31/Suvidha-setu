"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "https://labour.gujarat.gov.in/Images/labournebnr.png",
  "https://labour.gujarat.gov.in/images/ledmain/minimum-wages-act-banner.jpg",
  "https://labour.gujarat.gov.in/images/ledmain/ind-safty.png",
  "https://labour.gujarat.gov.in/Images/tollfree.png",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-xl shadow-lg bg-white">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src) => (
          <div key={src} className="w-full flex-shrink-0">
            <Image
              src={src}
              alt="Slide"
              width={400}
              height={200}
              className="w-full h-48 object-contain rounded-xl"
              priority
            />
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md">⬅</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md">➡</button>
    </div>
  );
}
