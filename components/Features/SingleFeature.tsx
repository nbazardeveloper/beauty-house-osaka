import Image from "next/image";
import { motion } from "framer-motion";
import { Feature } from "@/types/feature";

interface SingleFeatureProps {
  feature: Feature;
  index: number;
  onBook: () => void;
}

const SingleFeature = ({ feature, index, onBook }: SingleFeatureProps) => {
  const { title, paragraph, icon } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="group relative w-full border-r border-[#0E1627]/8 p-6 md:p-8 transition-all hover:bg-[#F4E1E0]/20 last:border-r-0 h-full flex flex-col"
    >
      {/* Фото */}
      <div className="relative mb-6 aspect-[4/5] w-full overflow-hidden bg-[#F4E1E0]/30">
        {icon ? (
          <Image
            src={icon}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#7F6269]/20 text-[9px] uppercase tracking-widest">
            Photo Coming Soon
          </div>
        )}

        {/* Номер карточки */}
        <div className="absolute top-3 left-3 w-7 h-7 bg-white/80 backdrop-blur-sm flex items-center justify-center">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#7F6269]">0{index + 1}</span>
        </div>
      </div>

      {/* Текст */}
      <div className="flex flex-col flex-grow">
        <h3 className="mb-3 text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#0E1627] leading-tight">
          {title}
        </h3>

        <p className="mb-6 text-[11px] md:text-xs leading-relaxed text-[#7F6269]/70 tracking-wide font-light">
          {paragraph}
        </p>

        {/* Book Now — открывает модалку */}
        <div className="mt-auto pt-4 border-t border-[#0E1627]/5">
          <button
            onClick={onBook}
            className="group/btn flex w-full items-center justify-between transition-all"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#0E1627]/50 group-hover/btn:text-[#BD8E89] transition-colors font-medium">
              Book Now
            </span>
            <span className="text-[#BD8E89] opacity-0 group-hover/btn:opacity-100 transition-all transform -translate-x-2 group-hover/btn:translate-x-0">
              →
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleFeature;
