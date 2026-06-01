import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

// Image imports
import jasPria from '../assets/images/product-jas-pria.png';
import jasCasual from '../assets/images/product-jas-casual.png';
import blazerWanita from '../assets/images/product-blazer-wanita.png';
import blazerCasual from '../assets/images/product-blazer-casual.png';
import jasAnak from '../assets/images/product-jas-anak.png';
import tuxedo from '../assets/images/product-tuxedo.png';
import rompi from '../assets/images/product-rompi.png';
import kemejaPria from '../assets/images/product-kemeja.png';
import kemejaWanita from '../assets/images/product-kemeja-wanita.png';

export const imageMap = {
  'jas-pria-formal': jasPria,
  'jas-pria-casual': jasCasual,
  'blazer-wanita-formal': blazerWanita,
  'blazer-wanita-casual': blazerCasual,
  'jas-anak': jasAnak,
  'tuxedo-set': tuxedo,
  'rompi-formal': rompi,
  'kemeja-pria': kemejaPria,
  'kemeja-wanita': kemejaWanita,
};

const PREVIEW_COUNT = 6;

export default function CatalogPreview() {
  const [modalProduct, setModalProduct] = useState(null);

  const previewProducts = useMemo(() => {
    return products.slice(0, PREVIEW_COUNT).map(p => ({
      ...p,
      imageUrl: imageMap[p.image] || jasPria,
    }));
  }, []);

  return (
    <section className="py-[clamp(3rem,8vw,7rem)]" style={{ background: 'var(--section-alt)' }} id="katalog">
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <motion.div
          className="text-center mb-[clamp(2rem,5vw,4rem)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[clamp(1.8rem,4vw,3rem)] mb-2">Katalog Produk</h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-primary to-primary-light mx-auto my-4 rounded-sm" />
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] max-w-[600px] mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Temukan koleksi fashion formal terbaik untuk setiap momen spesial Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onOpenModal={setModalProduct}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/katalog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[0.95rem] tracking-wide text-white bg-gradient-to-br from-primary to-primary-light shadow-[0_4px_20px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-primary-glow)] transition-all duration-300 relative overflow-hidden group"
          >
            Lihat Semua Katalog
            <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
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
    </section>
  );
}
