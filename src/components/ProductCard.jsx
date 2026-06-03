import { motion } from 'framer-motion';
import { FiShoppingCart, FiExternalLink, FiEye } from 'react-icons/fi';
import './ProductCard.css';

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
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      onClick={() => onOpenModal?.(product)}
    >
      <div className="product-card__image-wrapper">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <div className="product-card__overlay">
          <div className="product-card__overlay-actions">
            <button
              className="product-card__detail-btn"
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
              className="product-card__quick-buy"
              onClick={(e) => e.stopPropagation()}
            >
              <FiShoppingCart size={16} />
              Beli Sekarang
            </a>
          </div>
        </div>
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>

      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__colors">
          {product.colors.map((color, i) => (
            <div
              key={i}
              className="product-card__color-dot"
              style={{ backgroundColor: color }}
              title={product.colorNames[i]}
            />
          ))}
        </div>

        <div className="product-card__footer">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <a
            href={product.shopeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card__link"
            onClick={(e) => e.stopPropagation()}
          >
            Shopee <FiExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
