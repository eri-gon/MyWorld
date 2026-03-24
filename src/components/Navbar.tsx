import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="navbar-container">
      <Link to="/" className={`bookmark-tab ${isActive('/') ? 'active' : ''}`}>
        <span>Home</span>
      </Link>
      <Link to="/projects" className={`bookmark-tab ${isActive('/projects') ? 'active' : ''}`}>
        <span>Projects</span>
      </Link>
      <Link to="/about" className={`bookmark-tab ${isActive('/about') ? 'active' : ''}`}>
        <span>About</span>
      </Link>
      <Link to="/blog" className={`bookmark-tab ${isActive('/blog') ? 'active' : ''}`}>
        <span>Blog</span>
      </Link>
    </div>
  );
};

export default Navbar;
