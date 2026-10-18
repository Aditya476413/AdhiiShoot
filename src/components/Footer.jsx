import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';
import { BRAND_CONFIG } from '../config';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/assets/images/logo.png" 
                alt="Adhiishoot Logo" 
                className="footer-logo-img" 
              />
            </div>

            <div className="footer-tagline-quote">
              Adhiishoot — Every Moment, A Story.
            </div>

            <p className="footer-sub">
              Professional video shooting, editing, and creative reel services.
            </p>

            {/* Approved 3-color palette indicators */}
            <div className="footer-palette-indicator">
              <span className="palette-dot" style={{ backgroundColor: '#E50914' }} title="Red: #E50914"></span>
              <span className="palette-dot" style={{ backgroundColor: '#0A0A0A', border: '1px solid #333' }} title="Black: #0A0A0A"></span>
              <span className="palette-dot" style={{ backgroundColor: '#FFFFFF' }} title="White: #FFFFFF"></span>
              <span>CINEMATIC PALETTE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#home">Home</a></li>
              <li className="footer-link-item"><a href="#services">Services & Pricing</a></li>
              <li className="footer-link-item"><a href="#portfolio">Featured Portfolio</a></li>
              <li className="footer-link-item"><a href="#about">About Adhiishoot</a></li>
              <li className="footer-link-item"><a href="#contact">Contact Team</a></li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h4 className="footer-col-title">Top Packages</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#services">Car Delivery Video (₹2,499)</a></li>
              <li className="footer-link-item"><a href="#services">Wedding Video (₹2,999)</a></li>
              <li className="footer-link-item"><a href="#services">AI Reel Edit (₹799)</a></li>
              <li className="footer-link-item"><a href="#services">Shoot & Reel Edit (₹1,999)</a></li>
              <li className="footer-link-item"><a href="#services">Shop Opening Video (₹2,299)</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="footer-col-title">Connect</h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
              Follow our official creative channels for raw timeline breakdowns and new releases.
            </p>

            <div className="footer-social-row">
              <a 
                href={BRAND_CONFIG.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>

              <a 
                href={BRAND_CONFIG.socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>

              <a 
                href={BRAND_CONFIG.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Adhiishoot. All Rights Reserved. Every Moment, A Story.
          </div>

          <button 
            type="button" 
            onClick={scrollToTop}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'rgba(255,255,255,0.7)', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              fontSize: '0.84rem' 
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} color="#E50914" />
          </button>
        </div>
      </div>
    </footer>
  );
};
