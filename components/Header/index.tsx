"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import menuData, { MenuItem } from "./menuData";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const half = Math.ceil(menuData.length / 2);
  const leftMenu = menuData.slice(0, half);
  const rightMenu = menuData.slice(half);

  useEffect(() => {
    const handleSticky = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path.includes("#")) {
      const hash = path.split("#")[1];
      const el = document.getElementById(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setNavbarOpen(false);
        setOpenSubmenu(null);
        setMobileSubmenuOpen(null);
      }
    }
  };

  const linkClass = `text-[11px] font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${
    sticky ? "text-olive hover:text-deep-soil" : "text-white hover:text-sand"
  }`;

  const renderDesktopMenuItem = (item: MenuItem) => {
    if (!item.submenu) {
      return (
        <Link
          key={item.id}
          href={item.path}
          onClick={(e) => handleAnchorClick(e, item.path)}
          className={linkClass}
        >
          {item.title}
        </Link>
      );
    }

    return (
      <div key={item.id} className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpenSubmenu(openSubmenu === item.id ? null : item.id)}
          className={`flex items-center gap-1 ${linkClass}`}
        >
          {item.title}
          <svg
            width="9" height="9" viewBox="0 0 10 6" fill="none"
            className={`transition-transform duration-300 flex-shrink-0 ${openSubmenu === item.id ? "rotate-180" : ""}`}
          >
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </button>

        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 transition-all duration-300 origin-top z-50 ${
            openSubmenu === item.id
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-95 pointer-events-none"
          }`}
        >
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-l border-t border-stroke" />
          <div className="bg-white border border-stroke shadow-two py-3">
            {item.submenu.map((sub) => (
              <Link
                key={sub.id}
                href={sub.path}
                onClick={(e) => handleAnchorClick(e, sub.path)}
                className="group flex items-center px-6 py-3 transition-all hover:bg-blush/30"
              >
                <span className="mr-3 h-[1px] w-4 bg-mauve/40 transition-all group-hover:w-6 group-hover:bg-mauve" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-prune transition-colors group-hover:text-navy">
                  {sub.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        sticky
          ? "bg-sand/90 shadow-sm backdrop-blur-md py-2"
          : "bg-gradient-to-b from-black/30 to-transparent py-5 backdrop-blur-[10px]"
      }`}
    >
      <div className="container mx-auto px-4">

        {/* ── DESKTOP: 3-column grid, логотип строго по центру ── */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-4">

          {/* ЛЕВОЕ МЕНЮ */}
          <nav className="flex items-center justify-end gap-6 xl:gap-8">
            {leftMenu.map((item) => renderDesktopMenuItem(item))}
          </nav>

          {/* ЛОГОТИП — центр */}
          <div className="px-8 xl:px-12 text-center flex-shrink-0">
            <Link href="/#home" onClick={(e) => handleAnchorClick(e, "/#home")} className="group inline-block">
              <h1 className={`text-xl md:text-2xl font-light uppercase tracking-[0.4em] transition-all group-hover:tracking-[0.5em] ${
                sticky ? "text-olive" : "text-white"
              }`}>
                Osaka
              </h1>
              <div className={`mx-auto my-1 h-[1px] w-full transition-all duration-300 ${
                sticky ? "bg-olive/20" : "bg-white/20"
              }`} />
              <p className={`text-[9px] uppercase tracking-[0.3em] ${
                sticky ? "text-olive/60" : "text-white/70"
              }`}>
                Beauty House
              </p>
            </Link>
          </div>

          {/* ПРАВОЕ МЕНЮ + ИКОНКИ */}
          <nav className="flex items-center justify-start gap-6 xl:gap-8">
            {rightMenu.map((item) => renderDesktopMenuItem(item))}

            {/* Разделитель */}
            <div className={`h-4 w-[1px] ${sticky ? "bg-olive/20" : "bg-white/20"}`} />

            {/* Корзина */}
            <a
              href="/shop"
              aria-label="Shop"
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 flex-shrink-0 ${
                sticky
                  ? "border-olive/20 text-olive hover:bg-olive hover:text-sand"
                  : "border-white/30 text-white hover:bg-white hover:text-olive"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </a>
            <a
  href="mailto:osakabeautyusa@gmail.com"
  aria-label="Email us"
  className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 flex-shrink-0 ${
    sticky
      ? "border-olive/20 text-olive hover:bg-olive hover:text-sand"
      : "border-white/30 text-white hover:bg-white hover:text-olive"
  }`}
>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
</a>


            {/* Телефон */}
            <a
              href="tel:+1234567890"
              aria-label="Call us"
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 flex-shrink-0 ${
                sticky
                  ? "border-olive/20 text-olive hover:bg-olive hover:text-sand"
                  : "border-white/30 text-white hover:bg-white hover:text-olive"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </nav>
        </div>

        {/* ── MOBILE: гамбургер + логотип по центру + иконки ── */}
        <div className="flex lg:hidden items-center justify-between">

          {/* Гамбургер */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`p-2 z-[50] ${
              navbarOpen ? "text-deep-soil" : sticky ? "text-olive" : "text-white"
            }`}
          >
            <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${navbarOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mb-1.5 ${navbarOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${navbarOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* Логотип по центру */}
          <Link href="/#home" onClick={(e) => handleAnchorClick(e, "/#home")} className="group text-center">
            <h1 className={`text-lg font-light uppercase tracking-[0.4em] transition-all ${
              sticky ? "text-olive" : "text-white"
            }`}>
              Osaka
            </h1>
            <div className={`mx-auto my-0.5 h-[1px] w-full ${sticky ? "bg-olive/20" : "bg-white/20"}`} />
            <p className={`text-[8px] uppercase tracking-[0.3em] ${sticky ? "text-olive/60" : "text-white/70"}`}>
              Beauty House
            </p>
          </Link>

          {/* Иконки */}
          <div className="flex items-center gap-2">
            <a
              href="/shop"
              aria-label="Shop"
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                sticky
                  ? "border-olive/20 text-olive hover:bg-olive hover:text-sand"
                  : "border-white/30 text-white hover:bg-white hover:text-olive"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </a>
            <a
              href="tel:+1234567890"
              aria-label="Call us"
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                sticky
                  ? "border-olive/20 text-olive hover:bg-olive hover:text-sand"
                  : "border-white/30 text-white hover:bg-white hover:text-olive"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── МОБИЛЬНОЕ МЕНЮ ── */}
      <div
        className={`fixed inset-0 z-[40] h-screen w-full bg-sand/95 backdrop-blur-xl transition-all duration-500 lg:hidden overflow-y-auto ${
          navbarOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center min-h-full py-24 space-y-1">
          {menuData.map((item, index) => (
            <div key={item.id} className="w-full flex flex-col items-center">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.id ? null : item.id)}
                    className={`flex items-center gap-2 py-3 text-sm font-light uppercase tracking-[0.4em] text-deep-soil transition-all duration-700 ${
                      navbarOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {item.title}
                    <svg width="10" height="10" viewBox="0 0 10 6" fill="none"
                      className={`transition-transform duration-300 ${mobileSubmenuOpen === item.id ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 w-full flex flex-col items-center ${
                    mobileSubmenuOpen === item.id ? "max-h-96 opacity-100 mb-2" : "max-h-0 opacity-0"
                  }`}>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        onClick={(e) => handleAnchorClick(e, sub.path)}
                        className="py-2 text-[10px] uppercase tracking-[0.3em] text-olive hover:text-deep-soil transition-colors"
                      >
                        — {sub.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.path}
                  onClick={(e) => handleAnchorClick(e, item.path)}
                  className={`py-3 text-sm font-light uppercase tracking-[0.4em] text-deep-soil hover:text-olive transition-all duration-700 ${
                    navbarOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}

          <div className={`h-[1px] w-12 bg-olive/30 mt-6 transition-all duration-1000 delay-500 ${navbarOpen ? "scale-x-100" : "scale-x-0"}`} />

          <a
            href="tel:+1234567890"
            className={`text-[10px] uppercase tracking-[0.3em] text-olive pt-4 transition-all duration-700 delay-700 ${navbarOpen ? "opacity-100" : "opacity-0"}`}
          >
            Book an appointment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
