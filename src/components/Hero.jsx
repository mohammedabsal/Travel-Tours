import { motion as Motion } from "framer-motion";
import videoSrc from "../assets/video.mp4";
export default function Hero() {
  const msg = encodeURIComponent("Hi, I’d like to book a trip!");

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

        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl max-w-xl"
        >
          Premium trips • Cozy stays • Hassle-free experience
        </Motion.p>

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
