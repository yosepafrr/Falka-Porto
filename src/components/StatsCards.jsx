import { motion } from 'framer-motion';
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal';
import { SiShopee, SiTiktok } from 'react-icons/si';
import { FiStar, FiPackage, FiShield, FiTag } from 'react-icons/fi';
import './StatsCards.css';

const stats = [
  {
    icon: <FiShield size={28} />,
    label: 'Shopee Mall',
    sublabel: 'Official Store',
    value: null,
    isBadge: true,
    iconClass: 'stats-cards__icon--shopee',
    platformIcon: <SiShopee size={16} />,
  },
  {
    icon: <FiStar size={28} />,
    label: 'Penilaian Toko',
    sublabel: 'di Shopee',
    value: 48,
    isDecimal: true,
    suffix: '/5.0',
    iconClass: 'stats-cards__icon--star-shopee',
    platformIcon: <SiShopee size={16} />,
  },
    {
    icon: <FiStar size={28} />,
    label: 'Penilaian Toko',
    sublabel: 'di TikTok Shop',
    value: 48,
    isDecimal: true,
    suffix: '/5.0',
    iconClass: 'stats-cards__icon--star-tiktok',
    platformIcon: <SiTiktok size={16} />,
  },
  {
    icon: <FiPackage size={28} />,
    label: 'Penjualan',
    sublabel: 'All Platform',
    value: 20000,
    suffix: '+',
    iconClass: 'stats-cards__icon--sales',
  },
  {
    icon: <FiTag size={28} />,
    label: 'Affordable Products',
    title: 'Worth',
    subtitle: 'Every Rupiah',
    isTextOnly: true,
    sublabel: 'dengan kualitas premium',
    iconClass: 'stats-cards__icon--affordable-products',
  }
];

function StatCard({ stat, index, isVisible }) {
  const rawCount = useCountUp(stat.value || 0, 2000, isVisible);
  const display = stat.isDecimal
    ? (rawCount / 10).toFixed(1)
    : rawCount.toLocaleString('id-ID');

  return (
    <motion.div
      className="stats-cards__card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="stats-cards__card-content">
        <div className={`stats-cards__icon ${stat.iconClass}`}>
          {stat.icon}
        </div>

        {stat.isBadge ? (
          <div className="stats-cards__badge-content">
            <div className="stats-cards__badge-title">
              <SiShopee size={20} className="shopee-icon" />
              <span>Mall</span>
            </div>
            <span className="stats-cards__verified">
              <FiShield size={12} /> Verified
            </span>
          </div>
        ) : stat.isTextOnly ? (
          <div className="stats-cards__text-content">
            <div className="stats-cards__big-title">{stat.title}</div>
            <div className="stats-cards__big-subtitle">{stat.subtitle}</div>
          </div>
        ) : (
          <div className="stats-cards__value">
            <span className="stats-cards__number">{display}</span>
            {stat.suffix && <span className="stats-cards__suffix">{stat.suffix}</span>}
          </div>
        )}

        <div>
          <span className="stats-cards__label">{stat.label}</span>
          <div className="stats-cards__sublabel">
            {stat.platformIcon && stat.platformIcon}
            <span>{stat.sublabel}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsCards() {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="stats-cards">
      <div className="container" ref={ref}>
        <div className="stats-cards__grid">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
