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
        "Palani View",
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
        "Devil's Kitchen",
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
  };

  return (
    <section id="packages" className="py-20 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800">
          Tour Packages
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Simple, clean, comfortable packages for an easy and memorable trip.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((t, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              {/* Image */}
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-52 object-cover"
                loading="lazy"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-emerald-700">
                  {t.name}
                </h3>

                <ul className="mt-3 text-gray-700 text-sm space-y-1">
                  {t.stops.map((s, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-emerald-500">•</span>
                      {s}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919080806831?text=${encodeURIComponent(
                      "I'm interested in " + t.name
                    )}`}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-center hover:bg-emerald-700 transition"
                  >
                    Book Now
                  </a>

                  <a
                    href="#owner"
                    onClick={(e) => smoothScroll(e, "owner")}
                    className="border border-emerald-600 text-emerald-700 px-4 py-2 rounded-lg text-center hover:bg-emerald-50 transition"
                  >
                    Enquire
                  </a>
                </div>
              </div>

            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
