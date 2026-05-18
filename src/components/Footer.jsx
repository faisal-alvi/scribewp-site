import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ size = 28 }) {
  return (
    <span className="brand-mark" style={{ width: size, height: size, fontSize: size * 0.53, borderRadius: size * 0.28 }}>S</span>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <div className="foot-col">
            <Link className="brand" to="/">
              <Logo />
              <span className="brand-name">ScribeWP</span>
            </Link>
            <p className="foot-blurb">AI writing, native to the WordPress editor. Built by writers, for writers.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#testimonials">Customers</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://wordpress.org/plugins/scribewp" target="_blank" rel="noopener noreferrer">WordPress.org</a></li>
              <li><a href="https://github.com/faisal-alvi/ai-content-assistant" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:hello@scribewp.com">Support</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/faisal-alvi/ai-content-assistant" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:hello@scribewp.com">hello@scribewp.com</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} ScribeWP · Made with care for the WordPress community.</span>
          <span className="mono" style={{ fontSize: 11.5 }}>v 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
