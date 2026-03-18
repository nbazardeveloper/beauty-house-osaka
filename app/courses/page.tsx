"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const courses = [
  {
    id: "01",
    title: "Russian Manicure Masterclass",
    level: "Beginner — Advanced",
    duration: "3 Days",
    format: "In-person",
    description:
      "Master the iconic Russian e-file technique from scratch. Learn cuticle anatomy, tool selection, sterilization protocols, and gel application for flawless long-lasting results.",
    includes: ["E-file technique", "Cuticle care", "Gel application", "Kit included"],
  },
  {
    id: "02",
    title: "Nail Extensions & Sculpting",
    level: "Intermediate",
    duration: "2 Days",
    format: "In-person",
    description:
      "Full coverage of hard gel and acrylic extensions. Learn apex placement, shape perfection, and finishing techniques that create architectural nail art.",
    includes: ["Hard gel & acrylic", "Shape theory", "Finishing & filing", "Practice model"],
  },
  {
    id: "03",
    title: "Lash Extension Certification",
    level: "Beginner",
    duration: "2 Days",
    format: "In-person",
    description:
      "Classic, hybrid and volume lash techniques taught by our senior lash artists. Includes mapping, isolation, adhesive theory and aftercare consultation.",
    includes: ["Classic & volume", "Lash mapping", "Adhesive theory", "Certificate"],
  },
  {
    id: "04",
    title: "Business of Beauty",
    level: "All levels",
    duration: "1 Day",
    format: "Online / In-person",
    description:
      "Build your beauty brand from the ground up. Pricing strategy, client retention, social media, and studio management for independent nail artists.",
    includes: ["Pricing strategy", "Client retention", "Social media", "Workbook"],
  },
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const inputClass =
    "bg-transparent border-b border-[#0E1627]/10 py-3 text-sm outline-none focus:border-[#BD8E89] transition-colors text-[#0E1627] placeholder:text-[#7F6269]/30 w-full";
  const labelClass =
    "text-[9px] uppercase tracking-[0.4em] text-[#BD8E89] mb-2 block";

  return (
    <main className="bg-white">

      {/* ── HERO ── */}
      <section className="relative bg-[#0E1627] py-32 md:py-44 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-white/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[180px] h-[180px] rounded-full border border-white/[0.05]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255,255,255,1) 28px, rgba(255,255,255,1) 29px)" }}
        />
        <div className="relative z-10 container max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Education
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white leading-none mb-8">
            Courses
          </h1>
          <div className="mx-auto h-[1px] w-14 bg-[#BD8E89]/40 mb-8" />
          <p className="text-sm md:text-base text-white/50 font-light leading-relaxed max-w-xl mx-auto tracking-wide">
            Learn from our senior artists. Practical, hands-on training designed for both beginners and working professionals.
          </p>
        </div>
      </section>

      {/* ── КУРСЫ ── */}
      <section className="py-16 md:py-24 border-b border-[#0E1627]/8">
        <div className="container max-w-5xl mx-auto px-6 sm:px-8 lg:px-4">

          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              What We Teach
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
              Available Programs
            </h2>
            <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#0E1627]/8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group p-8 md:p-10 border-[#0E1627]/8 hover:bg-[#F4E1E0]/20 transition-all duration-300
                  ${i % 2 === 0 ? "md:border-r" : ""}
                  ${i < 2 ? "border-b" : ""}
                `}
              >
                {/* Номер + уровень */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89]/50">{course.id}</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#7F6269]/50 border border-[#BD8E89]/20 px-3 py-1">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#0E1627] leading-tight mb-3">
                  {course.title}
                </h3>

                <div className="h-[1px] w-8 bg-[#BD8E89]/40 mb-4 transition-all duration-300 group-hover:w-14 group-hover:bg-[#BD8E89]" />

                <p className="text-xs text-[#7F6269]/70 font-light leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Теги */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.includes.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-[0.15em] text-[#7F6269]/60 border border-[#0E1627]/8 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Duration / Format */}
                <div className="flex items-center gap-6 pt-4 border-t border-[#0E1627]/6">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#BD8E89]/60 mb-0.5">Duration</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0E1627]">{course.duration}</p>
                  </div>
                  <div className="h-4 w-[1px] bg-[#0E1627]/10" />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#BD8E89]/60 mb-0.5">Format</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#0E1627]">{course.format}</p>
                  </div>
                  {/* Выбрать для заявки */}
                  <button
                    onClick={() => {
                      setSelectedCourse(course.title);
                      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="ml-auto text-[9px] uppercase tracking-[0.3em] text-[#BD8E89] hover:text-[#0E1627] transition-colors font-bold flex items-center gap-1.5 group/btn"
                  >
                    Apply
                    <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ФОРМА ЗАЯВКИ ── */}
      <section id="apply" className="py-16 md:py-24 bg-[#F4E1E0]/15 border-b border-[#0E1627]/8">
        <div className="container max-w-3xl mx-auto px-6 sm:px-8 lg:px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
              Enrollment
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
              Apply for a Course
            </h2>
            <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-[#0E1627]/8 p-12 md:p-16 text-center"
            >
              <div className="mx-auto mb-6 w-14 h-14 border border-[#BD8E89]/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14L11 20L23 8" stroke="#BD8E89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[9px] uppercase tracking-[0.5em] text-[#BD8E89] mb-3">Application Received</p>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#0E1627] mb-4">Thank You!</h3>
              <p className="text-sm text-[#7F6269]/60 font-light leading-relaxed max-w-sm mx-auto">
                We'll review your application and reach out within 24 hours to confirm your enrollment.
              </p>
              <div className="mt-8 h-[1px] w-10 bg-[#BD8E89]/30 mx-auto" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border border-[#0E1627]/8 p-8 md:p-12"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Name */}
                  <div className="flex flex-col">
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="First & Last name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label className={labelClass}>Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (000) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  {/* Course select */}
                  <div className="flex flex-col">
                    <label className={labelClass}>Course *</label>
                    <select
                      required
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Select a course</option>
                      {courses.map((c) => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience */}
                  <div className="md:col-span-2 flex flex-col">
                    <label className={labelClass}>Experience Level</label>
                    <div className="flex flex-wrap gap-3 pt-2">
                      {["No experience", "Some experience", "Working professional"].map((lvl) => (
                        <button
                          type="button"
                          key={lvl}
                          onClick={() => setForm({ ...form, experience: lvl })}
                          className={`px-4 py-2 text-[9px] uppercase tracking-[0.2em] border transition-all duration-200 ${
                            form.experience === lvl
                              ? "border-[#BD8E89] bg-[#BD8E89] text-white"
                              : "border-[#0E1627]/10 text-[#7F6269]/60 hover:border-[#BD8E89]/50"
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 flex flex-col">
                    <label className={labelClass}>Additional Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Any questions or special requests..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row items-center gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-[#0E1627] text-white px-14 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#BD8E89] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#7F6269]/40">
                      We'll respond within 24 hours
                    </p>
                  </div>

                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-[#0E1627]">
        <div className="container max-w-2xl mx-auto px-6 text-center">
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-6 block">
            Questions?
          </span>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-none mb-6">
            Contact Us Directly
          </h2>
          <div className="mx-auto h-[1px] w-14 bg-[#BD8E89]/40 mb-8" />
          <a
            href="tel:6282029554"
            className="inline-block text-sm font-light text-white/60 hover:text-[#BD8E89] transition-colors tracking-wide"
          >
            628-202-9554
          </a>
          <span className="mx-4 text-white/20">·</span>
          <a
            href="mailto:osakabeautyusa@gmail.com"
            className="inline-block text-sm font-light text-white/60 hover:text-[#BD8E89] transition-colors tracking-wide"
          >
            osakabeautyusa@gmail.com
          </a>
        </div>
      </section>

    </main>
  );
}
