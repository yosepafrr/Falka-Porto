import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiPhone, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-[clamp(3rem,8vw,7rem)]" style={{ background: 'var(--bg-primary)' }} id="contact">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <motion.div
          className="text-center mb-[clamp(2rem,5vw,4rem)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] mb-2">Hubungi Kami</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-primary to-primary-light mx-auto my-4 rounded-sm" />
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ada pertanyaan? Jangan ragu untuk menghubungi kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)]">Mari Terhubung</h3>
            <p className="text-[0.95rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Hubungi kami melalui WhatsApp untuk respon tercepat, atau kunjungi
              toko kami di marketplace favorit Anda.
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  href: 'https://wa.me/6281394742274',
                  icon: <FiMessageCircle size={20} />,
                  title: 'WhatsApp 1',
                  subtitle: '+62 813-9474-2274',
                  isLink: true,
                },
                {
                  href: 'https://wa.me/6282130071701',
                  icon: <FiPhone size={20} />,
                  title: 'WhatsApp 2',
                  subtitle: '+62 821-3007-1701',
                  isLink: true,
                },
                {
                  icon: <FiMapPin size={20} />,
                  title: 'Konveksi',
                  subtitle: 'Kota Tasikmalaya, Jawa Barat',
                  isLink: false,
                },
              ].map((item, i) => {
                const content = (
                  <>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <strong className="text-[0.9rem] block font-sans">{item.title}</strong>
                      <span className="text-[0.8rem]" style={{ color: 'var(--text-muted)' }}>{item.subtitle}</span>
                    </div>
                  </>
                );
                const className = `flex items-center gap-4 p-4 px-5 rounded-[14px] border transition-all duration-300 ${item.isLink ? 'cursor-pointer hover:translate-x-1.5 hover:!border-[var(--color-primary)]' : 'cursor-default'}`;

                return item.isLink ? (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className={className} style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="font-sans text-[0.9rem] font-semibold mb-3">Temukan Kami di:</h4>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://shopee.co.id/falka.fs#product_list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-[0.85rem] font-semibold text-white bg-gradient-to-r from-[#EE4D2D] to-[#FF6633] shadow-[0_4px_15px_rgba(238,77,45,0.3)] hover:shadow-[0_8px_25px_rgba(238,77,45,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <SiShopee size={20} />
                  <span>Shopee</span>
                </a>
                <a
                  href="https://vt.tiktok.com/ZSxc13HXf/?page=Mall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-[0.85rem] font-semibold text-white bg-gradient-to-r from-[#010101] to-[#333] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  <SiTiktok size={20} />
                  <span>TikTok Shop</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="flex flex-col gap-5 p-10 sm:p-10 p-6 rounded-3xl border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { label: 'Nama Lengkap', id: 'contact-name', type: 'text', placeholder: 'Masukkan nama Anda', field: 'name' },
              { label: 'Email', id: 'contact-email', type: 'email', placeholder: 'email@example.com', field: 'email' },
            ].map((input) => (
              <div key={input.id} className="flex flex-col gap-2">
                <label htmlFor={input.id} className="text-[0.85rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {input.label}
                </label>
                <input
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  value={formData[input.field]}
                  onChange={e => setFormData({...formData, [input.field]: e.target.value})}
                  required
                  className="py-3.5 px-5 rounded-xl text-[0.9rem] border transition-all duration-300 focus:!border-[var(--color-primary)] focus:shadow-[0_0_0_3px_var(--color-primary-glow)]"
                  style={{
                    background: 'var(--bg-input)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-[0.85rem] font-semibold" style={{ color: 'var(--text-primary)' }}>
                Pesan
              </label>
              <textarea
                id="contact-message"
                rows="5"
                placeholder="Tulis pesan Anda di sini..."
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
                className="py-3.5 px-5 rounded-xl text-[0.9rem] border resize-y min-h-[120px] transition-all duration-300 focus:!border-[var(--color-primary)] focus:shadow-[0_0_0_3px_var(--color-primary-glow)]"
                style={{
                  background: 'var(--bg-input)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 rounded-full font-semibold text-base text-white bg-gradient-to-br from-primary to-primary-light shadow-[0_4px_20px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-primary-glow)] transition-all duration-300 flex items-center justify-center gap-2"
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
