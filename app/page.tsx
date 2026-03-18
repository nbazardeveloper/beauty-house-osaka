import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio"; 
import Testimonials from "@/components/Testimonials"; 
import Location from "@/components/Location"; 
import Contact from "@/components/Contact"; 
import { Metadata } from "next";
import StatsSection from "@/components/StatsSection";
export const metadata: Metadata = {
  title: "Osaka Beauty Salon | Premium Japanese Beauty & Wellness in Chicago",
  description: "Experience the art of Japanese hospitality at Osaka Beauty Salon. We offer premium hair styling, expert skincare, and holistic wellness treatments in a serene, luxurious atmosphere.",
  keywords: [
    "Osaka Beauty Salon",
    "Japanese beauty salon Chicago",
    "Premium hair salon",
    "Luxury skincare Chicago",
    "Japanese head spa",
    "Minimalist beauty wellness"
  ],
  authors: [{ name: "Osaka Beauty Salon Team" }],
  openGraph: {
    title: "Osaka Beauty Salon | Japanese Aesthetic & Care",
    description: "Discover a new level of beauty and tranquility. Premium services tailored to your unique style.",
    url: "https://osakabeautysalon.com", // замените на ваш реальный домен
    siteName: "Osaka Beauty Salon",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <StatsSection />
      <Features />
      {/* <Portfolio /> */}
      <Testimonials />
      <Location/>
      <Contact />
    </>
  );
}
