import { Grid, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuShortcut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.demoreel'), path: '/demoreel' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <>
      <div className="shortcut-wrapper">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="shortcut-menu glass-card"
            >
              {menuItems.map((item, index) => (
                <Link key={index} to={item.path} onClick={() => setIsOpen(false)}>
                  <span className="marker-plus" style={{ transform: 'scale(0.5)', marginRight: '10px' }}></span>
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="shortcut-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Grid size={24} />}
        </button>
      </div>
      <style>{`
        .shortcut-wrapper {
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 15px;
        }
        .shortcut-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent-green);
          border: none;
          color: var(--bg-dark);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 255, 102, 0.3);
          transition: transform var(--transition-fast);
        }
        .shortcut-btn:hover {
          transform: scale(1.1) rotate(90deg) !important;
        }
        .shortcut-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 1.5rem;
          min-width: 200px;
        }
        .shortcut-menu a {
          font-family: var(--font-display);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 10px;
          border-radius: 8px;
          transition: background var(--transition-fast), color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .shortcut-menu a:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--accent-green);
        }
        @media (max-width: 768px) {
          .shortcut-wrapper {
            bottom: 20px;
            right: 20px;
          }
          .shortcut-btn {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </>
  );
};
export default MenuShortcut;
