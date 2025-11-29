import { motion as Motion } from "framer-motion";
import videoSrc from "../assets/video.mp4";
import { useEffect, useRef, useState, useMemo } from 'react';
export default function Hero() {
  const msg = encodeURIComponent("Hi, I’d like to book a trip!");
  const handleSubtitleComplete = () => {
    console.log('Subtitle animation complete');
  };

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
      { threshold: 0.1, rootMargin: '0px' }
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
  const stepDuration = 0.35; // seconds per step segment
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <section className="relative w-full h-screen" id="home">
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay: nature-inspired gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 via-transparent to-black/30" />

      {/* Parallax atmosphere */}
      <div className="hero-parallax">
        <div className="layer layer--mist" aria-hidden="true"></div>
        <div className="layer layer--light" aria-hidden="true"></div>
        <div className="birds" aria-hidden="true">
          <div className="bird-wrap">
            <div className="bird bird-fly">
              <svg viewBox="0 0 24 12" width="24" height="12">
                <path d="M1 8 Q 6 1 12 6 Q 18 1 23 8" />
              </svg>
            </div>
          </div>
          <div className="bird-wrap bird-wrap--2">
            <div className="bird bird-fly">
              <svg viewBox="0 0 24 12" width="24" height="12">
                <path d="M1 7 Q 6 2 12 6 Q 18 2 23 7" />
              </svg>
            </div>
          </div>
        </div>
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
          {(() => {
            const animateKeyframes = {
              filter: [defaultFrom.filter, ...defaultTo.map((s) => s.filter)],
              opacity: [defaultFrom.opacity, ...defaultTo.map((s) => s.opacity)],
              y: [defaultFrom.y, ...defaultTo.map((s) => s.y)]
            };

            return elements.map((word, index) => {
              const spanTransition = {
                duration: totalDuration,
                times,
                delay: (index * 150) / 1000
              };

              return (
                <Motion.span
                  key={index}
                  className="inline-block will-change-[transform,filter,opacity]"
                  initial={defaultFrom}
                  animate={inView ? animateKeyframes : defaultFrom}
                  transition={spanTransition}
                  onAnimationComplete={index === elements.length - 1 ? handleSubtitleComplete : undefined}
                >
                  {word}{index < elements.length - 1 ? '\u00A0' : ''}
                </Motion.span>
              );
            });
          })()}
        </div>

        <Motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <a
            href={`https://wa.me/919080806831?text=${msg}`}
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-600"
          >
            WhatsApp Booking
          </a>

        </Motion.div>
      </div>
    </section>
  );
}
