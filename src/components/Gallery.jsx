import { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  // Use Vite's base URL so paths work correctly when hosted under a subpath
  const base = import.meta.env.BASE_URL || "/";
  const images = [
    "gallery/1.jpg",
    "gallery/2.jpg",
    "gallery/3.jpg",
    "gallery/4.jpg",
    "gallery/5.jpg",
    "gallery/6.jpg",
    "gallery/car.jpeg"
  ].map((p) => (p.startsWith("/") ? base + p.slice(1) : base + p));
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // navigation helpers (declared before keyboard handler to avoid use-before-define)
  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  useEffect(() => {
    const keyHandler = (e) => {
      if (e.key === "ArrowRight" || e.code === "ArrowRight") next();
      if (e.key === "ArrowLeft" || e.code === "ArrowLeft") prev();
      if (e.code === "Space" || e.key === " ") setPaused((p) => !p);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // autoplay effect: start/stop interval based on `paused`
  useEffect(() => {
    // clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

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
    <section id="gallery" className="relative w-full h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <div
        className="absolute inset-0 flex items-center justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <Motion.img
            key={index}
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9 }}
            draggable={false}
          />
        </AnimatePresence>

        {/* Left / Right Controls */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous"
          className="absolute left-6 z-20 rounded-full bg-black/40 text-white p-3 hover:bg-black/60"
        >
          ‹
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next"
          className="absolute right-6 z-20 rounded-full bg-black/40 text-white p-3 hover:bg-black/60"
        >
          ›
        </button>

        {/* Bottom dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); }}
              className={`h-3 w-8 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Header overlay with title */}
      <div className="absolute top-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-50 drop-shadow-lg">Gallery</h2>
        </div>
      </div>
    </section>
  );
}
