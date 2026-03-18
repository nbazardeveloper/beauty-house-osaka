"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "and growing every month",
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    sublabel: "in luxury nail care",
  },
  {
    value: 12,
    suffix: "",
    label: "Services Available",
    sublabel: "from manicure to SPA",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "based on reviews",
  },
];

// Хук анимации числа
function useCounter(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  sublabel,
  index,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  index: number;
  started: boolean;
}) {
  const count = useCounter(value, 2000, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative flex flex-col items-center text-center px-6 py-10"
    >
      {/* Вертикальный разделитель между колонками */}
      {index !== 0 && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-[#BD8E89]/20 hidden md:block" />
      )}

      {/* Число */}
      <div className="flex items-start leading-none mb-4">
        <span className="text-5xl xl:text-6xl font-light tracking-tight text-[#0E1627] transition-colors group-hover:text-[#BD8E89]">
          {count}
        </span>
        <span className="text-2xl xl:text-3xl font-light text-[#BD8E89] mt-1 ml-0.5">
          {suffix}
        </span>
      </div>

      {/* Декоративная линия */}
      <div className="w-8 h-[1px] bg-[#BD8E89]/50 mb-4 transition-all duration-500 group-hover:w-14 group-hover:bg-[#BD8E89]" />

      {/* Лейбл */}
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#0E1627] font-medium mb-1.5">
        {label}
      </p>
      <p className="text-[10px] tracking-[0.1em] text-[#7F6269]/60">
        {sublabel}
      </p>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  // Запускаем анимацию когда секция входит во viewport
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#F4E1E0]/30 border-y border-[#BD8E89]/15 overflow-hidden">

      {/* Тонкая декоративная полоса сверху */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BD8E89]/40 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              index={i}
              started={isInView}
            />
          ))}
        </div>
      </div>

      {/* Тонкая декоративная полоса снизу */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#BD8E89]/40 to-transparent" />
    </section>
  );
}
