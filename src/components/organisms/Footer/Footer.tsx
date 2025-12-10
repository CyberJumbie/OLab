import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Column 1: Brand */}
        <div className="footer-col">
          <div className="brand-section">
            <h2 className="footer-logo">IPD-O Lab</h2>
            <p className="footer-tagline">Where instincts become inventions.</p>
          </div>
          <div className="institution-info">
            <h3 className="institution-name">Morehouse School of Medicine</h3>
            <p className="institution-motto">Knowledge. Wisdom. Excellence. Service.</p>
          </div>
        </div>

        {/* Column 2: Navigate */}
        <div className="footer-col">
          <h3 className="col-heading">Navigate</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/moonshots">Moonshots</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/decks">Decks</Link></li>
          </ul>
        </div>

        {/* Column 3: Start Here */}
        <div className="footer-col">
          <h3 className="col-heading">Start Here</h3>
          <ul className="footer-links">
            <li><Link to="/services#office-hours">Office Hours</Link></li>
            <li><Link to="/services#story-vault">Story Vault</Link></li>
            <li><Link to="/services#workshops">Workshops</Link></li>
            <li><Link to="/resources#tech-radar">Tech Radar</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div className="footer-col">
          <h3 className="col-heading">Connect</h3>
          <ul className="footer-links">
            <li><a href="mailto:ipd@msm.edu">ipd@msm.edu</a></li>
            <li><a href="https://msm.edu" target="_blank" rel="noreferrer">msm.edu</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Hugh Gloster Building • Atlanta, Georgia</p>
        <p>© 2025 Morehouse School of Medicine</p>
      </div>
    </footer>
  );
};

export default Footer;
