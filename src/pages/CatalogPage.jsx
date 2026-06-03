import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiHome } from 'react-icons/fi';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { imageMap } from '../components/CatalogPreview';
import '../components/Catalog.css';

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [modalProduct, setModalProduct] = useState(null);

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
    <div className="catalog-page">
      <div className="container">
        {/* Breadcrumb */}
        <motion.nav
          className="catalog-page__breadcrumb"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="catalog-page__breadcrumb-link">
            <FiHome size={14} />
            Home
          </Link>
          <FiChevronRight size={14} className="catalog-page__breadcrumb-sep" />
          <span className="catalog-page__breadcrumb-current">Katalog</span>
        </motion.nav>

        {/* Header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Katalog Produk</h1>
          <div className="accent-line" />
          <p>Temukan koleksi lengkap fashion formal terbaik untuk setiap momen spesial Anda</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="catalog__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`catalog__filter-btn ${activeCategory === cat ? 'catalog__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products count */}
        <p className="catalog-page__count">
          Menampilkan <span className="catalog-page__count-num">{filteredProducts.length}</span> produk
          {activeCategory !== 'Semua' && (
            <> dalam kategori <span className="catalog-page__count-cat">{activeCategory}</span></>
          )}
        </p>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="catalog__grid"
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
          <div className="catalog-page__empty">
            Tidak ada produk dalam kategori ini.
          </div>
        )}
      </div>

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
