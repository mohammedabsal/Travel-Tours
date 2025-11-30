import { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build WhatsApp prefilled message and open it for the user
    const phone = '919080806831';
    const text = `Name: ${form.name}\nMessage: ${form.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    // Open in a new tab (mobile will open WhatsApp app)
    window.open(url, '_blank');
    // Reset form
    setForm({ name: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-emerald-900 to-teal-800 text-emerald-50 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-800/60 to-emerald-700/30 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-semibold">WhatsApp / Phone</p>
              <p className="mt-1">+91 90808 06831</p>
            </div>

            <div>
              <p className="font-semibold">Address</p>
              <p className="mt-1">Annasalai, Kodaikanal - 1</p>
            </div>
          </div>

          <div className="mt-6">
            <Motion.form
              className="grid gap-4"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg p-[2px] bg-gradient-to-r from-emerald-400/40 via-emerald-200/30 to-white/20">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-md bg-white text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              {/* Email removed — contact via WhatsApp or message form */}

              <div className="rounded-lg p-[2px] bg-gradient-to-r from-emerald-400/30 via-emerald-200/20 to-white/10">
                <textarea
                  placeholder="Your Message"
                  className="w-full p-4 h-28 rounded-md bg-white text-emerald-900 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-semibold text-white focus:outline-none transform transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:scale-105 hover:brightness-95 w-full sm:w-auto text-center"
                >
                  Send
                </button>

                <a
                  href="https://wa.me/919080806831?text=Hi%20I%20am%20interested%20in%20your%20tours"
                  className="inline-block px-6 py-3 rounded-lg font-semibold text-white transform transition-all duration-200 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:scale-105 w-full sm:w-auto text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </Motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
