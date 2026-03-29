import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage, alt = "Before and After comparison" }) => {
  const [position, setPosition] = useState(50);
  const [isInteractive, setIsInteractive] = useState(false);
  const containerRef = useRef(null);

  // Initial demonstration animation
  useEffect(() => {
    let t1, t2, t3;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInteractive) {
          // Play animation once when visible
          t1 = setTimeout(() => setPosition(45), 500);
          t2 = setTimeout(() => setPosition(55), 1200);
          t3 = setTimeout(() => {
            setPosition(50);
            setIsInteractive(true); // Enable instant dragging without transition
          }, 1900);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
    };
  }, [isInteractive]);

  // Handle Dragging
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = clientX - rect.left;
    // Clamp between 0 and 100%
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setPosition(percentage);
  };

  const onPointerDown = (e) => {
    setIsInteractive(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const onPointerMove = (e) => {
    if (e.buttons !== 1) return; // Only if mouse is down or touch is active
    e.preventDefault(); // Stop scrolling while dragging
    handleMove(e.clientX);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setPosition(p => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      setPosition(p => Math.min(100, p + 5));
    }
  };

  return (
    <div 
      className="work-slide"
      aria-label={alt}
    >
      <div 
        className="before-after-container swiper-no-swiping"
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        style={{ 
          '--position': `${position}%`,
          '--transition': isInteractive ? 'none' : 'clip-path 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* BEFORE IMAGE (Background) */}
        <img src={beforeImage} alt="Before" className="image-before" draggable="false" />
        <div className="label-before">BEFORE</div>

        {/* AFTER IMAGE (Foreground) */}
        <div className="after-wrapper">
          <img src={afterImage} alt="After" className="image-after" draggable="false" />
          <div className="label-after">AFTER</div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          className="comparison-slider"
          style={{ transition: isInteractive ? 'none' : 'left 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          <div className="slider-handle">
            <ChevronLeft size={16} color="#000" />
            <ChevronRight size={16} color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
