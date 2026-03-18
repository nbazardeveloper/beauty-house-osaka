"use client";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <section id="location" className="bg-white py-16 md:py-24 border-t border-[#0E1627]/8">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-4">

        {/* ── ШАПКА ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-20 border-b border-[#0E1627]/8 pb-10"
        >
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Find Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
            Visit Our Sanctuary
          </h2>
          <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 border border-[#0E1627]/8">

          {/* ── ЛЕВАЯ ДЕКОРАТИВНАЯ ПАНЕЛЬ ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[520px] relative bg-[#F4E1E0] flex items-center justify-center overflow-hidden"
          >
            <div className="absolute w-[420px] h-[420px] rounded-full border border-[#BD8E89]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-[#BD8E89]/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-[180px] h-[180px] rounded-full border border-[#BD8E89]/25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#7F6269]/50 mb-5">River North</p>
              <p className="text-5xl md:text-7xl font-black uppercase tracking-[0.08em] text-[#BD8E89]/20 leading-none select-none">
                Osaka
              </p>
              <div className="mt-5 mx-auto h-[1px] w-10 bg-[#BD8E89]/40" />
              <div className="mt-6 w-10 h-10 border border-[#BD8E89]/40 flex items-center justify-center">
                <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#7F6269" strokeWidth="1.2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <p className="mt-5 text-[9px] uppercase tracking-[0.5em] text-[#7F6269]/50">Chicago · IL</p>
            </div>
          </motion.div>

          {/* ── ПРАВАЯ ЧАСТЬ ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 md:p-12 lg:p-16"
          >

            {/* Адрес */}
            <div className="w-full mb-8 pb-8 border-b border-[#0E1627]/8">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#BD8E89] mb-4">
                Location
              </h4>
              <p className="text-base md:text-lg text-[#0E1627] font-light tracking-wide leading-relaxed">
                24 West Erie,<br />
                Chicago, IL 60654
              </p>
            </div>

            {/* Часы */}
            <div className="w-full mb-8 pb-8 border-b border-[#0E1627]/8">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#BD8E89] mb-4">
                Hours
              </h4>
              <div className="space-y-3 inline-block text-left">
                <div className="flex items-center gap-8">
                  <span className="text-sm text-[#7F6269]/50 w-24">Mon — Fri</span>
                  <span className="text-sm text-[#0E1627]">9:00 — 21:00</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-sm text-[#7F6269]/50 w-24">Sat — Sun</span>
                  <span className="text-sm text-[#0E1627]">9:00 — 19:00</span>
                </div>
              </div>
            </div>

            {/* Контакты */}
            <div className="w-full mb-10 pb-8 border-b border-[#0E1627]/8">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#BD8E89] mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:6282029554"
                  className="block text-sm text-[#0E1627] hover:text-[#BD8E89] transition-colors"
                >
                  628-202-9554
                </a>
                <a
                  href="mailto:osakabeautyusa@gmail.com"
                  className="block text-sm text-[#0E1627] hover:text-[#BD8E89] transition-colors"
                >
                  osakabeautyusa@gmail.com
                </a>
                <a
                  href="https://www.beautyhouseosaka.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#0E1627] hover:text-[#BD8E89] transition-colors"
                >
                  www.beautyhouseosaka.com
                </a>
              </div>
            </div>

            {/* Get Directions */}
            <a
              href="https://maps.google.com/?q=24+West+Erie+Chicago+IL+60654"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4"
            >
              <div className="w-11 h-11 border border-[#0E1627]/15 flex items-center justify-center group-hover:bg-[#BD8E89] group-hover:border-[#BD8E89] transition-all duration-300">
                <svg width="14" height="10" viewBox="0 0 20 12" fill="none">
                  <path
                    d="M0 6H19M19 6L14 1M19 6L14 11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#7F6269] group-hover:text-white transition-colors"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0E1627] group-hover:text-[#BD8E89] transition-colors">
                Get Directions
              </span>
            </a>

          </motion.div>
        </div>

        {/* Подпись снизу */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-center text-[9px] uppercase tracking-[0.4em] text-[#7F6269]/35"
        >
          River North · Chicago · Illinois
        </motion.p>

      </div>
    </section>
  );
};

export default Location;