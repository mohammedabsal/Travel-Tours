import { motion as Motion } from "framer-motion";
import { FaWhatsapp, FaMobileAlt } from "react-icons/fa";
import profile from "../assets/car.jpeg";
export default function OwnerProfile() {
  return (
    <section id="owner" className="py-20 bg-gradient-to-r from-emerald-50 to-white relative z-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <Motion.img
          src={profile}
          alt="Owner profile"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-emerald-100"
        />

        <div>
          <h3 className="text-2xl font-bold text-emerald-900">Aslam — Founder & Owner</h3>
          <p className="mt-3 text-gray-700 max-w-xl">
            With <strong>4.15 years</strong> of hands-on experience in the travel and hospitality
            industry, Aslam leads our team with a passion for creating memorable, hassle-free trips.
            He specialises in curated Kodaikanal experiences, trusted vendor relationships, and
            personalised customer service that turns first-time visitors into lifelong travellers.
          </p>

          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://wa.me/919080806831"
              aria-label="WhatsApp"
              title="WhatsApp — +91 90808 06831"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="sr-only">WhatsApp +91 90808 06831</span>
            </a>

            {/* Email contact removed — use WhatsApp or phone */}

            <a
              href="tel:+919944881312"
              aria-label="Phone"
              title="Call — +91 99448 81312"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white text-emerald-600 border border-emerald-300 hover:bg-emerald-50"
            >
              <FaMobileAlt className="w-5 h-5" />
              <span className="sr-only">Call +91 99448 81312</span>
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p><strong>Address:</strong> Annasalai, Kodaikanal - 1</p>
            <p className="mt-2"><strong>Alternate Contacts:</strong> +91 98423 06461</p>
          </div>

          {/* Services are displayed in the main Services section */}
        </div>
      </div>
    </section>
  );
}
