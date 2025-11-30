import { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import img_1 from "../assets/1.jpg";
import img_2 from "../assets/2.jpg";
import img_3 from "../assets/3.jpg";
import img_4 from "../assets/4.jpg";
import img_5 from "../assets/5.jpg";
import img_6 from "../assets/6.jpg";
import img_car from "../assets/car.jpeg";

export default function Gallery() {
  const images = [img_1, img_2, img_3, img_4, img_5, img_6, img_car];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, images.length]);

  return (
    <section id="gallery" className="relative w-full h-[60vh] sm:h-screen bg-emerald-100 z-10">

      {/* Fullscreen overlay – pointer-events disabled */}
      <div
        className="absolute inset-0 pointer-events-none"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <Motion.img
            key={index}
            src={images[index]}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
      </div>

      {/* Buttons must re-enable pointer events */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded pointer-events-auto"
        onClick={prev}
      >
        ‹
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded pointer-events-auto"
        onClick={next}
      >
        ›
      </button>
    </section>
  );
}
