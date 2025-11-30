import { motion as Motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <Motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-emerald-900 to-teal-800 text-emerald-50 py-6 text-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
          <p>© {new Date().getFullYear()} Aslam Holidays — All Rights Reserved.</p>

          <div className="text-sm">
            <div>WhatsApp: <a className="underline" href="https://wa.me/919080806831">90808 06831</a></div>
            <div>Email: <a className="underline" href="mailto:rajartr22@gmail.com">rajartr22@gmail.com</a></div>
            <div>Address: Annasalai, Kodaikanal - 1</div>
          </div>
        </div>
      </div>
      </Motion.footer>
    </footer>
  );
}
