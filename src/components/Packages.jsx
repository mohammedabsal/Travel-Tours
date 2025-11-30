import { useEffect } from "react";
import { motion as Motion } from "framer-motion";

import poompariImg from "../assets/poompari.png";
import pambarImg from "../assets/pambarfalls.jpg";
import pineforestImg from "../assets/pine-forest.jpg";
import mforest from "../assets/mforest.jpg";
import oldtreeImg from "../assets/oldtree.jpg";

export default function Packages() {

  const tours = [
    {
      id: 1,
      name: "Village Tour (Tour No.1)",
      img: poompariImg,
      stops: [
        "Mahalakshmi Temple",
        "Palani View (on the Way)",
        "Poombari Village",
        "Garlic Farm",
        "Kulanthai Vellappar Temple",
        "Mannanavur Lake View",
        "Sheep & Rabbit Farm",
        "Mannanavur Lake Boating",
      ],
    },
    {
      id: 2,
      name: "Park Tour (Tour No.2)",
      img: pambarImg,
      stops: [
        "Coaker's Walk",
        "500 Years Old Tree",
        "La Saleth Church",
        "Pambar Falls",
        "Shopping Centre",
        "Bryant Park",
        "Kodai Lake Drop",
      ],
    },
    {
      id: 3,
      name: "Forest / Park Tour (Tour No.3)",
      img: pineforestImg,
      stops: [
        "Moir Point",
        "Upper Lake View",
        "Green Valley View",
        "Golf Course",
        "Pillar Rocks",
        "Devil's Kitchen (Guna Cave)",
        "Pine Forest",
        "Kodai Lake",
      ],
    },
    {
      id: 4,
      name: "Forest Tour (Wild Way’s Tour) (Tour No.4)",
      img: mforest,
      stops: [
        "Silent Valley View",
        "Fire Watching Tower",
        "Berijam Lake View",
        "Cap's Fly Valley",
        "Mathikettan Forest View",
        "Berijam Lake",
        "Bryant Park",
        "Kodai Lake",
      ],
    },
    {
      id: 5,
      name: "Film Chakker Tour (Tour No.5)",
      img: oldtreeImg,
      stops: [
        "Vattakanal Falls",
        "500 Years Old Tree",
        "Echo Rock",
        "Dolphin Nose",
        "Mountain Beauty",
        "Tower View",
        "Kodai Lake",
        "Bryant Park",
      ],
    },
  ];

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.hash = id;
  };

  /* Parallax Handler */
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll("[data-scroll]").forEach((card) => {
        card.style.setProperty("--scroll", scrollY);
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section id="packages" className="py-20 relative z-10">
      {/* ======== STYLES ======== */}
      <style>{`
        .pkg-bg {
          position: relative;
          padding: 3rem 0;
          border-radius: 1.5rem;
          background: linear-gradient(
            120deg,
            rgba(232, 255, 243, 0.65),
            rgba(219, 255, 237, 0.6),
            rgba(255,255,255,0.5)
          );
          overflow: hidden;
        }

        .pkg-bg::before {
          content: "";
          position: absolute;
          inset: -30% -20%;
          background: linear-gradient(
            60deg,
            rgba(16,185,129,0.18),
            rgba(52,211,153,0.10),
            rgba(16,185,129,0.12)
          );
          filter: blur(45px);
          animation: bgMove 18s linear infinite;
        }

        @keyframes bgMove {
          0% { transform: translateX(0); }
          50% { transform: translateX(12%); }
          100% { transform: translateX(0); }
        }

        /* Ambient Glow */
        .ambient-glow {
          position: absolute;
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(16,185,129,0.45), transparent 60%);
          filter: blur(150px);
          left: 50%;
          bottom: -180px;
          transform: translateX(-50%);
          z-index: 0;
          opacity: 0.55;
        }

        /* Fade edges */
        .fade-top, .fade-bottom {
          position: absolute;
          left: 0;
          right: 0;
          height: 90px;
          pointer-events: none;
          z-index: 3;
        }
        .fade-top {
          top: 0;
          background: linear-gradient(to bottom, rgba(255,255,255,0.8), transparent);
        }
        .fade-bottom {
          bottom: 0;
          background: linear-gradient(to top, rgba(255,255,255,0.8), transparent);
        }

        /* Birds */
        .bird {
          position: absolute;
          width: 22px;
          height: 14px;
          background: rgba(16,185,129,0.9);
          clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
          opacity: 0.35;
          animation: birdFly 12s infinite linear;
        }
        @keyframes birdFly {
          0% { transform: translateX(-12vw) translateY(0); }
          50% { transform: translateX(55vw) translateY(-10px); }
          100% { transform: translateX(110vw) translateY(0); }
        }

        /* Glass layers */
        .glass-layer {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          z-index: -1;
        }

        /* Cards */
        .pkg-card {
          background: rgba(255,255,255,0.45);
          border: 1px solid rgba(16,185,129,0.25);
          backdrop-filter: blur(15px);
          border-radius: 1.25rem;
          box-shadow: 0 8px 22px rgba(16,185,129,0.14);
          position: relative;
        }
        .pkg-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            145deg,
            rgba(255,255,255,0.35),
            rgba(255,255,255,0)
          );
          pointer-events: none;
        }

        /* Parallax */
        .parallax-card {
          transform-style: preserve-3d;
        }
        .parallax-card[data-scroll] {
          transform: translateY(calc(var(--scroll) * -0.06));
        }

        /* Timeline (Mobile) */
        @media (max-width: 768px) {
          .timeline {
            border-left: 3px solid rgba(16,185,129,0.35);
            padding-left: 1.2rem;
          }
          .timeline-dot {
            width: 14px;
            height: 14px;
            background: #10b981;
            border-radius: 50%;
            position: absolute;
            left: -8px;
            top: 6px;
            box-shadow: 0 0 12px rgba(16,185,129,0.5);
          }
        }
      `}</style>

      {/* Floating Elements */}
      <div className="fade-top"></div>
      <div className="fade-bottom"></div>
      <div className="ambient-glow"></div>
      <div className="glass-layer"></div>

      <div className="bird" style={{ top: "14%", animationDelay: "0s" }}></div>
      <div className="bird" style={{ top: "30%", animationDelay: "3s" }}></div>
      <div className="bird" style={{ top: "60%", animationDelay: "6s" }}></div>

      {/* CONTENT */}
      <div className="pkg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-900 mb-12">
            Tour Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
            {tours.map((t, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="pkg-card parallax-card overflow-hidden p-0"
                data-scroll
              >
                <img src={t.img} className="w-full h-56 object-cover" />

                <div className="p-6 relative">
                  <div className="timeline-dot md:hidden"></div>

                  <h3 className="text-xl font-bold text-emerald-900 mb-3">
                    {t.name}
                  </h3>

                  <ul className="text-gray-800 space-y-1 md:list-disc md:list-inside timeline md:pl-0 pl-4">
                    {t.stops.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/919080806831?text=${encodeURIComponent(
                        "I'm interested in " + t.name
                      )}`}
                      className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:brightness-110 transition w-full sm:w-auto text-center"
                    >
                      Book Now
                    </a>

                    <a
                      href="#owner"
                      onClick={(e) => smoothScroll(e, "owner")}
                      className="border border-emerald-600 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-50 transition w-full sm:w-auto text-center"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
