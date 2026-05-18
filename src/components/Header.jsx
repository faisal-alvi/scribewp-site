import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/lib/Icons';

function Logo({ size = 28 }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size, fontSize: size * 0.53, borderRadius: size * 0.28 }}>S</span>
  );
}

export default function Header({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link className="brand" to="/">
          <Logo />
          <span className="brand-name">ScribeWP</span>
        </Link>

        <div className="nav-links">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#how">How it works</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#testimonials">Customers</a>
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} title="Toggle theme" aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="8" cy="8" r="3" />
                <path d="M8 1.5v1.5M8 13v1.5M1.5 8h1.5M13 8h1.5M3.5 3.5l1 1M11.5 11.5l1 1M3.5 12.5l1-1M11.5 4.5l1-1" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 9.4A5.6 5.6 0 016.6 3a5.6 5.6 0 100 11.2A5.6 5.6 0 0013 9.4z" />
              </svg>
            )}
          </button>
          <a className="btn btn-ghost" href="https://wordpress.org/plugins/scribewp" target="_blank" rel="noopener noreferrer">WordPress.org</a>
          <a className="btn btn-primary" href="#pricing">
            Install free
            <Icon.Arrow className="btn-arrow" />
          </a>
        </div>
      </div>
    </nav>
  );
}
