const starIcon = (
  <svg width="13" height="13" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: any }) => {
  const { name, content, designation } = testimonial;

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-12 md:px-10">

      {/* Кавычка декоративная */}
      <div className="mb-6 text-[#BD8E89]/30 leading-none select-none"
        style={{ fontSize: "6rem", fontFamily: "Georgia, serif", lineHeight: 0.8 }}>
        &ldquo;
      </div>

      {/* Текст отзыва */}
      <blockquote className="text-lg md:text-2xl font-light text-white leading-relaxed mb-10 tracking-wide max-w-2xl -mt-4">
        {content}
      </blockquote>

      {/* Разделитель */}
      <div className="h-[1px] w-10 bg-[#BD8E89]/50 mb-4" />

      {/* Звёзды */}
      <div className="flex items-center space-x-1.5 mb-6 text-[#BD8E89]">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{starIcon}</span>
        ))}
      </div>

      {/* Имя и должность */}
      <cite className="not-italic">
        <span className="block text-[11px] font-bold uppercase tracking-[0.4em] text-white mb-1.5">
          {name}
        </span>
       
      </cite>
    </div>
  );
};

export default SingleTestimonial;
