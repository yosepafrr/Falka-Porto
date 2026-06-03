import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />

        <ScrollToHash />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/katalog" element={<CatalogPage />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
