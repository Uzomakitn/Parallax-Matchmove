import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="navbar glass-card">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span className="marker-plus" style={{ marginRight: '20px' }}></span>
          PARALLAX FX
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>{t('nav.services')}</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>{t('nav.projects')}</Link>
          <Link to="/demoreel" onClick={() => setIsOpen(false)}>{t('nav.demoreel')}</Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>{t('nav.team')}</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>{t('nav.about')}</Link>
          <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
          <button onClick={toggleLanguage} className="lang-toggle">
            {i18n.language.toUpperCase()}
          </button>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 5%;
          right: 5%;
          z-index: 1000;
          padding: 1rem 2rem;
          border-radius: 50px;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
          width: 100%;
        }
        .logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-links a {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color var(--transition-fast);
        }
        .nav-links a:hover {
          color: var(--accent-green);
        }
        .lang-toggle {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-family: var(--font-display);
          transition: all var(--transition-fast);
        }
        .lang-toggle:hover {
          border-color: var(--accent-green);
          color: var(--accent-green);
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 1100px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            flex-direction: column;
            padding: 2rem;
            border-radius: 20px;
            margin-top: 10px;
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
          }
          .nav-links.open {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};
export default Navbar;
