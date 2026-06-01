import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const colorSwatches = [
  { name: 'Putih', color: '#F5F5F0' },
  { name: 'Hitam', color: '#1A1A1A' },
  { name: 'Marun', color: '#6B1D2A' },
  { name: 'Navy', color: '#1B2A4A' },
  { name: 'Mahogani', color: '#4A2C1A' },
];

export default function About() {
  return (
    <section className="py-[clamp(3rem,8vw,7rem)]" style={{ background: 'var(--bg-primary)' }} id="about">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <motion.div
          className="text-center mb-[clamp(2rem,5vw,4rem)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] mb-2">Tentang Falka</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-primary to-primary-light mx-auto my-4 rounded-sm" />
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Kenali lebih dekat Falka Fashion Store — partner fashion terpercaya Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] leading-snug">
              Fashion Berkualitas Premium,
              <span style={{ color: 'var(--color-primary)' }}> Harga Terjangkau</span>
            </h3>

            <p className="leading-[1.8] text-[0.95rem]" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Falka Fashion Store</strong> berdiri sejak tahun 2020 dengan komitmen menghadirkan
              fashion formal berkualitas tinggi dengan harga yang terjangkau. Kami memiliki konveksi
              sendiri yang berlokasi di <strong style={{ color: 'var(--text-primary)' }}>Kota Tasikmalaya, Jawa Barat</strong>, memungkinkan kami
              mengontrol kualitas dari awal hingga akhir produksi.
            </p>

            <p className="leading-[1.8] text-[0.95rem]" style={{ color: 'var(--text-secondary)' }}>
              Kami menyediakan berbagai macam pakaian formal mulai dari <strong style={{ color: 'var(--text-primary)' }}>jas pria, blazer wanita,
              jas anak, tuxedo set</strong> (jas, rompi, celana), hingga <strong style={{ color: 'var(--text-primary)' }}>kemeja formal</strong> untuk
              pria dan wanita.
            </p>

            <div className="mt-2">
              <h4 className="font-sans text-[0.9rem] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Varian Warna Tersedia:
              </h4>
              <div className="flex gap-4 flex-wrap">
                {colorSwatches.map((swatch) => (
                  <div key={swatch.name} className="flex flex-col items-center gap-1.5 cursor-default group" title={swatch.name}>
                    <div
                      className="w-10 h-10 rounded-full border-[3px] transition-all duration-300 group-hover:scale-[1.15] group-hover:!border-[var(--color-primary)] group-hover:shadow-[0_0_15px_var(--color-primary-glow)]"
                      style={{ backgroundColor: swatch.color, borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
                    />
                    <span className="text-[0.7rem] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                      {swatch.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full h-[320px] rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border)', boxShadow: 'var(--shadow-md)' }}>
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
            <div
              className="flex items-center gap-3 p-4 px-5 rounded-xl border"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <FiMapPin className="text-xl flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
              <div>
                <strong className="text-[0.95rem] block">Konveksi Falka</strong>
                <p className="text-[0.8rem]" style={{ color: 'var(--text-muted)' }}>Kota Tasikmalaya, Jawa Barat</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
