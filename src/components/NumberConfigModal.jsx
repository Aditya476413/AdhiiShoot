import React, { useState } from 'react';
import { X, Sliders, Check, RotateCcw } from 'lucide-react';
import { BRAND_CONFIG } from '../config';
import './NumberConfigModal.css';

export const NumberConfigModal = ({ currentNumber, onSave, onClose }) => {
  const [val, setVal] = useState(currentNumber || BRAND_CONFIG.whatsappNumber);
  const [error, setError] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const clean = val.replace(/[^0-9]/g, '');
    if (clean.length < 10) {
      setError('Please enter a valid phone number with country code (e.g. 919989454334)');
      return;
    }
    onSave(clean);
    onClose();
  };

  const handleReset = () => {
    setVal(BRAND_CONFIG.whatsappNumber);
    setError('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="config-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="config-modal-header">
          <h3 className="config-modal-title">
            <Sliders size={20} color="#E50914" />
            <span>WhatsApp Destination Number</span>
          </h3>
          <button 
            type="button" 
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        <p className="config-note">
          Configure which WhatsApp phone number receives the booking enquiries from the website form. Include the country code without '+' (e.g. <code>919989454334</code> for India).
        </p>

        <form onSubmit={handleSave}>
          <div className="config-input-group">
            <label className="form-label" htmlFor="waNumberInput">
              Target Phone Number
            </label>
            <input
              id="waNumberInput"
              type="text"
              className={`form-input ${error ? 'input-error' : ''}`}
              style={{ paddingLeft: '14px', fontFamily: 'var(--font-mono)' }}
              value={val}
              onChange={(e) => {
                setVal(e.target.value);
                setError('');
              }}
              placeholder="919989454334"
            />
            {error && <span className="error-msg">{error}</span>}
          </div>

          <div className="config-actions">
            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={handleReset}
            >
              <RotateCcw size={14} />
              Reset to Default
            </button>

            <button 
              type="submit" 
              className="btn btn-primary btn-sm"
            >
              <Check size={14} />
              Save Destination
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
