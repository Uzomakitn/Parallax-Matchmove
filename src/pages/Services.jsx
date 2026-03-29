import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container section-padding"
    >
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>{t('services.title')}</h1>
      <div className="services-grid">
        <div className="glass-card">
          <span className="marker-plus" style={{ marginBottom: '1rem' }}></span>
          <h3>{t('services.s1_title')}</h3>
          <p>{t('services.s1_desc')}</p>
        </div>
        <div className="glass-card">
          <span className="marker-plus" style={{ marginBottom: '1rem' }}></span>
          <h3>{t('services.s2_title')}</h3>
          <p>{t('services.s2_desc')}</p>
        </div>
        <div className="glass-card">
          <span className="marker-plus" style={{ marginBottom: '1rem' }}></span>
          <h3>{t('services.s3_title')}</h3>
          <p>{t('services.s3_desc')}</p>
        </div>
      </div>
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .services-grid h3 {
          margin-bottom: 1rem;
          color: var(--accent-green);
        }
        .services-grid p {
          color: var(--text-secondary);
        }
      `}</style>
    </motion.div>
  );
};
export default Services;
