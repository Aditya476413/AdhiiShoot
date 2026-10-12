import React from 'react';
import { ArrowUpRight, Share2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './Icons';
import { BRAND_CONFIG } from '../config';
import './SocialSection.css';

export const SocialSection = () => {
  return (
    <section className="section social-section">
      <div className="container">
        <div className="social-cta-box">
          <div className="section-eyebrow">
            <Share2 size={14} />
            <span>Stay Connected</span>
          </div>

          <h2 className="social-cta-title">
            Follow Adhiishoot for <span className="text-red">More Creative Work</span>
          </h2>

          <p className="social-cta-desc">
            Catch our daily behind-the-scenes reels, new delivery ceremonies, client reveals, and cinematography color grades.
          </p>

          <div className="social-cards-grid">
            {/* Instagram */}
            <a 
              href={BRAND_CONFIG.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-channel-card"
            >
              <div className="social-icon-box">
                <InstagramIcon size={24} />
              </div>
              <div>
                <div className="social-name">Instagram</div>
                <div className="social-handle">@adhiishoot</div>
              </div>
              <span className="social-follow-pill">
                Watch Reels <ArrowUpRight size={14} />
              </span>
            </a>

            {/* YouTube */}
            <a 
              href={BRAND_CONFIG.socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-channel-card"
            >
              <div className="social-icon-box">
                <YoutubeIcon size={24} />
              </div>
              <div>
                <div className="social-name">YouTube</div>
                <div className="social-handle">@adhiishoot</div>
              </div>
              <span className="social-follow-pill">
                Watch 4K Edits <ArrowUpRight size={14} />
              </span>
            </a>

            {/* Facebook */}
            <a 
              href={BRAND_CONFIG.socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-channel-card"
            >
              <div className="social-icon-box">
                <FacebookIcon size={24} />
              </div>
              <div>
                <div className="social-name">Facebook</div>
                <div className="social-handle">Adhiishoot Official</div>
              </div>
              <span className="social-follow-pill">
                Follow Page <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
