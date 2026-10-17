import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolio';
import { PortfolioModal } from './PortfolioModal';
import { Film, Play } from 'lucide-react';
import './Portfolio.css';

export const Portfolio = ({ onBookService }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">
            <Film size={14} />
            <span>Featured Showcase</span>
          </div>
          <h2 className="section-title">
            Our Portfolio & <span className="text-red">Recent Works</span>
          </h2>
          <p className="section-desc">
            Explore a selection of our car deliveries, weddings, AI edits, and commercial shoots — Shot on iPhone with cinematic mobile rigs.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="portfolio-card"
              onClick={() => setActiveItem(item)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="portfolio-img"
                loading="lazy"
              />

              <div className="portfolio-meta-top">
                <span className="portfolio-duration">{item.duration}</span>
                <span className="portfolio-ratio">{item.aspectRatio}</span>
              </div>

              <div className="portfolio-play-btn">
                <Play size={24} fill="#FFFFFF" />
              </div>

              <div className="portfolio-overlay">
                <h3 className="portfolio-card-title">{item.title}</h3>
                <div className="portfolio-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Modal */}
        {activeItem && (
          <PortfolioModal 
            item={activeItem} 
            onClose={() => setActiveItem(null)} 
            onBookSimilar={(serviceId) => onBookService(serviceId)}
          />
        )}
      </div>
    </section>
  );
};
