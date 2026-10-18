import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PORTFOLIO_ITEMS } from "../data/portfolio";
import { PortfolioModal } from "./PortfolioModal";
import { Play } from "lucide-react";

import "swiper/css";
import "./ReelsCarousel.css";

export default function ReelsCarousel({ onBookService }) {
  const [activeItem, setActiveItem] = useState(null);

  // Double items to ensure seamless infinite looping on all screen sizes
  const reels = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS].map((item, index) => ({
    id: `${item.id}-${index}`,
    image: item.thumbnail,
    title: item.title,
    duration: item.duration,
    category: item.category,
    videoUrl: item.videoUrl,
    rawItem: item
  }));

  return (
    <section id="portfolio" className="reels-section">
      <div className="reels-header">
        <span className="reels-eyebrow">Featured Showcase</span>
        <h2 className="reels-title">
          Our Portfolio & <span className="text-red">Reels</span>
        </h2>
        <p className="reels-subtitle">
          Shot on iPhone with cinematic mobile rigs. Tap any reel to watch.
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

              <div className="reel-top-badge">
                <span className="reel-time">{reel.duration}</span>
              </div>

              <div className="reel-overlay">
                <span className="reel-cat">{reel.category}</span>
                <h3>{reel.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
