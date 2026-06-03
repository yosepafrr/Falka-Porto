import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';
import logo from '../assets/logo.png';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home', path: '/' },
  { label: 'About', href: '#about', path: '/' },
  { label: 'Katalog', href: null, path: '/katalog' },
  { label: 'Testimoni', href: '#testimoni', path: '/' },
  { label: 'Contact', href: '#contact', path: '/' },
];

const productCategories = [
  'Jas Pria',
  'Blazer Wanita',
  'Jas Anak',
  'Tuxedo Set',
  'Kemeja Formal',
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (e, href) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="Falka Logo" className="footer__logo-img" />
              <div className="footer__logo-info">
                <span className="footer__logo-text">FALKA</span>
                <span className="footer__logo-sub">Fashion Store</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Fashion formal berkualitas premium dengan harga terjangkau.
              Produksi sendiri di Tasikmalaya, Jawa Barat.
            </p>
            <div className="footer__social">
              <a
                href="https://shopee.co.id/falka.fs#product_list"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="Shopee"
              >
                <SiShopee size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@falka.fs?lang=id-ID"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                aria-label="TikTok"
              >
                <SiTiktok size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} onClick={(e) => scrollTo(e, link.href)}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Produk</h4>
            <ul>
              {productCategories.map(product => (
                <li key={product}>
                  <Link to="/katalog">{product}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Marketplace</h4>
            <ul>
              <li>
                <a href="https://shopee.co.id/falka.fs#product_list" target="_blank" rel="noopener noreferrer">
                  Shopee Official
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@falka.fs?lang=id-ID" target="_blank" rel="noopener noreferrer">
                  TikTok Shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} Falka Fashion Store. All rights reserved.
          </p>
          <p className="footer__made">
            Made with <FiHeart className="footer__heart" size={14} /> in Tasikmalaya
          </p>
        </div>
      </div>
    </footer>
  );
}
