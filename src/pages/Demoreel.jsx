import React from 'react';
// Videos explicitly referenced from /video/ public path to guarantee Netlify build success

const Demoreel = () => {
  const videos = ['/video/2018.mp4', '/video/2017.mp4', '/video/2016.mp4'];

  return (
    <div className="section-padding container">
      <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}> DEMO REELS</h1>
      <div className="demoreel-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        {videos.map((vid, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <video
              src={vid}
              controls
              preload="metadata"
              style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover', background: '#000' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demoreel;
