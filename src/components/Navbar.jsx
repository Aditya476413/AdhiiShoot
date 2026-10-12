import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Sliders } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import './Navbar.css';

export const Navbar = ({ onOpenConfig, onBookClick, whatsappNumber }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, 'home')}>
          <img 
            src="/assets/images/logo.png" 
            alt="Adhiishoot Logo" 
            className="nav-logo-img" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          </li>
          <li>
            <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>Services & Pricing</a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </li>
        </ul>

        {/* Action Group */}
        <div className="nav-actions">
          {/* WhatsApp Config Toggle Pill */}
          <button 
            type="button" 
            className="nav-whatsapp-pill"
            onClick={onOpenConfig}
            title="Configure WhatsApp Destination Number"
          >
            <Sliders size={13} color="#E50914" />
            <span>WA: +{whatsappNumber}</span>
          </button>

          {/* Book Now Button */}
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              if (onBookClick) onBookClick();
              else {
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book Now
          </button>

          {/* Mobile Menu Hamburger */}
          <button 
            type="button" 
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
        <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'services')}>Services & Pricing</a>
        <a href="#portfolio" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio & Works</a>
        <a href="#about" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'about')}>About Adhiishoot</a>
        <a href="#contact" className="mobile-nav-link" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
          <button 
            type="button"
            className="btn btn-primary btn-full"
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Your Shoot
          </button>
          <button 
            type="button" 
            className="btn btn-secondary btn-full"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConfig();
            }}
          >
            <Sliders size={16} /> WA Destination Setup
          </button>
        </div>
      </div>
    </nav>
  );
};
