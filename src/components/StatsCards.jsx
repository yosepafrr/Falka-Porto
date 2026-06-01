import { motion } from 'framer-motion';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import { SiShopee, SiTiktok } from 'react-icons/si';
import { FiStar, FiPackage, FiShield } from 'react-icons/fi';

const stats = [
  {
    icon: <FiShield size={28} />,
    label: 'Shopee Mall',
    sublabel: 'Official Store',
    value: null,
    isBadge: true,
    gradient: 'from-[#EE4D2D] to-[#FF6633]',
    iconBg: 'bg-gradient-to-br from-[#EE4D2D] to-[#FF6633]',
    platformIcon: <SiShopee size={16} />,
  },
  {
    icon: <FiStar size={28} />,
    label: 'Penilaian Toko',
    sublabel: 'di Shopee',
    value: 48,
    isDecimal: true,
    suffix: '/5.0',
    gradient: 'from-[#EE4D2D] to-[#FF8A50]',
    iconBg: 'bg-gradient-to-br from-amber-400 to-amber-500',
    platformIcon: <SiShopee size={16} />,
  },
  {
    icon: <FiPackage size={28} />,
    label: 'Penjualan',
    sublabel: 'All Platform',
    value: 20000,
    suffix: '+',
    gradient: 'from-primary to-primary-light',
    iconBg: 'bg-gradient-to-br from-primary to-primary-light',
  },
  {
    icon: <FiStar size={28} />,
    label: 'Penilaian Toko',
    sublabel: 'di TikTok Shop',
    value: 48,
    isDecimal: true,
    suffix: '/5.0',
    gradient: 'from-[#010101] to-[#333]',
    iconBg: 'bg-gradient-to-br from-pink-500 to-violet-500',
    platformIcon: <SiTiktok size={16} />,
  },
];

function StatCard({ stat, index, isVisible }) {
  const rawCount = useCountUp(stat.value || 0, 2000, isVisible);
  const display = stat.isDecimal
    ? (rawCount / 10).toFixed(1)
    : rawCount.toLocaleString('id-ID');

  return (
    <motion.div
      className="relative group rounded-2xl p-6 border transition-all duration-400 hover:-translate-y-2 cursor-default overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-400 bg-gradient-to-br ${stat.iconBg}`} />

      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} text-white flex items-center justify-center shadow-lg`}>
          {stat.icon}
        </div>

        {stat.isBadge ? (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <SiShopee size={20} className="text-[#EE4D2D]" />
              <span className="font-serif text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Mall
              </span>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-gradient-to-r from-[#EE4D2D] to-[#FF6633] text-white">
              <FiShield size={12} /> Verified
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {display}
              </span>
              {stat.suffix && (
                <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  {stat.suffix}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-0.5">
          <span className="text-[0.8rem] font-semibold" style={{ color: 'var(--text-secondary)' }}>
            {stat.label}
          </span>
          <div className="flex items-center gap-1.5">
            {stat.platformIcon && (
              <span style={{ color: 'var(--text-muted)' }}>{stat.platformIcon}</span>
            )}
            <span className="text-[0.7rem]" style={{ color: 'var(--text-muted)' }}>
              {stat.sublabel}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCards() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-[clamp(2rem,5vw,4rem)]" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
