"use client";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-sand py-16 md:py-24 border-t border-deep-soil/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-deep-soil mb-12">
          The Art of Detail
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Заглушки для ваших будущих фото */}
          <div className="aspect-[3/4] bg-white/40 border border-deep-soil/5 flex items-center justify-center text-[10px] uppercase tracking-widest text-olive/40">
            Work 01
          </div>
          <div className="aspect-[3/4] bg-white/40 border border-deep-soil/5 flex items-center justify-center text-[10px] uppercase tracking-widest text-olive/40">
            Work 02
          </div>
          <div className="aspect-[3/4] bg-white/40 border border-deep-soil/5 flex items-center justify-center text-[10px] uppercase tracking-widest text-olive/40">
            Work 03
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; // Важно: используем default export