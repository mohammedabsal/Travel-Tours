import { useState, useEffect } from "react";
import { FaRoute, FaSuitcaseRolling, FaCar, FaHeart, FaBed } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

// Motion variants for consistent animation behavior
const container = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

const modalBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.25 } } };
const modalPanel = { hidden: { y: 12, opacity: 0, scale: 0.98 }, visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.32 } } };

export default function Services() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openModal = (item) => {
    setSelected(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  // lock scroll while modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  const items = [
    {
      id: "local",
      icon: <FaRoute size={36} />,
      title: "Local Trip",
      tag: "Popular",
      desc: "Short, refreshing local circuits across Kodaikanal — ideal for day travellers and quick sightseeing.",
      image: "/services/local.jpg",
      itinerary: ["Coaker's Walk", "Kodai Lake", "500 Years Old Tree", "Bryant Park"],
    },
    {
      id: "package",
      icon: <FaSuitcaseRolling size={36} />,
      title: "Tour Package",
      tag: "Customisable",
      desc: "Curated multi-stop packages (village, park, forest tours) with transport and guides included.",
      image: "/services/package.jpg",
      itinerary: [
        "Village Tour: Mahalakshmi Temple, Poombari Village",
        "Park Tour: Coaker's Walk, Pambar Falls",
        "Forest Tour: Berijam Lake, Silent Valley View",
      ],
    },
    {
      id: "outstation",
      icon: <FaCar size={36} />,
      title: "Outstation Trip",
      tag: "Reliable",
      desc: "Comfortable outstation transfers and long-drive itineraries with experienced drivers.",
      image: "/services/outstation.jpg",
      itinerary: ["Full-day transfers", "Multi-day hill circuit planning", "Driver with local knowledge"],
    },
    {
      id: "honeymoon",
      icon: <FaHeart size={36} />,
      title: "Honeymoon Trip",
      tag: "Romantic",
      desc: "Private stays, scenic viewpoints and intimate experiences designed for couples.",
      itinerary: ["Sunset at Pine Forest", "Private boat ride at Kodai Lake", "Candlelight dinner and cozy cottage stay"],
    },
    {
      id: "stays",
      icon: <FaBed size={36} />,
      title: "Rooms & Cottages",
      tag: "Comfort",
      desc: "Wide selection of rooms, cottages and homestays — handpicked for comfort and ambiance.",
      image: "/services/stays.jpg",
      itinerary: ["Cottage options", "Family rooms", "Couple suites"],
    },
  ];

  return (
    <>
      <style>{`
        /* Services background: subtle light green */
        .services-bg{
          background: linear-gradient(180deg, #f0fdf4 0%, #f7fff8 60%);
        }

        /* Glass card for services */
        .svc-card{
          background: rgba(255,255,255,0.12);
          -webkit-backdrop-filter: blur(6px);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 12px 40px rgba(16,185,129,0.06), inset 0 1px 0 rgba(255,255,255,0.04);
          transition: transform .22s cubic-bezier(.2,.9,.2,1), box-shadow .22s ease, border-color .22s ease;
          position: relative;
          overflow: visible;
        }

        /* glowing outline element (darker by default) */
        .svc-card::after{
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          pointer-events: none;
          box-shadow: 0 0 0 6px rgba(16,185,129,0.06), 0 10px 30px rgba(16,185,129,0.08);
          transition: box-shadow .28s ease, opacity .28s ease, transform .28s ease;
          opacity: 1;
        }

        /* hover / focus glow (stronger) */
        .svc-card:hover, .svc-card:focus-within{
          transform: translateY(-6px) scale(1.01);
          border-color: rgba(16,185,129,0.18);
          box-shadow: 0 28px 90px rgba(16,185,129,0.22), inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .svc-card:hover::after, .svc-card:focus-within::after{
          box-shadow: 0 0 0 14px rgba(16,185,129,0.18), 0 40px 140px rgba(16,185,129,0.28);
          animation: glowFlow 1.6s linear infinite;
        }

        @keyframes glowFlow{
          0%{ box-shadow: 0 0 0 10px rgba(16,185,129,0.08), 0 24px 70px rgba(16,185,129,0.14); }
          50%{ box-shadow: 0 0 0 16px rgba(16,185,129,0.20), 0 36px 100px rgba(16,185,129,0.22); }
          100%{ box-shadow: 0 0 0 10px rgba(16,185,129,0.08), 0 24px 70px rgba(16,185,129,0.14); }
        }

        /* Make header strip slightly transparent so glass shows through */
        .svc-strip{ background: rgba(255,255,255,0.06); }

        /* Mobile performance: reduce heavy effects on small screens */
        @media (max-width: 640px) {
          .svc-card{
            background: rgba(255,255,255,0.06);
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255,255,255,0.06);
            box-shadow: none;
            transition: transform .12s ease, box-shadow .12s ease;
          }

          .svc-card::after{ display: none; }

          .svc-card:hover, .svc-card:focus-within{
            transform: none;
            border-color: rgba(255,255,255,0.06);
            box-shadow: none;
          }

          .svc-card:hover::after, .svc-card:focus-within::after{ animation: none; }
        }
      `}</style>

      <section id="services" className="py-20 services-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-emerald-900">Our Services</h2>

          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
            We offer full-service travel experiences around Kodaikanal — transport, guided tours, curated
            packages and cozy stays. Pick a service to learn more or hit the WhatsApp button to get
            personalised help.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <Motion.div
                key={item.id}
                onClick={() => openModal(item)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item); } }}
                role="button"
                tabIndex={0}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={container}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative cursor-pointer overflow-hidden rounded-2xl shadow-md svc-card flex flex-col h-full focus:outline-none"
              >
                {/* Header strip (no images) — keeps consistent height and alignment */}
                <div className="h-28 w-full svc-strip flex items-center justify-center">
                  <span className="text-emerald-800 font-semibold uppercase text-sm tracking-wide">{item.tag}</span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="-mt-10 p-3 rounded-xl bg-white text-emerald-600 shadow-sm inline-flex items-center justify-center">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-emerald-900">{item.title}</h3>
                      <div className="text-sm mt-2 text-gray-600">{item.desc}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
                    <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md">{item.tag}</span>
                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <button
                        onClick={(e) => { e.stopPropagation(); window.location.href = `https://wa.me/919080806831?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(item.title)}`; }}
                        className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 w-full sm:w-auto"
                        aria-label={`Book ${item.title}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5c-1.3-1.3-3-1.7-4.6-1.3-2.7.7-5.4 1.6-7.9 3.1-1.7 1-3.3 2.2-4.8 3.6-1.5 1.5-2.7 3-3.7 4.7-.5 1.1-.1 2.3.9 3.3l2.3 2.3c.9.9 2.1 1.2 3.3.8 1.7-.6 3.4-1.5 5-2.6 1.8-1.2 3.4-2.6 5-4.3 2.1-2.2 3.3-4.8 3.7-7.5.3-1.5 0-3.2-1.3-4.5z"/></svg>
                        Book
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); openModal(item); }}
                        className="inline-block border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 w-full sm:w-auto"
                        aria-label={`More details about ${item.title}`}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {open && selected && (
        <Motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />

          <Motion.div
            className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
            variants={modalPanel}
            initial="hidden"
            animate="visible"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-600 text-3xl">{selected.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-emerald-900">{selected.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{selected.desc}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-4 text-gray-500 hover:text-gray-700"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-800">Sample Itinerary</h4>
                  <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                    {selected.itinerary && selected.itinerary.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-emerald-800">Booking & Details</h4>
                  <p className="mt-2 text-gray-700">Price and availability depend on date and group size. Tap the button to start a WhatsApp enquiry and get a customised quote.</p>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`https://wa.me/919080806831?text=Hi%20I%20want%20details%20about%20${encodeURIComponent(selected.title)}`}
                      className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                    >
                      WhatsApp Owner
                    </a>
                    <a href="#contact" onClick={() => { closeModal(); }} className="inline-block border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50">Contact Form</a>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </>
  );
}
