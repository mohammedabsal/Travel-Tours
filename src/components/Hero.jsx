import { motion as Motion } from "framer-motion";
import videoSrc from "../assets/video.mp4";
import { useEffect, useRef, useState, useMemo } from 'react';

export default function Hero() {
  const msg = encodeURIComponent("Hi, I’d like to book a trip!");
  const subtitle = "Premium trips • Cozy stays • Hassle-free experience";
  const elements = subtitle.split(' ');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const defaultFrom = useMemo(() => ({ filter: 'blur(10px)', opacity: 0, y: -50 }), []);
  const defaultTo = useMemo(() => [
    { filter: 'blur(5px)', opacity: 0.5, y: 5 },
    { filter: 'blur(0px)', opacity: 1, y: 0 }
  ], []);

  const stepCount = defaultTo.length + 1;
  const times = Array.from({ length: stepCount }, (_, i) => i / (stepCount - 1));

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden z-10">
      
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-transparent to-black/30 pointer-events-none"></div>

      {/* Parallax Atmosphere */}
      <div className="hero-parallax pointer-events-none">
        <div className="layer layer--mist"></div>
        <div className="layer layer--light"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-6 text-white">
        <Motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Explore Kodaikanal With Us
        </Motion.h1>

        <div className="mt-4 text-lg md:text-2xl max-w-xl" ref={ref}>
          {elements.map((word, index) => (
            <Motion.span
              key={index}
              className="inline-block"
              initial={defaultFrom}
              animate={inView ? {
                filter: [defaultFrom.filter, ...defaultTo.map((s) => s.filter)],
                opacity: [defaultFrom.opacity, ...defaultTo.map((s) => s.opacity)],
                y: [defaultFrom.y, ...defaultTo.map((s) => s.y)]
              } : defaultFrom}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {word}{index < elements.length - 1 ? ' ' : ''}
            </Motion.span>
          ))}
        </div>

        <div className="mt-6">
          <a
            href={`https://wa.me/919080806831?text=${msg}`}
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
          >
            WhatsApp Booking
          </a>
        </div>
      </div>
    </section>
  );
}
