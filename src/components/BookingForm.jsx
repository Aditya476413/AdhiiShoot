import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { SERVICES } from '../data/services';
import { BRAND_CONFIG } from '../config';
import { 
  User, 
  Phone, 
  Film, 
  Calendar, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  Flame,
  ExternalLink 
} from 'lucide-react';
import './BookingForm.css';

export const BookingForm = ({ selectedServiceId, whatsappNumber, isHighlighted }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: selectedServiceId || SERVICES[0].id,
    eventDate: '',
    location: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastGeneratedUrl, setLastGeneratedUrl] = useState('');

  // Update selected service when changed from external card click
  useEffect(() => {
    if (selectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  // Current active service object
  const currentService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  // Helper to check if current service requires event details
  const isEventService = currentService.requiresEventDetails;

  // Build the WhatsApp formatted message as specified in PRD Section 9.1
  const generateWhatsAppMessage = () => {
    const serviceName = currentService.title;
    const price = currentService.formattedPrice;
    const dateText = formData.eventDate ? formData.eventDate : (isEventService ? "To be discussed" : "N/A (Online / Remote Edit)");
    const locationText = formData.location ? formData.location : (isEventService ? "To be discussed" : "Online / Remote");
    const notesText = formData.notes ? formData.notes : "Please review and contact me with shoot details.";

    return `🎬 *NEW BOOKING ENQUIRY — ADHIISHOOT*

👤 *Customer Details*
Name: ${formData.name || "[Customer Name]"}
Phone: ${formData.phone || "[Phone Number]"}

📌 *Service Details*
Service: ${serviceName}
Price: ${price}
Event Date: ${dateText}
Location: ${locationText}

📝 *Additional Requirements*
${notesText}

Please contact the customer to discuss availability and confirm the booking.

— Adhiishoot Website`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on input
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (isEventService) {
      if (!formData.eventDate) {
        newErrors.eventDate = 'Event date is required for this shoot';
      }
      if (!formData.location.trim()) {
        newErrors.location = 'Event location / city is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const destinationNumber = whatsappNumber || BRAND_CONFIG.whatsappNumber;
    const whatsappUrl = `https://wa.me/${destinationNumber}?text=${encodedMessage}`;

    setLastGeneratedUrl(whatsappUrl);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E50914', '#FFFFFF', '#0A0A0A']
      });
    } catch (err) {
      // safe fallback
    }

    // Open WhatsApp Click-to-Chat in new window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-eyebrow">
            <Send size={14} />
            <span>Instant WhatsApp Booking</span>
          </div>
          <h2 className="section-title">
            Book Your <span className="text-red">Production Shoot</span>
          </h2>
          <p className="section-desc">
            Fill out your details below. Your enquiry will be immediately formatted and delivered directly to the Adhiishoot team via WhatsApp.
          </p>
        </div>

        {/* Layout Grid: Form + Live WhatsApp Preview */}
        <div className="booking-layout">
          {/* Main Form Card */}
          <div className={`booking-card ${isHighlighted ? 'form-highlight-pulse' : ''}`}>
            <div className="form-header">
              <span className="form-header-badge">
                <Flame size={12} />
                <span>Transparent Booking Flow</span>
              </span>
              <h3 className="form-header-title">Booking Enquiry Form</h3>
              <p className="form-header-desc">
                Select your service, fill in your details, and initiate instant chat with our videographers.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="form-grid">
              {/* Name Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  <span>Customer Name <span className="req">*</span></span>
                </label>
                <div className="input-wrap">
                  <User size={18} className="input-icon" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              {/* Phone Field */}
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  <span>WhatsApp Phone Number <span className="req">*</span></span>
                  <span className="hint">10 digits</span>
                </label>
                <div className="input-wrap">
                  <Phone size={18} className="input-icon" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {errors.phone && <span className="error-msg">{errors.phone}</span>}
              </div>

              {/* Service Selection Dropdown */}
              <div className="form-group">
                <label className="form-label" htmlFor="serviceId">
                  <span>Selected Service <span className="req">*</span></span>
                  <span className="hint">Fixed Advertised Rate</span>
                </label>
                <div className="input-wrap">
                  <Film size={18} className="input-icon" />
                  <select
                    id="serviceId"
                    name="serviceId"
                    className="form-select"
                    value={formData.serviceId}
                    onChange={handleChange}
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} — {s.formattedPrice}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Selected Service Pill Highlight */}
                <div className="selected-summary-pill">
                  <div className="summary-left">
                    <span className="summary-title">{currentService.title}</span>
                    <span className="summary-category">{currentService.category}</span>
                  </div>
                  <span className="summary-price">{currentService.formattedPrice}</span>
                </div>
              </div>

              {/* Conditional Event Date & Location Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="eventDate">
                    <span>
                      Event Date {isEventService && <span className="req">*</span>}
                    </span>
                    {!isEventService && <span className="hint">(Optional for edits)</span>}
                  </label>
                  <div className="input-wrap">
                    <Calendar size={18} className="input-icon" />
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      className={`form-input ${errors.eventDate ? 'input-error' : ''}`}
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.eventDate && <span className="error-msg">{errors.eventDate}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="location">
                    <span>
                      Location / City {isEventService && <span className="req">*</span>}
                    </span>
                    {!isEventService && <span className="hint">(Optional)</span>}
                  </label>
                  <div className="input-wrap">
                    <MapPin size={18} className="input-icon" />
                    <input
                      id="location"
                      name="location"
                      type="text"
                      className={`form-input ${errors.location ? 'input-error' : ''}`}
                      placeholder={isEventService ? "e.g. Hyderabad / Showroom name" : "e.g. Remote / Online"}
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.location && <span className="error-msg">{errors.location}</span>}
                </div>
              </div>

              {/* Additional Requirements / Notes */}
              <div className="form-group">
                <label className="form-label" htmlFor="notes">
                  <span>Additional Requirements</span>
                  <span className="hint">Optional</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  className="form-textarea"
                  placeholder="Mention any specific song preference, delivery date, custom shots, or reference reel links..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                <span>Send Booking Enquiry via WhatsApp 🚀</span>
              </button>

              {isSubmitted && lastGeneratedUrl && (
                <div style={{ marginTop: '12px', textAlign: 'center' }}>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                    Did WhatsApp not open automatically?{' '}
                    <a 
                      href={lastGeneratedUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#E50914', textDecoration: 'underline', fontWeight: 600 }}
                    >
                      Click here to launch chat directly <ExternalLink size={12} style={{ display: 'inline' }} />
                    </a>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
