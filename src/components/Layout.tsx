import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 1.5rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      <main style={{ flex: 1, marginTop: '4rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
