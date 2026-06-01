import { motion } from 'framer-motion';
import { FiShoppingCart, FiExternalLink, FiEye } from 'react-icons/fi';

export default function ProductCard({ product, index, onOpenModal }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="rounded-2xl overflow-hidden border transition-all duration-400 cursor-pointer group"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-primary)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onClick={() => onOpenModal?.(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-content-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <button
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-light text-white rounded-full font-semibold text-[0.85rem] hover:scale-105 transition-transform duration-300"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal?.(product);
              }}
            >
              <FiEye size={18} />
              Lihat Detail
            </button>
            <a
              href={product.shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium text-[0.8rem] hover:bg-white/30 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <FiShoppingCart size={16} />
              Beli Sekarang
            </a>
          </div>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 px-3.5 py-1.5 bg-gradient-to-br from-primary to-primary-dark text-white text-[0.7rem] font-bold uppercase tracking-wider rounded-full z-2">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col gap-2">
        <span className="text-[0.7rem] uppercase tracking-[0.1em] font-semibold" style={{ color: 'var(--color-primary)' }}>
          {product.category}
        </span>
        <h3 className="font-sans text-base font-bold leading-snug">{product.name}</h3>
        <p className="text-[0.8rem] leading-relaxed line-clamp-2" style={{ color: 'var(--text-muted)' }}>
          {product.description}
        </p>

        <div className="flex gap-1.5 mt-1">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="w-[18px] h-[18px] rounded-full border-2 transition-all duration-300 cursor-pointer hover:scale-[1.3] hover:!border-[var(--color-primary)]"
              style={{ backgroundColor: color, borderColor: 'var(--border)' }}
              title={product.colorNames[i]}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-2 pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
          <span className="font-serif text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
            {formatPrice(product.price)}
          </span>
          <a
            href={product.shopeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[0.8rem] font-semibold transition-colors duration-300 hover:!text-[var(--color-primary)]"
            style={{ color: 'var(--text-secondary)' }}
            onClick={(e) => e.stopPropagation()}
          >
            Shopee <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
