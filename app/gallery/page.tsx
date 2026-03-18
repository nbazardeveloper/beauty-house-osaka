"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Manicure", "Extensions", "Pedicure", "Lashes", "SPA"];

const gallery = [
  { id: 1, src: "/images/gallery/01.jpg", category: "Manicure", title: "Russian Gel Manicure" },
  { id: 2, src: "/images/gallery/02.jpg", category: "Extensions", title: "Almond Extensions" },
  { id: 3, src: "/images/gallery/03.jpg", category: "Lashes", title: "Volume Lashes" },
  { id: 4, src: "/images/gallery/04.jpg", category: "Pedicure", title: "SPA Pedicure" },
  { id: 5, src: "/images/gallery/05.jpg", category: "Manicure", title: "Nude Gel Manicure" },
  { id: 6, src: "/images/gallery/06.jpg", category: "Extensions", title: "Stiletto Full Set" },
  { id: 7, src: "/images/gallery/07.jpg", category: "SPA", title: "Flower Ritual" },
  { id: 8, src: "/images/gallery/08.jpg", category: "Manicure", title: "French Manicure" },
  { id: 9, src: "/images/gallery/09.jpg", category: "Lashes", title: "Classic Lashes" },
  { id: 10, src: "/images/gallery/10.jpg", category: "Pedicure", title: "Gel Pedicure" },
  { id: 11, src: "/images/gallery/11.jpg", category: "Manicure", title: "Mauve Nail Art" },
  { id: 12, src: "/images/gallery/12.jpg", category: "Extensions", title: "Square Full Set" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof gallery[0]>(null);

  const filtered =
    active === "All" ? gallery : gallery.filter((g) => g.category === active);

  return (
    <main className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative bg-[#0E1627] py-32 md:py-44 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[180px] h-[180px] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,1) 28px, rgba(255,255,255,1) 29px)" }}
        />
        <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Our Work
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-8">
            Gallery
          </h1>
          <div className="mx-auto h-[1px] w-14 bg-[#BD8E89]/40 mb-8" />
          <p className="text-sm text-white/50 font-light leading-relaxed max-w-xl mx-auto tracking-wide">
            Every set is a work of art. Browse our portfolio of signature nail designs, lash extensions and spa rituals.
          </p>
        </div>
      </section>

      {/* ── ФИЛЬТРЫ ── */}
      <section className="border-b border-[#0E1627]/8 sticky top-0 bg-white/95 backdrop-blur-md z-30">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-4">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-6 py-5 text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-300 border-b-2 ${
                  active === cat
                    ? "border-[#BD8E89] text-[#0E1627]"
                    : "border-transparent text-[#7F6269]/50 hover:text-[#0E1627]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-4">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  onClick={() => setLightbox(item)}
                  className="group relative aspect-[3/4] overflow-hidden bg-[#F4E1E0]/30 cursor-pointer"
                >
                  {/* Фото */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  {/* Оверлей при hover */}
                  <div className="absolute inset-0 bg-[#0E1627]/0 group-hover:bg-[#0E1627]/50 transition-all duration-400" />

                  {/* Текст */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#BD8E89] mb-1.5">
                      {item.category}
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white font-medium text-center">
                      {item.title}
                    </p>
                  </div>

                  {/* Номер */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Иконка увеличения */}
                  <div className="absolute top-3 right-3 w-7 h-7 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1h5M1 1v5M13 13h-5M13 13v-5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-[#0E1627]/90 backdrop-blur-sm"
              onClick={() => setLightbox(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10"
              onClick={() => setLightbox(null)}
            >
              <div
                className="relative max-w-2xl w-full max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Фото */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={lightbox.src}
                    alt={lightbox.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Подпись */}
                <div className="bg-white px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#BD8E89] mb-0.5">
                      {lightbox.category}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#0E1627] font-medium">
                      {lightbox.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setLightbox(null)}
                    className="w-8 h-8 border border-[#0E1627]/15 flex items-center justify-center text-[#7F6269] hover:border-[#BD8E89] hover:text-[#BD8E89] transition-all"
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </button>
                </div>

                {/* Стрелки lightbox */}
                <button
                  onClick={() => {
                    const idx = gallery.findIndex((g) => g.id === lightbox.id);
                    const prev = gallery[(idx - 1 + gallery.length) % gallery.length];
                    setLightbox(prev);
                  }}
                  className="absolute left-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-white/50 hover:border-[#BD8E89] hover:text-white flex items-center justify-center transition-all hidden md:flex"
                >
                  <svg width="14" height="10" viewBox="0 0 20 12" fill="none">
                    <path d="M20 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const idx = gallery.findIndex((g) => g.id === lightbox.id);
                    const next = gallery[(idx + 1) % gallery.length];
                    setLightbox(next);
                  }}
                  className="absolute right-[-56px] top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-white/50 hover:border-[#BD8E89] hover:text-white flex items-center justify-center transition-all hidden md:flex"
                >
                  <svg width="14" height="10" viewBox="0 0 20 12" fill="none">
                    <path d="M0 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-[#0E1627] border-t border-white/5">
        <div className="container max-w-2xl mx-auto px-6 text-center">
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Love what you see?
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none mb-8">
            Book Your Session
          </h2>
          <div className="mx-auto h-[1px] w-14 bg-[#BD8E89]/40 mb-10" />
          <a
            href="/"
            className="inline-block bg-white px-14 py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#0E1627] transition-all hover:bg-[#BD8E89] hover:text-white"
          >
            Book An Appointment
          </a>
        </div>
      </section>

    </main>
  );
}
