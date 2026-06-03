import { motion } from 'framer-motion';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import heroImg from '../assets/images/hero-suit.png';
import mainImg from '../assets/images/main-image.png';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-effects">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__inner container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ✨ Premium Fashion Since 2020
          </motion.span>

          <h1 className="hero__title">
            Elevate Your
            <span className="hero__title-accent"> Style</span>
            <br />
            With Falka
          </h1>

          <p className="hero__subtitle">
            Jas, blazer, tuxedo & kemeja berkualitas premium untuk pria, wanita, dan anak.
            Tampil elegan di setiap momen spesial Anda.
          </p>

          <div className="hero__buttons">
            <motion.a
              href="#katalog"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#katalog')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Katalog
              <FiArrowRight size={18} />
            </motion.a>

            <motion.a
              href="https://shopee.co.id/falka.fs#product_list"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiShoppingBag size={18} />
              Shop di Shopee
            </motion.a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">5+</span>
              <span className="hero__stat-label">Tahun Pengalaman</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">20K+</span>
              <span className="hero__stat-label">Produk Terjual</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">4.8</span>
              <span className="hero__stat-label">Rating All Toko</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__image"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero__image-glow" />
          <motion.img
            src={mainImg}
            alt="Falka Fashion Store - Premium Suit"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="hero__image-badge">
            <span className="hero__image-badge-price">Mulai dari</span>
            <span className="hero__image-badge-amount">Rp 169K</span>
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <div className="hero__scroll-line" />
        </motion.div>
      </div>
    </section>
  );
}
