import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import './Hero.css';

export const Hero = ({ onExploreServices, onBookShoot }) => {
  const [timecode, setTimecode] = useState('00:04:22:18');

  // Real-time ticking cinematic timecode counter
  useEffect(() => {
    let frame = 18;
    let sec = 22;
    let min = 4;
    const interval = setInterval(() => {
      frame++;
      if (frame >= 30) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
        }
      }
      const pad = (n) => String(n).padStart(2, '0');
      setTimecode(`00:${pad(min)}:${pad(sec)}:${pad(frame)}`);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Visual Asset */}
      <div className="hero-bg-container">
        <img 
          src="/assets/images/hero_camera.jpg" 
          alt="Adhiishoot Cinematic Camera Rig" 
          className="hero-bg-img"
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      {/* Cinematic Viewfinder HUD */}
      <div className="hero-hud">
        <div className="hud-top">
          <div className="hud-rec-badge">
            <span className="rec-dot"></span>
            <span className="hud-tag">SHOT ON iPHONE</span>
          </div>
          <div className="hud-timecode">{timecode}</div>
          <div className="hud-specs">
            <span>4K 60FPS</span>
            <span>PRORES LOG</span>
          </div>
        </div>

        <div className="hud-bottom">
          <div className="hud-specs">
            <span>CINEMATIC MODE</span>
            <span>4K HDR</span>
            <span>ACTION MODE</span>
          </div>
          <div className="hud-specs">
            <span>BATTERY 94%</span>
            <span>PRORES 422 HQ</span>
          </div>
        </div>
      </div>

      {/* Hero Core Content */}
      <div className="container hero-content">
        <div className="hero-pill">
          <Sparkles size={14} color="#E50914" />
          <span>Shot on iPhone • Professional Creative Reel Studio</span>
        </div>

        <h1 className="hero-title">
          Your Moments. <br />
          <span className="highlight-red">Our Creativity.</span>
        </h1>

        <p className="hero-subtitle">
          From unforgettable celebrations to cinematic delivery videos and scroll-stopping reels, 
          we turn your moments into videos worth watching.
        </p>

        {/* Call to Actions */}
        <div className="hero-cta-group">
          <button 
            type="button" 
            className="btn btn-primary btn-lg"
            onClick={onExploreServices}
          >
            Explore Services
            <ArrowRight size={18} />
          </button>

          <button 
            type="button" 
            className="btn btn-secondary btn-lg"
            onClick={onBookShoot}
          >
            Book Your Shoot
          </button>
        </div>

        {/* Transparent Metrics & Value Proposition */}
        <div className="hero-metrics">
          <div className="metric-item">
            <div className="metric-number">
              ₹399 <span>Starting</span>
            </div>
            <div className="metric-label">100% Transparent Pricing</div>
          </div>

          <div className="metric-item">
            <div className="metric-number">
              15-30 <span>Min</span>
            </div>
            <div className="metric-label">Rapid Delivery Available</div>
          </div>

          <div className="metric-item">
            <div className="metric-number">
              Direct <span>WhatsApp</span>
            </div>
            <div className="metric-label">Instant Booking Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
