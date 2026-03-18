import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Osaka Beauty House",
  description: "Japanese precision meets modern aesthetics in the heart of Chicago. Learn about our story, services and values.",
};

const AboutPage = () => {
  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-[#0E1627] py-32 md:py-64 overflow-hidden">
        {/* Декоративные окружности */}
        <div className="absolute w-[600px] h-[600px]  rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* Текстура */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,1) 28px, rgba(255,255,255,1) 29px)" }}
        />
        <div className="relative z-10 container max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-8">
            About Us
          </h1>
          <div className="mx-auto h-[1px] w-14 bg-[#BD8E89]/40 mb-8" />
          <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-2xl mx-auto tracking-wide">
            Where nail care is elevated to an art form, and your satisfaction is our top priority.
          </p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-24 border-b border-[#0E1627]/8">
        <div className="container max-w-4xl mx-auto px-6 sm:px-8 lg:px-4">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

            <div className="md:w-1/3 flex-shrink-0">
              <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
                Welcome
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#0E1627] leading-tight">
                Osaka<br />Beauty House
              </h2>
              <div className="mt-4 h-[1px] w-10 bg-[#BD8E89]/40" />
            </div>

            <div className="md:w-2/3">
              <p className="text-sm md:text-base text-[#7F6269] font-light leading-relaxed tracking-wide">
                Welcome to Osaka Beauty — where nail care is elevated to an art form, and your satisfaction is our top priority. We offer all types of self-care including eyelash extensions, eyebrow services, waxing, hair care, and more.
              </p>
              <p className="mt-5 text-sm md:text-base text-[#7F6269] font-light leading-relaxed tracking-wide">
                We take pride in offering you more than just a manicure — we provide an experience of lasting beauty and wellness. With a dedicated focus on innovation and excellence, we specialize in efile clean manicures that not only enhance the beauty of your nails but also stand the test of time, lasting well over a month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE SERVICES ── */}
      <section className="py-16 md:py-24 bg-[#F4E1E0]/20 border-b border-[#0E1627]/8">
        <div className="container max-w-4xl mx-auto px-6 sm:px-8 lg:px-4">

          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
              Our Signature Services
            </h2>
            <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#0E1627]/8">
            {[
              {
                num: "01",
                title: "Efile Clean Manicures",
                text: "Utilizing cutting-edge techniques and sterilized tools, we ensure stunning results in a safe and hygienic environment. Say goodbye to chipped polish and hello to long-lasting, flawless nails.",
              },
              {
                num: "02",
                title: "Experienced Professionals",
                text: "Our team comprises some of the most experienced and skilled nail technicians in the industry, dedicated to delivering top-notch services and creating a memorable experience.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 md:p-10 ${i === 0 ? "border-b md:border-b-0 md:border-r border-[#0E1627]/8" : ""}`}
              >
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89]/60 block mb-4">{item.num}</span>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E1627] mb-4 leading-tight">
                  {item.title}
                </h3>
                <div className="h-[1px] w-8 bg-[#BD8E89]/40 mb-4" />
                <p className="text-sm text-[#7F6269]/80 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 md:py-24 border-b border-[#0E1627]/8">
        <div className="container max-w-4xl mx-auto px-6 sm:px-8 lg:px-4">

          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
              Why Choose Us
            </h2>
            <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border border-[#0E1627]/8">
            {[
              { num: "01", title: "Uncompromising Quality", text: "From nail shaping to polish application, every detail is meticulously attended to." },
              { num: "02", title: "Hygiene & Safety", text: "We adhere to strict sterilization protocols to ensure a clean and safe environment." },
              { num: "03", title: "Lasting Results", text: "Our efile clean manicures give you beautiful nails that stand the test of time." },
              { num: "04", title: "Personalized Care", text: "Our technicians take the time to listen and customize your experience accordingly." },
              { num: "05", title: "Relaxing Atmosphere", text: "Our salon is a haven of tranquility, perfect to unwind and escape everyday stress." },
              { num: "06", title: "Innovation", text: "We stay at the forefront of beauty trends and techniques to offer you the best." },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 border-b border-r border-[#0E1627]/8 last:border-r-0 hover:bg-[#F4E1E0]/20 transition-all duration-300"
              >
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89]/50 block mb-3">{item.num}</span>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0E1627] mb-3 leading-tight">
                  {item.title}
                </h3>
                <div className="h-[1px] w-6 bg-[#BD8E89]/40 mb-3 transition-all duration-300 group-hover:w-10 group-hover:bg-[#BD8E89]" />
                <p className="text-xs text-[#7F6269]/70 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-[#0E1627]">
        <div className="container max-w-2xl mx-auto px-6 text-center">
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Ready?
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none mb-8">
            Book Your Experience
          </h2>
          <div className="mx-auto h-[1px] w-14 bg-[#BD8E89]/40 mb-10" />
          <a
            href="/#home"
            className="inline-block bg-white px-14 py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#0E1627] transition-all hover:bg-[#BD8E89] hover:text-white"
          >
            Book An Appointment
          </a>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;
