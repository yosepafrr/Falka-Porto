import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';
import './About.css';

const colorSwatches = [
  { name: 'Putih', color: '#F5F5F0' },
  { name: 'Hitam', color: '#1A1A1A' },
  { name: 'Marun', color: '#6B1D2A' },
  { name: 'Navy', color: '#1B2A4A' },
  { name: 'Mahogani', color: '#4A2C1A' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Tentang Falka</h2>
          <div className="accent-line" />
          <p>Kenali lebih dekat Falka Fashion Store - partner fashion terpercaya Anda</p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="about__subtitle">
              Fashion Berkualitas Premium,
              <span className="about__subtitle-accent"> Harga Terjangkau</span>
            </h3>

            <p className="about__text">
              <strong>Falka Fashion Store</strong> berdiri sejak tahun 2020 dengan komitmen menghadirkan
              fashion formal berkualitas tinggi dengan harga yang terjangkau. Kami memiliki konveksi
              sendiri yang berlokasi di <strong>Kota Tasikmalaya, Jawa Barat</strong>, memungkinkan kami
              mengontrol kualitas dari awal hingga akhir produksi.
            </p>

            <p className="about__text">
              Kami menyediakan berbagai macam pakaian formal mulai dari <strong>jas pria, blazer wanita,
              jas anak, tuxedo set</strong> (jas, rompi, celana), hingga <strong>kemeja formal</strong> untuk
              pria dan wanita.
            </p>
            <div className="contact__social">
              <h4>We're available on:</h4>
              <div className="contact__social-links">
                <a
                  href="https://shopee.co.id/falka.fs#product_list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link contact__social-link--shopee"
                            >
                              <SiShopee size={20} />
                              <span>Shopee</span>
                            </a>
                            <a
                              href="https://www.tiktok.com/@falka.fs?lang=id-ID"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="contact__social-link contact__social-link--tiktok"
                            >
                              <SiTiktok size={20} />
                              <span>TikTok Shop</span>
                            </a>
                          </div>
                        </div>
          </motion.div>

          <motion.div
            className="about__map"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="about__map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m11!1m3!1d3!2d108.2689358!3d-7.365017499999999!2m2!1f0!2f90!3m2!1i1024!2i768!4f75!3m3!1m2!1s0x2e6f5972477f261d%3A0x9ed61d763963086c!2sKonveksi%20Falka!4v1780330961286"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Konveksi Falka - Tasikmalaya"
              />
            </div>
            <div className="about__map-info">
              <FiMapPin className="about__map-icon" />
              <div>
                <strong>Konveksi Falka</strong>
                <p>Kota Tasikmalaya, Jawa Barat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
