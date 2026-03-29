export { default as Services } from './Services';
export { default as Contact } from './Contact';
export { default as Demoreel } from './Demoreel';

const Placeholder = ({ title }) => (
  <div className="container section-padding" style={{ textAlign: 'center' }}>
    <span className="marker-plus" style={{ marginBottom: '2rem', transform: 'scale(2)' }}></span>
    <h1>{title}</h1>
    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Coming soon...</p>
  </div>
);

export const Projects = () => <Placeholder title="Projects" />;
export const Team = () => <Placeholder title="Our Team" />;
export const About = () => <Placeholder title="About Us" />;
