import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import './Catalog.css';

// Image imports
import jasPria from '../assets/images/product-jas-cowo.png';
import jasPria2 from '../assets/images/product-jas-cowo2.png';
import jasAnakAnak from '../assets/images/product-jas-anak-anak.png';
import jasCasual from '../assets/images/product-jas-casual.png';
import blazerWanita from '../assets/images/product-blazer-wanita.png';
import blazerCasual from '../assets/images/product-blazer-casual.png';
import jasCewe from '../assets/images/product-jas-cewe.png';
import jasAnak from '../assets/images/product-jas-anak.png';
import tuxedo from '../assets/images/product-tuxedo.png';
import tuxedoCowo from '../assets/images/product-3-in-1.png';
import rompi from '../assets/images/product-rompi.png';
import rompiCowo from '../assets/images/product-rompi-cowo.png';
import kemejaPria from '../assets/images/product-kemeja.png';
import kemejaCowo from '../assets/images/product-kemeja-cowo.png';
import kemejaWanita from '../assets/images/product-kemeja-wanita.png';
import kemejaCewe from '../assets/images/product-kemeja-cewe.png';
import celanaCowo from '../assets/images/product-celena-cowo.png';
import celanaCewe from '../assets/images/product-celana-cewe.png';

export const imageMap = {
  'jas-pria-formal': jasPria,
  'jas-pria-formal2': jasPria2,
  'jas-cewe': jasCewe,
  'jas-anak-anak': jasAnakAnak,
  'jas-pria-casual': jasCasual,
  'blazer-wanita-formal': blazerWanita,
  'blazer-wanita-casual': blazerCasual,
  'jas-anak': jasAnak,
  'tuxedo-set': tuxedo,
  'tuxedo-cowo': tuxedoCowo,
  'rompi-formal': rompi,
  'rompi-cowo': rompiCowo,
  'kemeja-pria': kemejaPria,
  'kemeja-cowo': kemejaCowo,
  'kemeja-wanita': kemejaWanita,
  'kemeja-cewe': kemejaCewe,
  'celana-cowo': celanaCowo,
  'celana-cewe': celanaCewe,
};

const PREVIEW_IDS = [1, 5, 8];

export default function CatalogPreview() {
  const [modalProduct, setModalProduct] = useState(null);

  const previewProducts = useMemo(() => {
    return products
      .filter(p => PREVIEW_IDS.includes(p.id))
      .map(p => ({
        ...p,
        imageUrl: imageMap[p.image] || jasPria,
      }));
  }, []);

  return (
    <section className="section section-alt" id="katalog">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Katalog Produk</h2>
          <div className="accent-line" />
          <p>Temukan koleksi fashion formal terbaik untuk setiap momen spesial Anda</p>
        </motion.div>

        <div className="catalog__grid">
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
          className="catalog__cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/katalog" className="btn btn-primary">
            Lihat Semua Katalog
            <FiArrowRight size={18} className="cta-arrow" />
          </Link>
        </motion.div>
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
    </section>
  );
}
