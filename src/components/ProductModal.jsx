import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';
import './ProductModal.css';

export default function ProductModal({ product, imageMap, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const images = (product?.images || [product?.image]).map(key => imageMap[key]).filter(Boolean);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') setCurrentImage(prev => (prev - 1 + images.length) % images.length);
    if (e.key === 'ArrowRight') setCurrentImage(prev => (prev + 1) % images.length);
  }, [onClose, images.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-backdrop__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <button className="modal__close" onClick={onClose}>
            <FiX size={20} />
          </button>

          <div className="modal__grid">
            {/* Image Gallery */}
            <div className="modal__gallery">
              <div className="modal__gallery-main">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt={product.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      className="modal__gallery-nav modal__gallery-nav--prev"
                      onClick={() => setCurrentImage(prev => (prev - 1 + images.length) % images.length)}
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      className="modal__gallery-nav modal__gallery-nav--next"
                      onClick={() => setCurrentImage(prev => (prev + 1) % images.length)}
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </>
                )}

                {product.badge && (
                  <span className="modal__gallery-badge">{product.badge}</span>
                )}
              </div>

              {images.length > 1 && (
                <div className="modal__thumbnails">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      className={`modal__thumbnail ${i === currentImage ? 'modal__thumbnail--active' : ''}`}
                      onClick={() => setCurrentImage(i)}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="modal__details">
              <div>
                <span className="modal__category">{product.category}</span>
                <h2 className="modal__title">{product.name}</h2>
              </div>

              <p className="modal__description">{product.description}</p>

              {/* Color Options */}
              <div>
                <h4 className="modal__colors-title">Best seller colors:</h4>
                <div className="modal__color-list">
                  {product.colors.map((color, i) => (
                    <div key={i} className="modal__color-item">
                      <div className="modal__color-dot" style={{ backgroundColor: color }} />
                      <span className="modal__color-name">{product.colorNames[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variants & Prices */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h4 className="modal__variants-title">Tersedia varian:</h4>
                  <div className="modal__variant-list">
                    {product.variants.map((variant, i) => (
                      <button
                        key={i}
                        className={`modal__variant-btn ${i === selectedVariant ? 'modal__variant-btn--active' : ''}`}
                        onClick={() => setSelectedVariant(i)}
                      >
                        <span className="modal__variant-name">{variant.name}</span>
                        <span className="modal__variant-price">{formatPrice(variant.price)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price display */}
              <div className="modal__price-section">
                <span className="modal__price-label">Harga</span>
                <div className="modal__price-value">
                  {formatPrice(product.variants?.[selectedVariant]?.price || product.price)}
                </div>
              </div>

              {/* Marketplace Links */}
              <div className="modal__marketplace">
                <a
                  href={product.shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__marketplace-link modal__marketplace-link--shopee"
                >
                  <SiShopee size={20} />
                  Beli di Shopee
                  <FiExternalLink size={14} />
                </a>
                <a
                  href={product.tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal__marketplace-link modal__marketplace-link--tiktok"
                >
                  <SiTiktok size={20} />
                  Beli di TikTok
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
