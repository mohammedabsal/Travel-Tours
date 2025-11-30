import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  function navigateToHash(e, id) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();

  setOpen(false);

  setTimeout(() => {
    const el = document.getElementById(id);
    const navEl = document.querySelector("nav");
    
    const header = navEl?.querySelector(".header-bar");
    const navHeight = header ? header.offsetHeight : 70;

    if (!el) return;
    
    // TEMPORARY jump to correct offset without animation
    window.scrollTo({ top: window.scrollY - 1 });

    // SMOOTHEST MOBILE ANIMATION
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // FIX: ensure correct offset after smooth scroll
    setTimeout(() => {
      const finalTop = el.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top: finalTop, behavior: "smooth" });
    }, 350);

    history.replaceState(null, "", "#" + id);
  }, 300);
}


  useEffect(() => {
    const handler = () => setScroll(window.scrollY > 5);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* NAVBAR HEADER */}
      <Motion.nav
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed left-0 right-0 top-0 z-[60] w-full px-3 sm:px-6 transition-all backdrop-blur-md 
        ${scroll ? "bg-white/10 shadow-lg" : "bg-white/5"} border-b border-white/10`}
      >
        <style>{`
          .nav-link {
            position: relative;
            padding: 0.4rem 0.5rem;
            font-weight: 600;
            color: #35f4af;
          }
          .nav-link span { position: relative; z-index: 10; }
          .nav-link::after {
            content: '';
            position: absolute;
            left: 10%;
            right: 10%;
            bottom: -6px;
            height: 3px;
            background: linear-gradient(90deg, #34f8bc, #0ea873);
            transform: scaleX(0);
            transform-origin: center;
            border-radius: 4px;
            transition: transform .25s ease;
          }
          .nav-link:hover::after,
          .nav-link:focus::after {
            transform: scaleX(1);
          }
        `}</style>

        {/* HEADER BAR */}
        <div className="header-bar flex items-center justify-between w-full py-3 text-emerald-50">
          <h1 className="text-lg font-bold tracking-tight bg-clip-text text-transparent 
            bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-200">
            Aslam Holidays
          </h1>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 items-center">
            <a onClick={(e) => navigateToHash(e, "services")} className="nav-link"><span>Services</span></a>
            <a onClick={(e) => navigateToHash(e, "packages")} className="nav-link"><span>Packages</span></a>
            <a onClick={(e) => navigateToHash(e, "gallery")} className="nav-link"><span>Gallery</span></a>
            <a onClick={(e) => navigateToHash(e, "contact")} className="nav-link"><span>Contact</span></a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md bg-white/10 text-white hover:bg-white/20
              focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Motion.nav>

      {/* MOBILE MENU (SEPARATE FROM NAV!!) */}
      <Motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="md:hidden fixed top-[65px] left-0 right-0 z-[50] px-3 sm:px-6 overflow-hidden"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 space-y-3">
          <button className="nav-link block text-lg" onClick={(e) => navigateToHash(e, "services")}>Services</button>
          <button className="nav-link block text-lg" onClick={(e) => navigateToHash(e, "packages")}>Packages</button>
          <button className="nav-link block text-lg" onClick={(e) => navigateToHash(e, "gallery")}>Gallery</button>
          <button className="nav-link block text-lg" onClick={(e) => navigateToHash(e, "contact")}>Contact</button>
        </div>
      </Motion.div>
    </>
  );
}
