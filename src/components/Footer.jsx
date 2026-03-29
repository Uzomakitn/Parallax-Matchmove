import { Mail, Phone, MapPin } from 'lucide-react';
import { 
  FaLinkedin as Linkedin, 
  FaInstagram as Instagram, 
  FaYoutube as Youtube, 
  FaVimeo as Vimeo, 
  FaFacebook as Facebook, 
  FaTwitter as Twitter, 
  FaGithub as Github, 
  FaTwitch as Twitch 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer section-padding tracking-pattern-bg">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" style={{ marginBottom: '1.5rem' }}>
              <span className="marker-plus" style={{ marginRight: '10px' }}></span>
              Parallax Fx
            </Link>
            <p className="footer-desc">
              Premium tracking and matchmoving for high-end visual effects and virtual production.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><Youtube size={20} /></a>
              <a href="https://vimeo.com" target="_blank" rel="noreferrer"><Vimeo size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter size={20} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={20} /></a>
              <a href="https://twitch.tv" target="_blank" rel="noreferrer"><Twitch size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li><Mail size={18} /> info@vfxstudio.demo</li>
              <li><Phone size={18} /> +1 (555) 123-4567</li>
              <li><MapPin size={18} /> 123 Studio Level, LA, CA</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom glass-card" style={{ padding: '1rem', marginTop: '4rem', textAlign: 'center', borderRadius: '8px' }}>
          <p>&copy; {new Date().getFullYear()} Parallax Fx. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer {
          border-top: 1px solid var(--glass-border);
          position: relative;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
        }
        .footer-desc {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 300px;
        }
        .social-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          transition: all var(--transition-fast);
        }
        .social-links a:hover {
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: var(--bg-dark);
          transform: translateY(-3px);
        }
        .footer h3 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          color: white;
          position: relative;
          padding-bottom: 10px;
        }
        .footer h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background: var(--accent-green);
        }
        .footer-links ul, .footer-contact ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-links a, .footer-contact li {
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          display: flex;
          align-items: center;
        }
        .footer-contact li {
          gap: 10px;
        }
        .footer-links a:hover {
          color: var(--accent-green);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};
export default Footer;
