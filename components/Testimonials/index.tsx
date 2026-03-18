"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import BookingModal from "@/components/BookingModal/bookingmodal";
import "swiper/css";

import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Elena Ross",
    designation: "Loyal Client",
    content: "The best Japanese head spa in Chicago. The atmosphere is incredibly serene, and the attention to detail is unmatched. Pure perfection.",
  },
  {
    id: 2,
    name: "James Chen",
    designation: "Creative Director",
    content: "Minimalism at its finest. My manicure was flawless and lasted for weeks. A truly premium experience from start to finish.",
  },
  {
    id: 3,
    name: "Sarah Miller",
    designation: "Beauty Enthusiast",
    content: "I've tried many places, but Osaka's technique for lash extensions is superior. They look natural yet sophisticated.",
  },
];

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
const [bookingOpen, setBookingOpen] = useState(false);
  return (
   <section id="testimonials" className="relative py-24 md:py-36 overflow-hidden border-t border-[#0E1627]/8">

      {/* ── ПАРАЛЛАКС ФОН ──────────────────────────────────────
          background-attachment: fixed создаёт эффект глубины —
          фон остаётся на месте пока страница скроллится          */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/testimonials/osaka-beauty-salon-interior.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Navy оверлей для читаемости текста */}
    <div className="absolute inset-0 z-[1]"
  style={{
    background: "radial-gradient(ellipse at center, rgba(14,22,39,0.92) 0%, rgba(14,22,39,0.65) 100%)"
  }}
/>

      {/* Тонкий горизонтальный узор */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,1) 28px, rgba(255,255,255,1) 29px)",
        }}
      />

      {/* ── КОНТЕНТ ──────────────────────────────────────────── */}
      <div className="relative z-10 container max-w-3xl mx-auto px-6 sm:px-4 lg:px-4">

        {/* Шапка */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Guest Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            What Our Clients Say
          </h2>
          <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
        </motion.div>

        {/* Слайдер */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            onSwiper={setSwiperRef}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="w-full"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <SingleTestimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ── СТРЕЛКИ + СЧЁТЧИК ── */}
          <div className="flex items-center justify-center gap-8 mt-14">

            {/* Стрелка назад */}
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="flex items-center justify-center w-11 h-11 border border-white/15 text-white/30 hover:border-[#BD8E89] hover:text-white hover:bg-[#BD8E89]/20 transition-all duration-300"
              aria-label="Previous"
            >
              <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
                <path d="M20 6H1M1 6L6 1M1 6L6 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Счётчик */}
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] font-light">
              <span className="text-white font-medium">0{activeIndex + 1}</span>
              <span className="h-[1px] w-6 bg-[#BD8E89]/40 inline-block" />
              <span className="text-white/30">0{testimonialData.length}</span>
            </div>

            {/* Стрелка вперёд */}
            <button
              onClick={() => swiperRef?.slideNext()}
              className="flex items-center justify-center w-11 h-11 border border-white/15 text-white/30 hover:border-[#BD8E89] hover:text-white hover:bg-[#BD8E89]/20 transition-all duration-300"
              aria-label="Next"
            >
              <svg width="16" height="10" viewBox="0 0 20 12" fill="none">
                <path d="M0 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>

       {/* Кнопка Book Now */}
<div className="mt-16 flex justify-center">
  <button
    onClick={() => setBookingOpen(true)}
    className="px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] bg-white text-[#0E1627] transition-all hover:bg-[#BD8E89] hover:text-white"
  >
    Book An Appointment
  </button>
</div>

      </div>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </section>
  );
};

export default Testimonials;
