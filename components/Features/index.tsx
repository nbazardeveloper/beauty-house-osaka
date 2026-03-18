"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import BookingModal from "@/components/BookingModal/bookingmodal";

const Features = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isEnd = activeIndex >= featuresData.length - 1;

  return (
    <>
      <section
        id="services"
        className="bg-white py-16 md:py-24 border-t border-[#0E1627]/8 overflow-hidden"
      >
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-4">

          {/* ── ШАПКА — всё по центру ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12 md:mb-20 flex flex-col items-center text-center gap-5 border-b border-[#0E1627]/8 pb-10"
          >
            <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold block">
              Professional Care
            </span>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
              Our Expertise
            </h2>

            <p className="max-w-sm text-[10px] md:text-xs uppercase tracking-widest text-[#7F6269]/60 leading-relaxed font-light">
              Japanese precision meets modern aesthetics to redefine your beauty ritual.
            </p>

            <Link
              href="/services"
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0E1627] transition-colors hover:text-[#BD8E89]"
            >
              <span>View All Services</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          {/* ── КАРТОЧКИ DESKTOP ─────────────────── */}
          <div className="hidden lg:grid grid-cols-4 border-l border-y border-[#0E1627]/8">
            {featuresData.map((feature, index) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                index={index}
                onBook={() => setBookingOpen(true)}
              />
            ))}
          </div>

          {/* ── КАРУСЕЛЬ MOBILE / TABLET ─────────── */}
          <div className="lg:hidden">
            <div className="border-l border-y border-[#0E1627]/8 mx-0">
              <Swiper
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                  540: { slidesPerView: 1.6 },
                }}
                onSwiper={setSwiperRef}
                onSlideChange={(s) => setActiveIndex(s.activeIndex)}
                className="!overflow-visible"
              >
                {featuresData.map((feature, index) => (
                  <SwiperSlide key={feature.id} className="h-auto">
                    <SingleFeature
                      feature={feature}
                      index={index}
                      onBook={() => setBookingOpen(true)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* ── СТРЕЛКИ + СЧЁТЧИК ── */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <button
                onClick={() => swiperRef?.slidePrev()}
                disabled={activeIndex === 0}
                className={`flex items-center justify-center w-11 h-11 border transition-all duration-300 ${
                  activeIndex === 0
                    ? "border-[#0E1627]/10 text-[#0E1627]/20 cursor-not-allowed"
                    : "border-[#BD8E89]/40 text-[#7F6269] hover:bg-[#BD8E89] hover:text-white hover:border-[#BD8E89]"
                }`}
                aria-label="Previous slide"
              >
                <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
                  <path d="M20 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#7F6269]/60 font-light">
                <span className="text-[#0E1627] font-medium">0{activeIndex + 1}</span>
                <span className="h-[1px] w-6 bg-[#BD8E89]/30 inline-block" />
                <span>0{featuresData.length}</span>
              </div>

              <button
                onClick={() => swiperRef?.slideNext()}
                disabled={isEnd}
                className={`flex items-center justify-center w-11 h-11 border transition-all duration-300 ${
                  isEnd
                    ? "border-[#0E1627]/10 text-[#0E1627]/20 cursor-not-allowed"
                    : "border-[#BD8E89]/40 text-[#7F6269] hover:bg-[#BD8E89] hover:text-white hover:border-[#BD8E89]"
                }`}
                aria-label="Next slide"
              >
                <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
                  <path d="M0 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default Features;
