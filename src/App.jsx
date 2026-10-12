import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from './config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BookingForm } from './components/BookingForm';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { SocialSection } from './components/SocialSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloatingBtn } from './components/WhatsAppFloatingBtn';
import { NumberConfigModal } from './components/NumberConfigModal';
import './App.css';

export function App() {
  const [whatsappNumber, setWhatsappNumber] = useState(() => {
    const saved = localStorage.getItem('adhiishoot_wa_number');
    if (!saved || saved === '919876543210') {
      return BRAND_CONFIG.whatsappNumber;
    }
    return saved;
  });

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isFormHighlighted, setIsFormHighlighted] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Handle service selection from card or portfolio modal
  const handleSelectService = (serviceOrId) => {
    const serviceId = typeof serviceOrId === 'string' ? serviceOrId : serviceOrId.id;
    setSelectedServiceId(serviceId);
    
    // Scroll to booking section
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Trigger visual highlight pulse on form
    setIsFormHighlighted(true);
    setTimeout(() => {
      setIsFormHighlighted(false);
    }, 2800);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookShoot = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSaveNumber = (newNumber) => {
    setWhatsappNumber(newNumber);
    localStorage.setItem('adhiishoot_wa_number', newNumber);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <Navbar 
        onOpenConfig={() => setIsConfigModalOpen(true)}
        onBookClick={handleBookShoot}
        whatsappNumber={whatsappNumber}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onExploreServices={handleExploreServices}
          onBookShoot={handleBookShoot}
        />

        {/* Services & Transparent Pricing */}
        <Services 
          onSelectService={handleSelectService}
        />

        {/* Booking Enquiry Form with WhatsApp Click-to-Chat */}
        <BookingForm 
          selectedServiceId={selectedServiceId}
          whatsappNumber={whatsappNumber}
          isHighlighted={isFormHighlighted}
        />

        {/* Portfolio & Previous Works */}
        <Portfolio 
          onBookService={handleSelectService}
        />

        {/* About Adhiishoot */}
        <About />

        {/* Social Media Integration */}
        <SocialSection />

        {/* Direct Contact & Details */}
        <Contact 
          whatsappNumber={whatsappNumber}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingBtn 
        whatsappNumber={whatsappNumber}
      />

      {/* Destination Phone Configuration Modal */}
      {isConfigModalOpen && (
        <NumberConfigModal
          currentNumber={whatsappNumber}
          onSave={handleSaveNumber}
          onClose={() => setIsConfigModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
