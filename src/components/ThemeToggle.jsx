import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="theme-toggle__icon"
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
      </motion.div>
    </motion.button>
  );
}
