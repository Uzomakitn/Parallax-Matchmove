import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Explicit list of 20 team members so you can easily edit their details, images, and social links
const teamMembers = [
  { id: 1, name: 'Nabil Harrar', role: 'PROJECT SUPERVISOR', image: 'https://media.licdn.com/dms/image/v2/D4D03AQFcEkcEo8V14g/profile-displayphoto-shrink_400_400/B4DZRp1PblG4Ak-/0/1736942356369?e=1776297600&v=beta&t=qRPcWO90K6V82mPAaCzATtcymulWzgdE8WLsQH-82Rg', socials: { facebook: '', linkedin: 'https://www.linkedin.com/in/nabil-harrar/?locale=fr', instagram: '' } },
  { id: 2, name: 'Ann Richmond', role: 'PROJECT LEAD', image: 'https://i.pravatar.cc/400?img=12', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 3, name: 'Jeffrey Brown', role: 'PROJECT LEAD ', image: 'https://i.pravatar.cc/400?img=13', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 4, name: 'Sarah Williams', role: 'PROJECT LEAD', image: 'https://i.pravatar.cc/400?img=14', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 5, name: 'Michael Chen', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=15', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 6, name: 'Artist 6', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=16', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 7, name: 'Artist 7', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=17', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 8, name: 'Artist 8', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=18', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 9, name: 'Artist 9', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=19', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 10, name: 'Artist 10', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=20', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 11, name: 'Artist 11', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=21', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 12, name: 'Artist 12', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=22', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 13, name: 'Artist 13', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=23', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 14, name: 'Artist 14', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=24', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 15, name: 'Artist 15', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=25', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 16, name: 'Artist 16', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=26', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 17, name: 'Artist 17', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=27', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 18, name: 'Artist 18', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=28', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 19, name: 'Artist 19', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=29', socials: { facebook: '', linkedin: '', instagram: '' } },
  { id: 20, name: 'Artist 20', role: 'MATCHMOVE ARTIST', image: 'https://i.pravatar.cc/400?img=30', socials: { facebook: '', linkedin: '', instagram: '' } }
];

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="team-page section-padding tracking-pattern-bg">
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        <div className="team-header text-center" style={{ marginBottom: '4rem' }}>
          <span className="marker-plus" style={{ marginBottom: '2rem', transform: 'scale(1.5)' }}></span>
          <h1 className="hero-title" style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
            Our Team
          </h1>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-gold)', margin: '2rem auto 3rem' }}></div>
        </div>

        <div className="team-intro" style={{ maxWidth: '900px', margin: '0 auto 6rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Since its creation, the <strong style={{ color: 'var(--text-primary)' }}>3DMM Tracking & Matchmoving Team</strong> has been at the core of the company’s success. Built by highly experienced artists and technical specialists, the team has played a crucial role in delivering world-class tracking and matchmoving solutions for some of the most demanding visual effects productions in the industry.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            This team was originally part of <strong style={{ color: 'var(--text-primary)' }}>3DMM</strong>, where its members developed their expertise and built a reputation for excellence. Although the company unfortunately no longer exists today, the core team has reunited under a new banner (<strong style={{ color: 'var(--accent-gold)' }}>Parallax FX</strong>), bringing together the same talent, experience, and dedication that made them successful in the first place.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Over the years, our artists have collaborated with many of the biggest VFX studios and production companies in the world — including the true leaders of the market — earning their trust through precision, reliability, and uncompromising quality. These collaborations have contributed to numerous major film and television projects such as <em style={{ color: 'var(--text-primary)' }}>Top Gun</em>, <em style={{ color: 'var(--text-primary)' }}>Extraction</em>, <em style={{ color: 'var(--text-primary)' }}>Gran Turismo</em>, <em style={{ color: 'var(--text-primary)' }}>Game of Thrones</em>, <em style={{ color: 'var(--text-primary)' }}>No Time To Die</em>, <em style={{ color: 'var(--text-primary)' }}>Avatar</em>, <em style={{ color: 'var(--text-primary)' }}>See Season 2</em>, <em style={{ color: 'var(--text-primary)' }}>Taxi 5</em>, and <em style={{ color: 'var(--text-primary)' }}>Astérix & Obélix</em>, as well as high-profile international advertising campaigns and major Super Bowl productions.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Through these projects, the team has built a reputation for solving the most complex tracking challenges while maintaining the highest industry standards. Their work has been trusted on productions where accuracy and efficiency are critical to the success of the visual effects pipeline.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Today, reunited with the same passion and determination that defined them from the beginning, the team continues its journey within (<strong style={{ color: 'var(--accent-gold)' }}>Parallax FX</strong>). Driven by experience, creativity, and a relentless pursuit of perfection, the artists are ready to take on new challenges and push once again the boundaries of what is possible in the world of VFX.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Our ambition remains clear: <strong style={{ color: 'var(--text-primary)' }}>to reach the very top of the global tracking industry.</strong>
          </p>
          <p style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-display)', fontStyle: 'italic', marginTop: '3rem' }}>
            Because for us, the philosophy has never changed:<br />
            <strong>One Shot. One Kill.</strong>
          </p>
        </div>

        <div className="team-grid-container">
          <div className="team-accent-bands-container">
            <div className="team-accent-band row-1"></div>
            <div className="team-accent-band row-2"></div>
            <div className="team-accent-band row-3"></div>
            <div className="team-accent-band row-4"></div>
          </div>

          <div className="team-members">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-member-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              >
                <div className="member-image-wrapper">
                  <img src={member.image} alt={member.name} className="member-img capsule-img" />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-socials">
                    <a href={member.socials?.facebook || "#"} onClick={(e) => !member.socials?.facebook && e.preventDefault()} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
                    <a href={member.socials?.linkedin || "#"} onClick={(e) => !member.socials?.linkedin && e.preventDefault()} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    <a href={member.socials?.instagram || "#"} onClick={(e) => !member.socials?.instagram && e.preventDefault()} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
