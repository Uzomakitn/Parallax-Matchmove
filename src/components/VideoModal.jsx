import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={32} />
          </button>
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside video
          >
            {/* The user can easily swap this iframe URL with their client projects */}
            {videoUrl && videoUrl.includes('.mp4') && !videoUrl.includes('streamtape') ? (
              <video 
                src={videoUrl} 
                autoPlay 
                controls 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#000' }} 
              />
            ) : (
              <iframe 
                src={videoUrl || "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"} 
                title="Showreel Video Player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        </motion.div>
      )}
      <style>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85); /* Dark cinematic overlay */
          backdrop-filter: blur(15px); /* Strong blur effect */
          -webkit-backdrop-filter: blur(15px);
          z-index: 10000; /* Above navbar and menu */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-close {
          position: absolute;
          top: 30px;
          right: 40px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: transform var(--transition-fast), color var(--transition-fast);
          z-index: 10001;
        }
        .modal-close:hover {
          color: var(--accent-green);
          transform: rotate(90deg) scale(1.2);
        }
        .modal-content {
          width: 90%;
          max-width: 1200px;
          aspect-ratio: 16/9;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 102, 0.15);
          border: 1px solid var(--glass-border);
          position: relative;
        }
        .modal-content iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default VideoModal;
