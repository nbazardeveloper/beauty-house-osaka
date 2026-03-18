"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import BookingModal from "@/components/BookingModal/bookingmodal";

const slides = [
  { id: 1, image: "/images/hero/professional-nail-care-process-osaka-salon.jpg" },
  { id: 2, image: "/images/hero/minimalist-nail-osaka.jpg" },
  { id: 3, image: "/images/hero/nail-design-red-foil.jpg" },
  { id: 4, image: "/images/hero/avant-garde-nail-design-gold-foil.jpg" },
];

const quickServices = [
  { name: "Russian Mani", path: "#services" },
  { name: "Pedicure", path: "#services" },
  { name: "Extensions", path: "#services" },
  { name: "SPA Rituals", path: "#services" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="home" className="relative h-[95vh] w-full overflow-hidden bg-[#0E1627]">

        {/* КАРУСЕЛЬ */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={slide.image} alt="Hero Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* КОНТЕНТ */}
        <div className="container relative z-10 flex h-full items-center justify-center">
          <div className="w-full max-w-[1100px] flex flex-col items-center px-4">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center mb-12"
            >
              <div className="flex items-center space-x-6 md:space-x-12">
                <span className="text-6xl md:text-[10rem] font-black uppercase tracking-tight text-white leading-none">OSAKA</span>
                {/* #C17D5C → Mauve #BD8E89 */}
                <div className="h-20 md:h-32 w-[2px] bg-[#BD8E89]" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[#BD8E89] text-lg md:text-4xl font-bold uppercase tracking-[0.3em] leading-tight">Beauty</span>
                  <span className="text-white/50 text-sm md:text-xl font-light uppercase tracking-[0.2em]">House</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-center mb-12 max-w-[700px]"
            >
              <h2 className="text-white text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-semibold leading-relaxed">
                Ultimate luxury and self-care in the heart of River North. Your peaceful haven for natural beauty.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <button
                onClick={() => setBookingOpen(true)}
                className="w-full sm:w-auto bg-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0E1627] transition-all hover:bg-[#BD8E89] hover:text-white"
              >
                Book An Appointment
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto flex items-center justify-center border border-white/40 px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:border-[#BD8E89] hover:text-[#BD8E89]"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* УПРАВЛЕНИЕ */}
        <div className="absolute bottom-24 right-12 z-40 hidden md:flex items-center space-x-8">
          <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="group transition-all" aria-label="Previous slide">
            <svg width="30" height="12" viewBox="0 0 40 15" fill="none">
              <path d="M40 7.5H1M1 7.5L7.5 1M1 7.5L7.5 14" stroke="white" strokeWidth="1" className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </svg>
          </button>
          <div className="flex items-center font-light tracking-[0.2em] text-white/90">
            <span className="text-xs">0{currentSlide + 1}</span>
            <span className="mx-3 text-[10px] text-white/30">/</span>
            <span className="text-xs text-white/50">0{slides.length}</span>
          </div>
          <button onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)} className="group transition-all" aria-label="Next slide">
            <svg width="30" height="12" viewBox="0 0 40 15" fill="none">
              <path d="M0 7.5H39M39 7.5L32.5 1M39 7.5L32.5 14" stroke="white" strokeWidth="1" className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </svg>
          </button>
        </div>

        {/* БЕГУЩАЯ СТРОКА — #817e71 → Prune #7F6269 */}
        <div className="absolute bottom-0 left-0 w-full z-30 bg-[#7F6269] border-t border-white/10 py-5 overflow-hidden">
          <div className="relative flex">
            <div className="flex whitespace-nowrap items-center animate-infinite-scroll hover:[animation-play-state:paused]" style={{ display: "flex", width: "max-content" }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {quickServices.map((service, index) => (
                    <div key={index} className="flex items-center px-10">
                      <Link href={service.path} className="group flex items-center cursor-pointer">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white transition-opacity group-hover:opacity-70">{service.name}</span>
                      </Link>
                      <div className="ml-16 h-1 w-1 rounded-full bg-white/40" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes infiniteScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-33.33%); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 40s linear infinite;
          }
        `}</style>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default Hero;
