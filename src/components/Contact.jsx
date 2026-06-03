import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const text = `
Halooo kakk! Aku tau Falka dari Website nih, 
Namaku, ${formData.name}
${formData.message}

Terima kasih sudah membantu, ${formData.email}
`;

    const whatsappUrl =
      `https://wa.me/6281394742274?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');
};

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Hubungi Kami</h2>
          <div className="accent-line" />
          <p>Ada pertanyaan? Jangan ragu untuk menghubungi kami</p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Mari Terhubung</h3>
            <p className="contact__info-desc">
              Hubungi kami melalui WhatsApp untuk respon tercepat, atau kunjungi
              toko kami di marketplace favorit Anda.
            </p>

            <div className="contact__items">
              <a href="https://wa.me/6281394742274" target="_blank" rel="noopener noreferrer" className="contact__item">
                <div className="contact__item-icon">
                  <FiMessageCircle size={20} />
                </div>
                <div>
                  <strong>WhatsApp 1</strong>
                  <span>+62 813-9474-2274</span>
                </div>
              </a>

              <a href="https://wa.me/6281223837081" target="_blank" rel="noopener noreferrer" className="contact__item">
                <div className="contact__item-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <strong>WhatsApp 2</strong>
                  <span>+62 812-2383-7081</span>
                </div>
              </a>

              <div className="contact__item">
                <div className="contact__item-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <strong>Konveksi</strong>
                  <span>Cibeureum, Kota Tasikmalaya, Jawa Barat</span>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <h4>Temukan Kami di:</h4>
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

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__form-group">
              <label htmlFor="contact-name">Nama Lengkap</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message">Pesan</label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Tulis pesan Anda di sini..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary contact__submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? '✓ Terkirim!' : (
                <>
                  Kirim Pesan
                  <FiSend size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
