"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: "manicure", label: "Signature Gel Manicure", sublabel: "Russian technique" },
  { id: "extensions", label: "Nail Extensions", sublabel: "Full set" },
  { id: "pedicure", label: "Pedicure", sublabel: "Classic & SPA" },
  { id: "spa", label: "SPA Procedures", sublabel: "Ritual & wellness" },
];

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1); // 1 = service, 2 = datetime, 3 = contact, 4 = success
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Закрытие по Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Блокировка скролла
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedService(null);
      setSelectedDate("");
      setSelectedTime(null);
      setForm({ name: "", phone: "", note: "" });
      setIsSubmitting(false);
    }, 400);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Здесь можно добавить реальный API-запрос
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setStep(4);
  };

  // Минимальная дата — сегодня
  const today = new Date().toISOString().split("T")[0];

  const serviceName = services.find((s) => s.id === selectedService)?.label;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-navy/70 backdrop-blur-sm"
            onClick={resetAndClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-lg bg-white overflow-hidden shadow-2xl">

              {/* Декоративная полоса сверху */}
              <div className="h-[3px] w-full bg-gradient-to-r from-prune via-mauve to-blush" />

              {/* ШАПКА */}
              <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-stroke">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-mauve mb-1">
                    Osaka Beauty House
                  </p>
                  <h2 className="text-xl font-light uppercase tracking-[0.2em] text-navy">
                    Book Appointment
                  </h2>
                </div>

                {/* Кнопка закрытия */}
                <button
                  onClick={resetAndClose}
                  className="group mt-1 flex h-8 w-8 items-center justify-center border border-stroke text-prune/40 transition-all hover:border-prune hover:text-prune"
                  aria-label="Close"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>

              {/* ПРОГРЕСС */}
              {step < 4 && (
                <div className="flex px-8 pt-5 gap-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex-1 flex flex-col gap-1.5">
                      <div className={`h-[2px] w-full transition-all duration-500 ${
                        step >= s ? "bg-mauve" : "bg-stroke"
                      }`} />
                      <span className={`text-[8px] uppercase tracking-[0.2em] transition-colors ${
                        step >= s ? "text-prune" : "text-prune/30"
                      }`}>
                        {s === 1 ? "Service" : s === 2 ? "Date & Time" : "Your Info"}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* КОНТЕНТ */}
              <div className="px-8 py-6 min-h-[320px]">
                <AnimatePresence mode="wait">

                  {/* ШАГ 1 — ВЫБОР УСЛУГИ */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.3em] text-prune/60 mb-5">
                        Select a service
                      </p>
                      <div className="space-y-2">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={`w-full flex items-center justify-between px-5 py-4 border transition-all duration-200 text-left group ${
                              selectedService === service.id
                                ? "border-mauve bg-blush/40"
                                : "border-stroke hover:border-mauve/50 hover:bg-blush/20"
                            }`}
                          >
                            <div>
                              <p className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${
                                selectedService === service.id ? "text-navy" : "text-prune group-hover:text-navy"
                              }`}>
                                {service.label}
                              </p>
                              <p className="text-[9px] tracking-[0.1em] text-prune/50 mt-0.5">
                                {service.sublabel}
                              </p>
                            </div>
                            {/* Чекбокс */}
                            <div className={`w-4 h-4 border flex items-center justify-center transition-all ${
                              selectedService === service.id
                                ? "border-mauve bg-mauve"
                                : "border-stroke"
                            }`}>
                              {selectedService === service.id && (
                                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                  <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                                </svg>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* ШАГ 2 — ДАТА И ВРЕМЯ */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Выбранная услуга */}
                      <div className="mb-5 flex items-center gap-2">
                        <span className="h-[1px] w-4 bg-mauve" />
                        <span className="text-[9px] uppercase tracking-[0.3em] text-mauve">{serviceName}</span>
                      </div>

                      {/* Дата */}
                      <div className="mb-5">
                        <label className="block text-[9px] uppercase tracking-[0.3em] text-prune/60 mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          min={today}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full border border-stroke px-4 py-3 text-[11px] text-navy tracking-[0.1em] outline-none focus:border-mauve transition-colors bg-white"
                        />
                      </div>

                      {/* Время */}
                      <div>
                        <label className="block text-[9px] uppercase tracking-[0.3em] text-prune/60 mb-2">
                          Time
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`py-2.5 text-[10px] tracking-[0.15em] border transition-all ${
                                selectedTime === time
                                  ? "border-mauve bg-blush/40 text-navy"
                                  : "border-stroke text-prune/60 hover:border-mauve/40 hover:text-prune"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ШАГ 3 — КОНТАКТЫ */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Резюме */}
                      <div className="mb-6 p-4 bg-blush/30 border border-mauve/20">
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-prune/50">Service</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-navy">{serviceName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-prune/50">Date</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-navy">
                              {new Date(selectedDate + "T00:00:00").toLocaleDateString("en-US", {
                                month: "short", day: "numeric", year: "numeric"
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[9px] uppercase tracking-[0.2em] text-prune/50">Time</span>
                            <span className="text-[9px] uppercase tracking-[0.2em] text-navy">{selectedTime}</span>
                          </div>
                        </div>
                      </div>

                      {/* Форма */}
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.3em] text-prune/60 mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            placeholder="First & Last name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-stroke px-4 py-3 text-[11px] text-navy tracking-[0.1em] outline-none focus:border-mauve transition-colors placeholder:text-prune/30 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.3em] text-prune/60 mb-1.5">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (000) 000-0000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full border border-stroke px-4 py-3 text-[11px] text-navy tracking-[0.1em] outline-none focus:border-mauve transition-colors placeholder:text-prune/30 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] uppercase tracking-[0.3em] text-prune/60 mb-1.5">
                            Note (optional)
                          </label>
                          <textarea
                            placeholder="Any preferences or requests..."
                            rows={2}
                            value={form.note}
                            onChange={(e) => setForm({ ...form, note: e.target.value })}
                            className="w-full border border-stroke px-4 py-3 text-[11px] text-navy tracking-[0.1em] outline-none focus:border-mauve transition-colors placeholder:text-prune/30 bg-white resize-none"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* ШАГ 4 — УСПЕХ */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      {/* Иконка */}
                      <div className="mb-6 w-16 h-16 border border-mauve/30 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M5 14L11 20L23 8" stroke="#BD8E89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-[9px] uppercase tracking-[0.5em] text-mauve mb-3">
                        Confirmed
                      </p>
                      <h3 className="text-xl font-light uppercase tracking-[0.2em] text-navy mb-3">
                        See you soon
                      </h3>
                      <p className="text-[10px] tracking-[0.1em] text-prune/60 max-w-xs leading-relaxed">
                        We'll send a confirmation to your phone. If you need to reschedule, please call us.
                      </p>
                      <div className="mt-6 h-[1px] w-12 bg-mauve/30" />
                      <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-prune/40">
                        Osaka Beauty House · River North
                      </p>
                      <button
                        onClick={resetAndClose}
                        className="mt-8 text-[9px] uppercase tracking-[0.4em] text-prune/50 hover:text-prune transition-colors border-b border-prune/20 pb-0.5"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* КНОПКИ НАВИГАЦИИ */}
              {step < 4 && (
                <div className="flex items-center justify-between px-8 pb-8 pt-2">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-[9px] uppercase tracking-[0.3em] text-prune/50 hover:text-prune transition-colors flex items-center gap-2"
                    >
                      <svg width="16" height="8" viewBox="0 0 20 10" fill="none">
                        <path d="M20 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 && (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={
                        (step === 1 && !selectedService) ||
                        (step === 2 && (!selectedDate || !selectedTime))
                      }
                      className="bg-navy px-8 py-3 text-[9px] uppercase tracking-[0.4em] text-white transition-all hover:bg-prune disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  )}

                  {step === 3 && (
                    <button
                      onClick={handleSubmit}
                      disabled={!form.name || !form.phone || isSubmitting}
                      className="bg-navy px-8 py-3 text-[9px] uppercase tracking-[0.4em] text-white transition-all hover:bg-prune disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3 h-3 border border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Confirm"
                      )}
                    </button>
                  )}
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
