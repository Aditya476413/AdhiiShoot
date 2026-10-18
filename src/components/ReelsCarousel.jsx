import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PORTFOLIO_ITEMS } from "../data/portfolio";
import { BRAND_CONFIG } from "../config";
import { PortfolioModal } from "./PortfolioModal";
import { MessageCircle } from "lucide-react";

import "swiper/css";
import "./ReelsCarousel.css";

export default function ReelsCarousel({ onBookService }) {
  const [activeItem, setActiveItem] = useState(null);

  // Double items to ensure seamless infinite looping on all screen sizes
  const reels = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS].map((item, index) => ({
    id: `${item.id}-${index}`,
    image: item.thumbnail,
    title: item.title,
    price: item.price,
    category: item.category,
    videoUrl: item.videoUrl,
    rawItem: item
  }));

  return (
    <section id="portfolio" className="reels-section">
      <div className="reels-header">
        <span className="reels-eyebrow">ADHII⚡HOOT PRICE'S</span>
        <h2 className="reels-title">
          Our Portfolio & <span className="text-red">Transparent Pricing</span>
        </h2>
        <p className="reels-subtitle">
          Shot on iPhone with cinematic mobile rigs. Fixed transparent package prices.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.6}
        spaceBetween={16}
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={5}
        speed={4000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        allowTouchMove={true}
        breakpoints={{
          480: {
            slidesPerView: 2.2,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        className="reels-swiper"
      >
        {reels.map((reel) => (
          <SwiperSlide key={reel.id}>
            <div
              className="reel-card"
              onClick={() => setActiveItem(reel.rawItem)}
            >
              {reel.videoUrl ? (
                <video
                  src={reel.videoUrl}
                  poster={reel.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="reel-video-element"
                />
              ) : (
                <img src={reel.image} alt={reel.title} loading="lazy" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DM for More Details banner */}
      <div className="reels-dm-banner">
        <div className="dm-banner-content">
          <MessageCircle size={18} className="dm-icon" />
          <span>DM For More Details <strong>Adhiishoot</strong> on</span>
          <div className="dm-social-links">
            <a
              href={BRAND_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="dm-link"
            >
              Instagram
            </a>
            <span className="dm-dot">•</span>
            <a
              href={BRAND_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="dm-link"
            >
              Facebook
            </a>
            <span className="dm-dot">•</span>
            <a
              href={BRAND_CONFIG.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="dm-link"
            >
              YouTube
            </a>
            <span className="dm-dot">•</span>
            <a
              href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hi Adhiishoot! I would like to inquire about your video shoot packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="dm-link dm-link-wa"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Video / Reel Player Modal */}
      {activeItem && (
        <PortfolioModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onBookSimilar={(serviceId) => {
            setActiveItem(null);
            if (onBookService) onBookService(serviceId);
          }}
        />
      )}
    </section>
  );
}
