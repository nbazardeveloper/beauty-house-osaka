"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 md:py-24 border-t border-[#0E1627]/8">
      <div className="container max-w-3xl mx-auto px-6 sm:px-8 lg:px-4">

        {/* ── ШАПКА ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 border-b border-[#0E1627]/8 pb-10"
        >
          <span className="text-[#BD8E89] text-[10px] uppercase tracking-[0.5em] font-bold mb-4 block">
            Reach Out
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0E1627] leading-none">
            Get in Touch
          </h2>
          <div className="mt-6 mx-auto h-[1px] w-14 bg-[#BD8E89]/40" />
        </motion.div>

        {/* ── ФОРМА ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-[#F4E1E0]/20 border border-[#0E1627]/8 p-8 md:p-12"
        >
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Name */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-b border-[#0E1627]/10 py-3 text-sm outline-none focus:border-[#BD8E89] transition-colors text-[#0E1627] placeholder:text-[#7F6269]/30"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-b border-[#0E1627]/10 py-3 text-sm outline-none focus:border-[#BD8E89] transition-colors text-[#0E1627] placeholder:text-[#7F6269]/30"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  className="bg-transparent border-b border-[#0E1627]/10 py-3 text-sm outline-none focus:border-[#BD8E89] transition-colors text-[#0E1627] placeholder:text-[#7F6269]/30"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="bg-transparent border-b border-[#0E1627]/10 py-3 text-sm outline-none focus:border-[#BD8E89] transition-colors text-[#0E1627] placeholder:text-[#7F6269]/30"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex flex-col">
                <label className="text-[9px] uppercase tracking-[0.4em] text-[#BD8E89] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more..."
                  className="bg-transparent border-b border-[#0E1627]/10 py-3 text-sm outline-none focus:border-[#BD8E89] transition-colors text-[#0E1627] placeholder:text-[#7F6269]/30 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#7f6269] text-white px-14 py-4 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#BD8E89] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>

            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;