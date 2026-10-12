import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import './WhatsAppFloatingBtn.css';

export const WhatsAppFloatingBtn = ({ whatsappNumber }) => {
  const activeNumber = whatsappNumber || BRAND_CONFIG.whatsappNumber;
  const whatsappUrl = `https://wa.me/${activeNumber}?text=${encodeURIComponent('Hi Adhiishoot! I want to ask about booking a video shoot / reel.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-floating-btn"
      aria-label="Direct WhatsApp Chat with Adhiishoot"
    >
      <MessageCircle size={22} />
      <span className="wa-floating-text">Chat with Crew</span>
      <span className="wa-btn-badge"></span>
    </a>
  );
};
