"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#7F6269] pt-16 md:pt-20 lg:pt-24 pb-12 text-white/80">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-4">
        <div className="flex flex-wrap -mx-4">

          {/* Лого и Описание */}
        <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12 mb-12 lg:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-8 inline-block">
              <h2 className="text-2xl font-black uppercase tracking-[0.2em] text-white">
                Osaka <span className="text-[#F4E1E0]">Beauty</span>
              </h2>
            </Link>
            <p className="mb-9 text-sm leading-relaxed tracking-wide font-light max-w-[300px] opacity-60">
              Japanese precision meets modern aesthetics in the heart of Chicago. Elevating your beauty ritual through master craftsmanship.
            </p>

            {/* Иконки соцсетей */}
            <div className="flex items-center space-x-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/beauty.house.osaka/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#F4E1E0] hover:text-white transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@beautyhouseosaka?_t=8kw49Sag2YU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#F4E1E0] hover:text-white transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#F4E1E0] hover:text-white transition-all duration-300"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Навигация */}
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12 mb-12 lg:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F4E1E0]/70">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/#services" className="text-sm font-light hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#reviews" className="text-sm font-light hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/#location" className="text-sm font-light hover:text-white transition-colors">Location</Link></li>
              <li><Link href="/#contact" className="text-sm font-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12 mb-12 lg:mb-16 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-[#F4E1E0]/70">Find Us</h4>
            <p className="text-sm font-light leading-relaxed mb-4 opacity-70">
              24 West Erie,<br />Chicago, IL 60654
            </p>
            <a href="tel:6282029554" className="block text-sm font-light opacity-70 hover:opacity-100 hover:text-white transition-all mb-2">
              628-202-9554
            </a>
            <a
              href="https://www.beautyhouseosaka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-light opacity-70 hover:opacity-100 hover:text-white transition-all underline underline-offset-4 decoration-[#F4E1E0]/20"
            >
              www.beautyhouseosaka.com
            </a>
          </div>

        </div>

        {/* Нижняя полоса */}
   <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            © 2026 Osaka Beauty House. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] opacity-40">
            <Link href="/privacy" className="hover:opacity-100 hover:text-white transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-100 hover:text-white transition-all">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
