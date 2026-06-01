import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { SiShopee, SiTiktok } from 'react-icons/si';
import logo from '../assets/logo.png';

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
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t pt-16" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Falka Logo" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-serif text-[1.8rem] font-extrabold tracking-[0.15em] bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
                  FALKA
                </span>
                <span className="text-[0.65rem] tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--text-muted)' }}>
                  Fashion Store
                </span>
              </div>
            </div>
            <p className="text-[0.85rem] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Fashion formal berkualitas premium dengan harga terjangkau.
              Produksi sendiri di Tasikmalaya, Jawa Barat.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://shopee.co.id/falka.fs#product_list', icon: <SiShopee size={18} />, label: 'Shopee' },
                { href: 'https://vt.tiktok.com/ZSxc13HXf/?page=Mall', icon: <SiTiktok size={18} />, label: 'TikTok' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:!text-[var(--color-primary)] hover:!border-[var(--color-primary)] hover:-translate-y-1"
                  style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-[0.9rem] font-bold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  {link.href ? (
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="text-[0.85rem] transition-all duration-300 hover:!text-[var(--color-primary)] hover:pl-1.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-[0.85rem] transition-all duration-300 hover:!text-[var(--color-primary)] hover:pl-1.5"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans text-[0.9rem] font-bold mb-5">Produk</h4>
            <ul className="flex flex-col gap-2.5">
              {productCategories.map(product => (
                <li key={product}>
                  <Link
                    to="/katalog"
                    className="text-[0.85rem] transition-all duration-300 hover:!text-[var(--color-primary)] hover:pl-1.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h4 className="font-sans text-[0.9rem] font-bold mb-5">Marketplace</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://shopee.co.id/falka.fs#product_list"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] transition-all duration-300 hover:!text-[var(--color-primary)] hover:pl-1.5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Shopee Official
                </a>
              </li>
              <li>
                <a
                  href="https://vt.tiktok.com/ZSxc13HXf/?page=Mall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] transition-all duration-300 hover:!text-[var(--color-primary)] hover:pl-1.5"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  TikTok Shop
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center py-8 mt-12 border-t gap-2" style={{ borderColor: 'var(--border)' }}>
          <p className="text-[0.8rem]" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Falka Fashion Store. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-[0.8rem]" style={{ color: 'var(--text-muted)' }}>
            Made with <FiHeart size={14} className="animate-[pulse_2s_ease-in-out_infinite]" style={{ color: 'var(--color-primary)' }} /> in Tasikmalaya
          </p>
        </div>
      </div>
    </footer>
  );
}
