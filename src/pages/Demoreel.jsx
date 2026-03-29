import React from 'react';
// Videos explicitly referenced from /video/ public path to guarantee Netlify build success

const Demoreel = () => {
  const ytParams = "?rel=0&modestbranding=1";
  const videos = [
    `https://www.youtube.com/embed/ymfNd-nWcD0${ytParams}&playlist=ymfNd-nWcD0`,
    `https://www.youtube.com/embed/SGbzqXLvzjE${ytParams}&playlist=SGbzqXLvzjE`,
    `https://www.youtube.com/embed/6uZnIQAkiG0${ytParams}&playlist=6uZnIQAkiG0`
  ];

  return (
    <div className="section-padding container">
      <h1 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}> DEMO REELS</h1>
      <div className="demoreel-grid" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        {videos.map((vid, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            <iframe
              src={vid}
              allowFullScreen
              style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover', background: '#000', border: 'none' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demoreel;
