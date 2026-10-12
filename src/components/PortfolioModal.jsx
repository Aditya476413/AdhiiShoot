import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowRight, Video } from 'lucide-react';
import { SERVICES } from '../data/services';

export const PortfolioModal = ({ item, onClose, onBookSimilar }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!item) return null;

  const matchedService = SERVICES.find(s => s.id === item.serviceId);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Video Viewport / Simulated Player */}
        <div className="modal-video-viewport">
          <img 
            src={item.thumbnail} 
            alt={item.title} 
            className="modal-video-img"
          />

          {/* Player HUD */}
          <div className="simulated-player-bar">
            <div className="player-controls">
              <button 
                type="button" 
                className="player-play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <div className="player-time">
                <span>{isPlaying ? "00:14" : "00:00"} / {item.duration}</span>
              </div>
            </div>

            <div className="player-controls">
              <span className="hud-mono" style={{ fontSize: '0.72rem' }}>
                4K HDR • {item.aspectRatio}
              </span>
              <button 
                type="button" 
                style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Details & Specs */}
        <div className="modal-details">
          <div className="modal-header-line">
            <h3 className="modal-title">{item.title}</h3>
            <span className="modal-gear-tag">{item.gear}</span>
          </div>

          <p className="modal-desc">{item.description}</p>

          <div className="modal-actions">
            <div>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Package Reference:
              </span>
              <div style={{ fontWeight: 700, color: '#fff' }}>
                {matchedService ? `${matchedService.title} (${matchedService.formattedPrice})` : "Custom Production"}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onBookSimilar(item.serviceId);
              }}
            >
              Book Similar Shoot
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
