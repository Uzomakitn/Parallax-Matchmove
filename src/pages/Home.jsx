import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';
import VideoModal from '../components/VideoModal';
import HeroMediaWall from '../components/HeroMediaWall';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

import ab1Before from '../assets/AB/1-2.png';
import ab1After from '../assets/AB/1.png';
import ab2Before from '../assets/AB/2-1.png';
import ab2After from '../assets/AB/2.png';
import ab3Before from '../assets/AB/3-1.png';
import ab3After from '../assets/AB/3.png';
import ab4Before from '../assets/AB/4-1.png';
import ab4After from '../assets/AB/4.png';
import ab5Before from '../assets/AB/5-1.png';
import ab5After from '../assets/AB/5.png';
import ab6Before from '../assets/AB/6-1.png';
import ab6After from '../assets/AB/6.png';
import ab7Before from '../assets/AB/7-1.png';
import ab7After from '../assets/AB/7.png';
import ab8Before from '../assets/AB/8_1.png';
import ab8After from '../assets/AB/8.png';
import ab9Before from '../assets/AB/9-1.png';
import ab9After from '../assets/AB/9.png';

// Videos explicitly referenced from /video/ public path to guarantee Netlify build success


import blackbird from '../assets/clients/blackbird.png';
import cinesite from '../assets/clients/cinesite.png';
import framestore from '../assets/clients/framestore_logo.jpg';
import imageEngine from '../assets/clients/image-engine.png';
import method from '../assets/clients/method.jpg';
import pixomondo from '../assets/clients/pixomondo.png';
import rodeo from '../assets/clients/rodeo.jpeg';
import scanline from '../assets/clients/scanlinevfx_logo.jpg';
import theMill from '../assets/clients/the-mill.jpeg';
import theYards from '../assets/clients/the_yards.jpeg';
import unitImage from '../assets/clients/unit-image.png';
import weta from '../assets/clients/weta-vfx.jpeg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const openVideo = (url = "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1") => {
    setCurrentVideo(url);
    setModalOpen(true);
  };

  // Placeholders for content
  const heroSlides = [
    { id: 1, title: 'MATCHMOVING', desc: 'Camera Tracking & Object Tracking', video: '/video/2016.mp4' },
    { id: 2, title: 'ROTOANIMATION', desc: 'Character Body Animation', video: '/video/2017.mp4' },
    { id: 3, title: 'LAYOUT', desc: 'Set Construction (Layout) ', video: '/video/2018.mp4' }
  ];

  const showreels = ['/video/2018.mp4', '/video/2017.mp4', '/video/2016.mp4'];

  const clientLogos = [
    blackbird, cinesite, framestore, imageEngine, method, pixomondo,
    rodeo, scanline, theMill, theYards, unitImage, weta
  ];

  const abComparisons = [
    { before: ab1Before, after: ab1After },
    { before: ab2Before, after: ab2After },
    { before: ab3Before, after: ab3After },
    { before: ab4Before, after: ab4After },
    { before: ab5Before, after: ab5After },
    { before: ab6Before, after: ab6After },
    { before: ab7Before, after: ab7After },
    { before: ab8Before, after: ab8After },
    { before: ab9Before, after: ab9After }
  ];

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-section">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content tracking-pattern-bg">
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="marker-plus" style={{ marginBottom: '2rem', transform: 'scale(1.5)' }}></span>
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-desc">{slide.desc}</p>
                    <button className="btn-primary" style={{ marginTop: '2rem' }} onClick={() => openVideo(slide.video)}>
                      {t('hero.cta')}
                    </button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Media Wall */}
      <HeroMediaWall />

      {/* Showreels section */}
      <section className="section-padding container">
        <h2 className="section-title"> SHOWREELS</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          className="showreels-swiper"
        >
          {showreels.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="video-card glass-card"
                style={{ padding: '0', overflow: 'hidden', transition: 'border-color var(--transition-fast)' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-green)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
              >
                <video
                  src={item}
                  controls
                  preload="metadata"
                  className="swiper-no-swiping"
                  style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover', background: '#000' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Posters section -> Now Before/After sliders */}
      <section className="section-padding container">
        <h2 className="section-title" style={{ textAlign: 'right' }}>OUR WORK</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
          className="posters-swiper"
        >
          {abComparisons.map((item, idx) => (
            <SwiperSlide key={idx}>
              <BeforeAfterSlider
                beforeImage={item.before}
                afterImage={item.after}
                alt={`Comparison ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Client Logos section */}
      <section className="section-padding container" style={{ borderTop: '1px solid var(--glass-border)' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>10 years of experience with</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{ 768: { slidesPerView: 5 }, 1024: { slidesPerView: 6 } }}
          loop
          className="logos-swiper"
        >
          {clientLogos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="logo-placeholder">
                <img src={item} alt={`Client ${index}`} style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <style>{`
        .hero-section {
          height: 100vh;
          margin-top: -100px; /* Offset the Layout padding */
        }
        .hero-swiper {
          height: 100%;
        }
        .slide-content {
          height: 100%;
          display: flex;
          align-items: center;
          background: linear-gradient(45deg, var(--bg-dark), rgba(10, 10, 15, 0.8));
          position: relative;
        }
        .hero-title {
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1;
          margin-bottom: 1rem;
          color: white;
          text-shadow: 0 0 30px rgba(0, 255, 102, 0.2);
        }
        .hero-desc {
          font-size: 1.5rem;
          color: var(--text-secondary);
          font-family: var(--font-display);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: white;
        }
        .video-placeholder {
          aspect-ratio: 16/9;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          color: var(--text-secondary);
        }
        .poster-placeholder {
          aspect-ratio: 2/3;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: transform var(--transition-fast), border-color var(--transition-fast);
          cursor: pointer;
        }
        .poster-placeholder:hover {
          transform: scale(1.05);
          border-color: var(--accent-green);
        }
        .logo-placeholder {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next, .swiper-button-prev {
          color: var(--accent-green) !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-green) !important;
        }
      `}</style>
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} videoUrl={currentVideo} />
    </div>
  );
};

export default Home;
