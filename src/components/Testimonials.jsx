import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[current];

  return (
    <section className="py-[clamp(3rem,8vw,7rem)] relative overflow-hidden" style={{ background: 'var(--section-alt)' }} id="testimoni">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <motion.div
          className="text-center mb-[clamp(2rem,5vw,4rem)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] mb-2">Apa Kata Mereka?</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-primary to-primary-light mx-auto my-4 rounded-sm" />
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Testimoni dari pelanggan setia Falka Fashion Store
          </p>
        </motion.div>

        <div
          className="flex items-center gap-6 max-w-[800px] mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            className="hidden md:flex w-12 h-12 rounded-full items-center justify-center border flex-shrink-0 transition-all duration-300 hover:!bg-[var(--color-primary)] hover:text-white hover:!border-[var(--color-primary)] hover:scale-110 cursor-pointer"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onClick={prev}
            aria-label="Previous"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex-1 overflow-hidden min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="w-full text-center p-10 sm:p-10 p-6 rounded-3xl border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  boxShadow: 'var(--shadow-md)',
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="font-serif text-7xl leading-none opacity-40" style={{ color: 'var(--color-primary)' }}>
                  "
                </div>
                <p className="text-[1.05rem] leading-relaxed italic mb-6 -mt-4" style={{ color: 'var(--text-secondary)' }}>
                  {t.text}
                </p>
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={18}
                      className={i < t.rating ? 'fill-amber-400 text-amber-400' : ''}
                      style={i >= t.rating ? { color: 'var(--border)' } : {}}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl border-2"
                    style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
                  >
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <strong className="text-[0.95rem] block">{t.name}</strong>
                    <span className="text-[0.75rem] block" style={{ color: 'var(--text-muted)' }}>{t.role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="hidden md:flex w-12 h-12 rounded-full items-center justify-center border flex-shrink-0 transition-all duration-300 hover:!bg-[var(--color-primary)] hover:text-white hover:!border-[var(--color-primary)] hover:scale-110 cursor-pointer"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            onClick={next}
            aria-label="Next"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${
                i === current ? 'w-[30px]' : 'w-2.5'
              }`}
              style={{
                background: i === current ? 'var(--color-primary)' : 'var(--border)',
              }}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
