import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import './Contact.css';

export const Contact = ({ whatsappNumber }) => {
  const activeNumber = whatsappNumber || BRAND_CONFIG.whatsappNumber;
  const directWhatsAppUrl = `https://wa.me/${activeNumber}?text=${encodeURIComponent('Hi Adhiishoot! I want to discuss a video shoot / reel edit.')}`;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Title */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">
            <MessageCircle size={14} />
            <span>Direct Reach</span>
          </div>
          <h2 className="section-title">
            Let's Talk <span className="text-red">Production</span>
          </h2>
          <p className="section-desc">
            Ready to plan your car delivery shoot, wedding teaser, or reel? Connect with our team directly.
          </p>
        </div>

        <div className="contact-layout">
          {/* Information Column */}
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-item-title">Official WhatsApp & Call</div>
                <div className="contact-item-value">+{activeNumber}</div>
                <div className="contact-item-sub">Instant response for bookings & quotations</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-item-title">Email Enquiries</div>
                <div className="contact-item-value">{BRAND_CONFIG.email}</div>
                <div className="contact-item-sub">For commercial brand proposals & collaborations</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-item-title">Base Studio & Coverage</div>
                <div className="contact-item-value">{BRAND_CONFIG.location}</div>
                <div className="contact-item-sub">Shoots across Telangana & Andhra Pradesh</div>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-wrapper">
                <Clock size={20} />
              </div>
              <div>
                <div className="contact-item-title">Working Hours</div>
                <div className="contact-item-value">{BRAND_CONFIG.hours}</div>
                <div className="contact-item-sub">Available 7 days a week</div>
              </div>
            </div>
          </div>

          {/* Direct CTA Column (PRD Section 13 Copy) */}
          <div className="contact-cta-wrapper">
            <div className="contact-cta-card">
              <h3 className="contact-cta-title">
                Have a special moment to capture or an idea for your next reel?
              </h3>

              <p className="contact-cta-quote">
                Let's create something memorable together.
              </p>

              <div className="contact-dm-note">
                DM Adhiishoot for more details.
              </div>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg btn-full"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
