import React, { useState } from 'react';
import { CATEGORIES, SERVICES } from '../data/services';
import { Check, ArrowRight, Video, Flame } from 'lucide-react';
import './Services.css';

export const Services = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices = selectedCategory === "All Services"
    ? SERVICES
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="section services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">
            <Video size={14} />
            <span>Complete Catalogue</span>
          </div>
          <h2 className="section-title">
            Our Services & <span className="text-red">Transparent Pricing</span>
          </h2>
          <p className="section-desc">
            No surprise add-ons. No hidden hourly fees. Choose your required package and book directly with our production crew.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filter-bar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card glow-card">
              {/* Thumbnail Container */}
              <div className="service-thumb-wrap">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-thumb"
                  loading="lazy"
                />
                <span className={`service-badge ${service.badge.includes('🔥') ? 'red-accent' : ''}`}>
                  {service.badge}
                </span>
                <span className="service-category-tag">
                  {service.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="service-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                {/* Features Checklist */}
                <ul className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature-item">
                      <Check size={14} className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Footer with Price and Book Button */}
                <div className="service-footer">
                  <div className="service-price-block">
                    <span className="price-label">Fixed Price</span>
                    <span className="price-value">{service.formattedPrice}</span>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => onSelectService(service)}
                  >
                    Book This Service
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
