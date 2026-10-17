import React from 'react';
import { Smartphone, Sparkles, Sliders, Users, Layers, Award } from 'lucide-react';
import './About.css';

export const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual Showcase */}
          <div className="about-visual-stack">
            <div className="about-main-img-wrap">
              <img 
                src="/assets/images/hero_camera.jpg" 
                alt="Adhiishoot iPhone Rig Setup" 
                className="about-main-img"
              />
            </div>

            <div className="about-badge-card">
              <div className="about-badge-icon">
                <Smartphone size={22} />
              </div>
              <div>
                <div className="about-badge-title">Shot on iPhone Cinematography</div>
                <div className="about-badge-sub">4K 60FPS PRORES • ACTION MODE • COLOR SUITE</div>
              </div>
            </div>
          </div>

          {/* Core Content */}
          <div className="about-content">
            <div className="section-eyebrow" style={{ alignSelf: 'flex-start' }}>
              <Sparkles size={14} />
              <span>Behind Adhiishoot</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              We Capture Moments. <br />
              <span className="text-red">We Create Stories.</span>
            </h2>

            <p className="about-text">
              At Adhiishoot, we turn real-life moments into memorable visual stories. From special celebrations and delivery moments to creative reels and business promotions, our team shoots exclusively on flagship iPhones with high-end mobile rigs for agile, stunning results.
            </p>

            {/* Core Pillars */}
            <div className="about-pillars">
              <div className="pillar-card">
                <div className="pillar-header">
                  <Smartphone size={18} className="pillar-icon" />
                  <span className="pillar-title">Shot on iPhone & Direction</span>
                </div>
                <p className="pillar-desc">
                  ProRes 4K capture, mobile gimbal stabilization, and expert direction to capture raw, natural emotion.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <Sliders size={18} className="pillar-icon" />
                  <span className="pillar-title">Color & Sound Design</span>
                </div>
                <p className="pillar-desc">
                  Rich cinematic color grading, punchy sound design, and speed ramps synced to trending music.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <Layers size={18} className="pillar-icon" />
                  <span className="pillar-title">AI Reel Innovations</span>
                </div>
                <p className="pillar-desc">
                  Smart animated captions, viral framing, and retention-optimized pacing for Instagram growth.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <Users size={18} className="pillar-icon" />
                  <span className="pillar-title">Personalized Craft</span>
                </div>
                <p className="pillar-desc">
                  Every project is treated individually with prompt WhatsApp communication and transparent rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
