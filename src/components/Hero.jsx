import { motion } from 'framer-motion';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import heroImg from '../assets/images/hero-suit.png';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
      style={{ background: 'var(--hero-gradient)' }}
      id="home"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-30 -top-[15%] -right-[10%] animate-[float_8s_ease-in-out_infinite]"
          style={{ background: 'var(--color-primary)' }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-30 bottom-[10%] -left-[5%] animate-[float_6s_ease-in-out_infinite_reverse]"
          style={{ background: 'var(--color-accent)' }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full blur-[100px] opacity-30 top-[40%] left-[30%] animate-[float_10s_ease-in-out_infinite]"
          style={{ background: 'var(--color-primary-dark)' }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-2">
        <motion.div
          className="flex flex-col gap-6 lg:text-left text-center lg:items-start items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.8rem] font-medium w-fit border"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border)',
              color: 'var(--color-primary-light)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            ✨ Premium Fashion Since 2020
          </motion.span>

          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
            Elevate Your
            <span className="bg-gradient-to-br from-primary via-primary-light to-accent bg-clip-text text-transparent"> Style</span>
            <br />
            With Falka
          </h1>

          <p className="text-[clamp(1rem,1.5vw,1.15rem)] max-w-[500px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Jas, blazer, tuxedo & kemeja berkualitas premium untuk pria, wanita, dan anak.
            Tampil elegan di setiap momen spesial Anda.
          </p>

          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <motion.a
              href="#katalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] tracking-wide text-white bg-gradient-to-br from-primary to-primary-light shadow-[0_4px_20px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-primary-glow)] transition-all duration-300 relative overflow-hidden"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] tracking-wide border-2 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <FiShoppingBag size={18} />
              Shop di Shopee
            </motion.a>
          </div>

          <div className="flex items-center gap-6 mt-4 pt-6 border-t justify-center lg:justify-start" style={{ borderColor: 'var(--border)' }}>
            {[
              { number: '5+', label: 'Tahun Pengalaman' },
              { number: '10K+', label: 'Produk Terjual' },
              { number: '4.9', label: 'Rating Toko' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-10" style={{ background: 'var(--border)' }} />}
                <div className="flex flex-col gap-0.5">
                  <span className="font-serif text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    {stat.number}
                  </span>
                  <span className="text-[0.75rem] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center lg:order-none order-first"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          <div
            className="absolute w-[350px] h-[350px] rounded-full z-[1]"
            style={{ background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)' }}
          />
          <motion.img
            src={heroImg}
            alt="Falka Fashion Store - Premium Suit"
            className="max-h-[550px] lg:max-h-[550px] md:max-h-[400px] max-h-[300px] w-auto object-contain relative z-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div
            className="absolute bottom-[50px] right-[10px] rounded-2xl px-5 py-3 flex flex-col items-center z-[3] border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <span className="text-[0.7rem] uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Mulai dari
            </span>
            <span className="font-serif text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
              Rp 99K
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-2 hidden md:flex">
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-[0.7rem] uppercase tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
            Scroll Down
          </span>
          <div className="w-px h-[30px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
