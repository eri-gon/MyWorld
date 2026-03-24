import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '4rem 2rem 2rem',
      fontSize: '0.9rem',
      color: '#888'
    }}>
      <h2 className="handwritten" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Let's Connect</h2>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <a href="https://github.com/eri-gon" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} className="handwritten">GitHub</a>
        <a href="https://www.linkedin.com/in/ericgan64/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} className="handwritten">LinkedIn</a>
      </div>
      <p className="accent-text">Made with &hearts; in Bullet Journal Style</p>
      <p>&copy; {new Date().getFullYear()} Eric Gan (甘雨轩)</p>
    </footer>
  );
};

const iconLinkStyle: React.CSSProperties = {
  color: 'var(--text-color)',
  transition: 'color 0.2s ease',
  textDecoration: 'none'
};

export default Footer;
