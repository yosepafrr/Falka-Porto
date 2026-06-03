import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home', path: '/' },
  { label: 'About', href: '#about', path: '/' },
  { label: 'Katalog', href: null, path: '/katalog' },
  { label: 'Testimoni', href: '#testimoni', path: '/' },
  { label: 'Contact', href: '#contact', path: '/' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, link) => {
    setMobileOpen(false);

    if (!link.href) return;

    e.preventDefault();

    if (location.pathname === '/') {
      const el = document.querySelector(link.href);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${link.href}`);
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={(e) => handleNavClick(e, { href: '#home', path: '/' })}>
          <img src={logo} alt="Falka Logo" className="navbar__logo-img" />
          <div className="navbar__logo-info">
            <span className="navbar__logo-text">FALKA</span>
            <span className="navbar__logo-sub">Fashion Store</span>
          </div>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <ThemeToggle />
          <a
            href="https://shopee.co.id/falka.fs#product_list"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            <FiShoppingBag size={16} />
            <span>Shop Now</span>
          </a>
          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.href ? (
                    <a href={link.href} onClick={(e) => handleNavClick(e, link)}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <a
              href="https://shopee.co.id/falka.fs#product_list"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary navbar__mobile-cta"
            >
              <FiShoppingBag size={16} />
              Shop Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
