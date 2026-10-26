import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Portfolio inquiry',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      firstInputRef.current?.focus();
    } else {
      document.body.classList.remove('modal-open');
      setStatusMessage('');
      setIsError(false);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setStatusMessage('Sending...');

    const submissionData = new FormData();
    submissionData.append('access_key', personal.web3FormsAccessKey || 'd6a3bdfd-7ce9-4dfa-a7e2-66607f3bb12e');
    submissionData.append('name', formData.name.trim());
    submissionData.append('email', formData.email.trim());
    if (formData.phone.trim()) {
      submissionData.append('phone', formData.phone.trim());
    }
    submissionData.append('subject', formData.subject.trim() || 'Portfolio Inquiry');
    submissionData.append('message', formData.message.trim());
    submissionData.append('from_name', formData.name.trim() || 'Portfolio Visitor');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });

      const data = await response.json();
      if (data.success) {
        setStatusMessage('Form Submitted Successfully! I will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'Portfolio inquiry',
          message: ''
        });
      } else {
        setIsError(true);
        setStatusMessage(data.message || 'Error sending message. Please try again or WhatsApp me.');
      }
    } catch (error) {
      setIsError(true);
      setStatusMessage('Network error. Please try again or reach out directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`contact-modal ${isOpen ? 'is-open' : ''}`}
      id="contact-form"
      aria-hidden={!isOpen}
    >
      <div
        className="modal-backdrop"
        onClick={onClose}
        data-contact-close
      ></div>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-form-title"
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Close contact form"
          onClick={onClose}
        >
          ×
        </button>
        <p className="overline">PROJECT INQUIRY</p>
        <h2 id="contact-form-title">Tell me about your idea.</h2>

        <form className="message-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              Name{' '}
              <input
                ref={firstInputRef}
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email{' '}
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="field-grid">
            <label>
              Phone{' '}
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              Subject{' '}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label>
            Message{' '}
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <p
            className={`form-status ${isError ? 'is-error' : ''}`}
            role="status"
            aria-live="polite"
          >
            {statusMessage}
          </p>
          <button
            className="button form-send"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Form'}{' '}
            <span>↗</span>
          </button>
        </form>
      </div>
    </div>
  );
}
