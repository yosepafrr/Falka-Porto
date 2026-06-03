import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const ITEMS_PER_PAGE = 3;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '30%' : direction < 0 ? '-30%' : 0,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '30%' : direction > 0 ? '-30%' : 0,
    opacity: 0,
    scale: 0.98,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const totalPages = Math.ceil(
    testimonials.length / ITEMS_PER_PAGE
  );

  const next = useCallback(() => {
    setPage(([prevPage]) => {
      const nextPage = (prevPage + 1) % totalPages;
      return [nextPage, 1];
    });
  }, [totalPages]);

  const prev = () => {
    setPage(([prevPage]) => {
      const nextPage = (prevPage - 1 + totalPages) % totalPages;
      return [nextPage, -1];
    });
  };

  const handleDotClick = (index) => {
    setPage(([prevPage]) => {
      if (index === prevPage) return [prevPage, 0];
      return [index, index > prevPage ? 1 : -1];
    });
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);

    return () => clearInterval(timer);
  }, [page, next]);

  const visibleTestimonials = testimonials.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Apa Kata Mereka?</h2>
          <div className="accent-line" />
          <p>Testimoni dari pelanggan setia Falka Fashion Store</p>
        </motion.div>

        <div className="testimonials__carousel">
          <button
            className="testimonials__nav testimonials__nav--prev"
            onClick={prev}
            aria-label="Previous"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="testimonials__content">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'tween', duration: 0.6, ease: [0.25, 1, 0.5, 1] },
                  opacity: { duration: 0.45, ease: 'easeOut' },
                  scale: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
                }}
                className="testimonials__cards"
              >
                {visibleTestimonials.map((t, index) => (
                  <div
                    key={index}
                    className="testimonials__card"
                  >
                    <div className="testimonials__quote">
                      "
                    </div>

                    <p className="testimonials__text">
                      {t.text}
                    </p>

                    <div className="testimonials__rating">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          size={18}
                          className={
                            i < t.rating
                              ? 'testimonials__star--filled'
                              : 'testimonials__star--empty'
                          }
                        />
                      ))}
                    </div>

                    <div className="testimonials__author">
                      <div className="testimonials__avatar">
                        {t.avatar}
                      </div>

                      <div>
                        <strong className="testimonials__name">
                          {t.name}
                        </strong>

                        <span className="testimonials__role">
                          {t.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="testimonials__nav testimonials__nav--next"
            onClick={next}
            aria-label="Next"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="testimonials__dots">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${
                i === page
                  ? 'testimonials__dot--active'
                  : ''
              }`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}