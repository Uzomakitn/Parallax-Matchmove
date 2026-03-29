import React, { useEffect, useRef } from 'react';
import './HeroMediaWall.css';

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.png';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpeg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.png';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpeg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.png';

const baseSet1 = [img1, img2, img3, img4, img5, img6];
const baseSet2 = [img7, img8, img9, img10, img11, img12];
const baseSet3 = [img13, img14, img15, img16, img17, img18];

// Repeat 8 times total to ensure the track is very long
const generateRow = (base) => {
  return [...base, ...base, ...base, ...base, ...base, ...base, ...base, ...base];
};

const MediaRow = ({ images, direction, speed = 60 }) => {
  const isLeft = direction === 'left';
  
  return (
    <div className="media-row-container">
      <div className={`media-row row-${direction}-scroll`} style={{ animationDuration: `${speed}s` }}>
        <div className="media-row-parallax" style={{ 
          transform: `translateX(calc(var(--scroll-y, 0px) * ${isLeft ? -0.15 : 0.15}))`,
        }}>
          {images.map((src, idx) => (
            <div className="media-item" key={idx}>
              <img src={src} alt={`Media thumbnail ${idx}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroMediaWall = () => {
  const wallRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wallRef.current) {
        wallRef.current.style.setProperty('--scroll-y', `${window.scrollY}px`);
      }
    };
    
    // Initial call
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-media-wall" ref={wallRef}>
      <div className="hero-media-wall-inner">
        <MediaRow images={generateRow(baseSet1)} direction="left" speed={60} />
        <MediaRow images={generateRow(baseSet2)} direction="right" speed={75} />
        <MediaRow images={generateRow(baseSet3)} direction="left" speed={50} />
      </div>
    </div>
  );
};

export default HeroMediaWall;
