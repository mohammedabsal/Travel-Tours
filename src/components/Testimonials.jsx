import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const reviews = [
    { name: "Suresh", text: "Amazing trip! Great service and smooth ride.", rating: 5 },
    { name: "Kesavan", text: "Loved the stay, the cottage was beautiful.", rating: 5 },
    { name: "Hari", text: "Professional driver & well planned sightseeing.", rating: 4 },
    { name: "Ishaan", text: "Best travel experience ever!", rating: 5 },
    { name: "Ram", text: "Highly recommend Aslam Holidays for Kodaikanal trips.", rating: 5 },
    { name: "Haroon", text: "Comfortable vehicles and friendly staff.", rating: 4 },
    { name: "Puvi", text: "Memorable experience, will book again!", rating: 5 },
    { name: "Paul", text: "Great value for money and excellent service.", rating: 5 },
    { name: "Saravanan", text: "The itinerary was perfect for our family.", rating: 4 },
    { name: "Dravid", text: "Exceptional experience from start to finish.", rating: 5 },
    { name: "Sriram", text: "Truly a hassle-free and enjoyable trip.", rating: 5 },
    { name: "Harshan", text: "The best way to explore Kodaikanal!", rating: 5 },
    { name: "Girish", text: "Amazing trip! Great service and smooth ride.", rating: 5 },
    { name: "Dhuvarakesh", text: "Exceptional experience from start to finish.", rating: 5 }
  ];

  const renderStars = (rating = 5) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const filled = i < rating;
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={filled ? "#f59e0b" : "none"}
          stroke={filled ? "#f59e0b" : "#fbbf24"}
          className="w-4 h-4">
          <path strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.174L12 18.897 4.664 23.171l1.402-8.174L.132 9.21l8.2-1.192z" />
        </svg>
      );
    }
    return <div className="flex items-center gap-1">{stars}</div>;
  };

  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  // duration: scale with number of reviews for a comfortable read speed
  const duration = Math.max(16, reviews.length * 3); // seconds

  useEffect(() => {
    // ensure animation restarts if paused toggles
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = paused ? 'paused' : 'running';
    }
  }, [paused]);

  // duplicated list for seamless looping
  const loop = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-r from-emerald-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-900">What Customers Say</h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <style>{`
            .marquee-wrap{ --gap: 1rem; }
            .marquee-track{ display:flex; gap:var(--gap); align-items:stretch; width:max-content; }
            .marquee-item{ min-width:320px; max-width:520px; flex:0 0 auto; }
            .marquee-card{ background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(236,253,245,0.6)); padding:1.25rem; border-radius:12px; box-shadow:0 12px 30px rgba(16,185,129,0.06); }
            @keyframes marqueeAnim{ from{ transform:translateX(0);} to{ transform:translateX(-50%);} }
            .marquee-track{ animation: marqueeAnim ${duration}s linear infinite; }
          `}</style>

          <div className="marquee-wrap">
            <div
              ref={trackRef}
              className="marquee-track"
              style={{ animationPlayState: paused ? 'paused' : 'running' }}
            >
              {loop.map((r, i) => (
                <div key={i} className="marquee-item">
                  <div className="marquee-card">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-left">
                        <p className="text-gray-700">“{r.text}”</p>
                        <div className="mt-3">{renderStars(r.rating)}</div>
                      </div>

                      <div className="text-right ml-4">
                        <h3 className="font-bold text-emerald-600">{r.name}</h3>
                        <div className="text-sm text-gray-500">Verified Traveler</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
