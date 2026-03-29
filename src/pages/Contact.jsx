import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section-padding"
    >
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1>{t('contact.title')}</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Ready to bring your vision to life? Contact our studio to discuss your next big project. 
            We specialize in seamless integration of the impossible.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <span className="marker-plus" style={{ transform: 'scale(2)', margin: '2rem 1rem' }}></span>
          </div>
        </div>
        <div className="glass-card contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">{t('contact.name')}</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">{t('contact.email')}</label>
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="message">{t('contact.message')}</label>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
      <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-form-container {
          padding: 3rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .form-group {
          position: relative;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
          font-family: var(--font-body);
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-green);
        }
        .form-group label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          pointer-events: none;
        }
        .form-group input:focus ~ label,
        .form-group input:not(:placeholder-shown) ~ label,
        .form-group textarea:focus ~ label,
        .form-group textarea:not(:placeholder-shown) ~ label {
          top: -0.5rem;
          left: 0.8rem;
          font-size: 0.8rem;
          background: var(--bg-dark);
          padding: 0 0.4rem;
          color: var(--accent-green);
        }
        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-form-container {
            padding: 2rem;
          }
        }
      `}</style>
    </motion.div>
  );
};
export default Contact;
