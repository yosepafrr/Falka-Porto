import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { imageMap } from '../components/CatalogPreview';

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [modalProduct, setModalProduct] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProducts = useMemo(() => {
    const mapped = products.map(p => ({
      ...p,
      imageUrl: imageMap[p.image] || imageMap['jas-pria-formal'],
    }));
    if (activeCategory === 'Semua') return mapped;
    return mapped.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-24 pb-16" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        {/* Breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 text-[0.85rem] mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/"
            className="flex items-center gap-1 transition-colors duration-300 hover:!text-[var(--color-primary)]"
            style={{ color: 'var(--text-muted)' }}
          >
            <FiHome size={14} />
            Home
          </Link>
          <FiChevronRight size={14} style={{ color: 'var(--text-muted)' }} />
          <span style={{ color: 'var(--text-primary)' }} className="font-medium">Katalog</span>
        </motion.nav>

        {/* Header */}
        <motion.div
          className="text-center mb-[clamp(2rem,5vw,4rem)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] mb-2">Katalog Produk</h1>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-primary to-primary-light mx-auto my-4 rounded-sm" />
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Temukan koleksi lengkap fashion formal terbaik untuk setiap momen spesial Anda
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex justify-center gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2.5 rounded-full text-[0.85rem] font-medium border cursor-pointer transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-br from-primary to-primary-light text-white border-transparent shadow-[0_4px_15px_var(--color-primary-glow)]'
                  : 'hover:!border-[var(--color-primary)] hover:!text-[var(--color-primary)]'
              }`}
              style={activeCategory !== cat ? {
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
              } : {}}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[0.85rem]" style={{ color: 'var(--text-muted)' }}>
            Menampilkan <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{filteredProducts.length}</span> produk
            {activeCategory !== 'Semua' && (
              <> dalam kategori <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>{activeCategory}</span></>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProducts.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                index={i}
                onOpenModal={setModalProduct}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
              Tidak ada produk dalam kategori ini.
            </p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {modalProduct && (
          <ProductModal
            product={{ ...modalProduct, imageUrl: imageMap[modalProduct.image] }}
            imageMap={imageMap}
            onClose={() => setModalProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
