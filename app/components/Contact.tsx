"use client";

import { useState } from 'react';

interface ContactProps {
  t: any;
}

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 px-5 md:px-10 bg-light">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary text-center">
          {t.contactTitle}
        </h2>
        <p className="text-lg text-dark text-center mb-12 max-w-2xl mx-auto">
          {t.contactCopy}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Success!</h3>
                <p className="text-dark">{t.contactSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    {t.contactName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                    {t.contactEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                    {t.contactPhone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    {t.contactMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="contact-input"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cta-button w-full py-4 text-lg"
                >
                  {isSubmitting ? t.contactSending : t.contactSubmit}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm text-dark opacity-75">Email</p>
                    <p className="text-lg text-primary">amy@amyjacksondesign.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent">📞</span>
                  </div>
                  <div>
                    <p className="text-sm text-dark opacity-75">Phone</p>
                    <p className="text-lg text-primary">(214) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-dark opacity-75">Service Area</p>
                    <p className="text-lg text-primary">Preston Hollow • University Park • Uptown Dallas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-lg">
              <h4 className="text-xl font-serif font-bold mb-4">Office Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>By appointment only</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-dark">
            {t.footer}
          </p>
        </footer>
      </div>
    </section>
  );
}