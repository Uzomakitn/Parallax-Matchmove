import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;

    // Contact Us primary template
    const service_id = 'service_5ezn01r';
    const template_id = 'template_pydrluo';
    const public_key = 'KtnP86TPkU3vY4mmC';

    const template_params = {
      from_name: form.name.value,
      name: form.name.value,
      reply_to: form.email.value,
      email: form.email.value,
      company: form.company.value,
      subject: form.subject.value,
      message: form.message.value
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id,
          template_id,
          user_id: public_key,
          template_params
        }),
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const errText = await response.text();
        console.error('EmailJS Validation Error:', response.status, errText);
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Network Error:', error);
      setStatus('error');
    }
  };

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
          {status === 'success' ? (
            <div className="success-message" style={{ textAlign: 'center', padding: '2rem' }}>
              <h2 style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>Message Sent!</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out. We will get back to you soon.</p>
              <button onClick={() => setStatus('idle')} className="btn-primary" style={{ marginTop: '2rem' }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder=" " required disabled={status === 'loading'} />
                <label htmlFor="name">{t('contact.name')}</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder=" " required disabled={status === 'loading'} />
                <label htmlFor="email">{t('contact.email')}</label>
              </div>
              <div className="form-group">
                <input type="text" id="company" name="company" placeholder=" " required disabled={status === 'loading'} />
                <label htmlFor="company">{t('contact.company', 'Company')}</label>
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder=" " required disabled={status === 'loading'} />
                <label htmlFor="subject">{t('contact.subject', 'Subject')}</label>
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows="5" placeholder=" " required disabled={status === 'loading'}></textarea>
                <label htmlFor="message">{t('contact.message')}</label>
              </div>

              {status === 'error' && (
                <p style={{ color: '#ff4444', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem' }}>
                  There was an error sending your message. Please try again.
                </p>
              )}

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', opacity: status === 'loading' ? 0.7 : 1 }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : t('contact.send')}
              </button>
            </form>
          )}
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
