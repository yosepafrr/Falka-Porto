import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingBag } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

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

    // If it's a route link (like Katalog), let React Router handle it
    if (!link.href) return;

    e.preventDefault();

    // If we're on the same page, scroll to section
    if (location.pathname === link.path || link.path === '/') {
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? 'py-2.5 shadow-sm border-b backdrop-blur-[20px]'
          : ''
      }`}
      style={scrolled ? {
        background: 'var(--glass-bg)',
        borderColor: 'var(--glass-border)',
        boxShadow: 'var(--shadow-sm)',
      } : {}}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1280px] mx-auto px-[clamp(1rem,4vw,3rem)] flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={(e) => handleNavClick(e, { href: '#home', path: '/' })}
        >
          <img
            src={logo}
            alt="Falka Logo"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary transition-all duration-300"
          />
          <div className="flex flex-col leading-none gap-0.5">
            <span className="font-serif text-[1.6rem] font-extrabold tracking-[0.15em] bg-gradient-to-br from-primary to-primary-light bg-clip-text text-transparent">
              FALKA
            </span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--text-muted)' }}>
              Fashion Store
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <a
                  href={link.href}
                  className="text-[0.9rem] font-medium relative py-1 transition-colors duration-300 hover:!text-[var(--text-primary)] group"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={(e) => handleNavClick(e, link)}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-sm transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  to={link.path}
                  className="text-[0.9rem] font-medium relative py-1 transition-colors duration-300 hover:!text-[var(--text-primary)] group"
                  style={{ color: location.pathname === link.path ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-sm transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://shopee.co.id/falka.fs#product_list"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-[0.85rem] tracking-wide text-white bg-gradient-to-br from-primary to-primary-light shadow-[0_4px_20px_var(--color-primary-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-primary-glow)] transition-all duration-300 relative overflow-hidden"
          >
            <FiShoppingBag size={16} />
            <span>Shop Now</span>
          </a>
          <button
            className="flex lg:hidden w-10 h-10 items-center justify-center rounded-xl border transition-all duration-300 hover:!border-[var(--color-primary)]"
            style={{
              background: 'var(--bg-elevated)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="overflow-hidden border-t"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--border)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col p-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      className="block py-3.5 px-4 text-base font-medium rounded-xl transition-all duration-300 hover:pl-6"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={(e) => handleNavClick(e, link)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bg-elevated)';
                        e.currentTarget.style.color = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-3.5 px-4 text-base font-medium rounded-xl transition-all duration-300 hover:pl-6"
                      style={{ color: 'var(--text-secondary)' }}
                      onClick={() => setMobileOpen(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--bg-elevated)';
                        e.currentTarget.style.color = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
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
              className="flex items-center justify-center gap-2 mx-6 mb-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-primary to-primary-light shadow-[0_4px_20px_var(--color-primary-glow)]"
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
