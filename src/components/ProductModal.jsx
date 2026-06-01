import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';

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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: 'var(--shadow-lg)',
          }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:!border-[var(--color-primary)] hover:!text-[var(--color-primary)]"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            <FiX size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="relative p-6 md:p-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-all duration-200"
                      onClick={() => setCurrentImage(prev => (prev - 1 + images.length) % images.length)}
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 transition-all duration-200"
                      onClick={() => setCurrentImage(prev => (prev + 1) % images.length)}
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </>
                )}

                {product.badge && (
                  <span className="absolute top-3 left-3 px-3.5 py-1.5 bg-gradient-to-br from-primary to-primary-dark text-white text-[0.7rem] font-bold uppercase tracking-wider rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-3 justify-center">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      className={`w-16 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        i === currentImage ? '!border-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary-glow)]' : ''
                      }`}
                      style={{
                        borderColor: i === currentImage ? 'var(--color-primary)' : 'var(--border)',
                        opacity: i === currentImage ? 1 : 0.6,
                      }}
                      onClick={() => setCurrentImage(i)}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-6 md:p-8 md:pl-2 flex flex-col gap-5 overflow-y-auto">
              <div>
                <span className="text-[0.75rem] uppercase tracking-[0.1em] font-semibold" style={{ color: 'var(--color-primary)' }}>
                  {product.category}
                </span>
                <h2 className="font-serif text-2xl font-bold mt-1">{product.name}</h2>
              </div>

              <p className="text-[0.9rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {product.description}
              </p>

              {/* Color Options */}
              <div>
                <h4 className="font-sans text-[0.85rem] font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Warna Tersedia
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color, i) => (
                    <div key={i} className="flex items-center gap-2 group cursor-default">
                      <div
                        className="w-6 h-6 rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-hover:!border-[var(--color-primary)]"
                        style={{ backgroundColor: color, borderColor: 'var(--border)' }}
                      />
                      <span className="text-[0.8rem]" style={{ color: 'var(--text-secondary)' }}>
                        {product.colorNames[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variants & Prices */}
              {product.variants && product.variants.length > 0 && (
                <div>
                  <h4 className="font-sans text-[0.85rem] font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Pilih Ukuran
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, i) => (
                      <button
                        key={i}
                        className={`px-4 py-2.5 rounded-xl text-[0.8rem] font-medium border transition-all duration-300 ${
                          i === selectedVariant
                            ? 'bg-gradient-to-br from-primary to-primary-light text-white border-transparent shadow-[0_4px_15px_var(--color-primary-glow)]'
                            : 'hover:!border-[var(--color-primary)] hover:!text-[var(--color-primary)]'
                        }`}
                        style={i !== selectedVariant ? {
                          background: 'var(--bg-elevated)',
                          borderColor: 'var(--border)',
                          color: 'var(--text-secondary)',
                        } : {}}
                        onClick={() => setSelectedVariant(i)}
                      >
                        <span className="block font-semibold">{variant.name}</span>
                        <span className={`block text-[0.7rem] mt-0.5 ${i === selectedVariant ? 'text-white/80' : ''}`}
                          style={i !== selectedVariant ? { color: 'var(--text-muted)' } : {}}
                        >
                          {formatPrice(variant.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price display */}
              <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[0.75rem]" style={{ color: 'var(--text-muted)' }}>Harga</span>
                <div className="font-serif text-3xl font-bold mt-1" style={{ color: 'var(--color-primary)' }}>
                  {formatPrice(product.variants?.[selectedVariant]?.price || product.price)}
                </div>
              </div>

              {/* Marketplace Links */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={product.shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-[0.9rem] text-white bg-gradient-to-r from-[#EE4D2D] to-[#FF6633] shadow-[0_4px_15px_rgba(238,77,45,0.3)] hover:shadow-[0_8px_25px_rgba(238,77,45,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <SiShopee size={20} />
                  Beli di Shopee
                  <FiExternalLink size={14} />
                </a>
                <a
                  href={product.tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-[0.9rem] text-white bg-gradient-to-r from-[#010101] to-[#333] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 transition-all duration-300"
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
