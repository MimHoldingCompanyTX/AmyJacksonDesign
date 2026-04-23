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
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-navy mb-4">
          {t.contactTitle}
        </h2>
        <div className="gold-accent mb-6"></div>
        <p className="text-lg text-navy/70 max-w-2xl mx-auto">
          {t.contactCopy}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-ivory p-10 border border-gray-100">
          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6 text-brass">✓</div>
              <h3 className="text-2xl font-serif font-semibold text-navy mb-4">Success!</h3>
              <p className="text-navy/70">{t.contactSuccess}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-3 tracking-widest uppercase">
                  {t.contactName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 bg-white text-navy focus:outline-none focus:border-brass transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-3 tracking-widest uppercase">
                  {t.contactEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 bg-white text-navy focus:outline-none focus:border-brass transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-3 tracking-widest uppercase">
                  {t.contactPhone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 bg-white text-navy focus:outline-none focus:border-brass transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-3 tracking-widest uppercase">
                  {t.contactMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-4 border border-gray-200 bg-white text-navy focus:outline-none focus:border-brass transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cta-button w-full py-5 text-sm tracking-widest uppercase"
              >
                {isSubmitting ? t.contactSending : t.contactSubmit}
              </button>
            </form>
          )}
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-ivory p-10 border border-gray-100">
            <h3 className="text-2xl font-serif font-semibold text-navy mb-8">
              Get In Touch
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-brass flex items-center justify-center text-brass text-xl">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-navy/60 tracking-widest uppercase mb-2">Email</p>
                  <p className="text-lg text-navy font-medium">amy@amyjacksondesign.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-brass flex items-center justify-center text-brass text-xl">
                  📞
                </div>
                <div>
                  <p className="text-sm text-navy/60 tracking-widest uppercase mb-2">Phone</p>
                  <p className="text-lg text-navy font-medium">(214) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-brass flex items-center justify-center text-brass text-xl">
                  📍
                </div>
                <div>
                  <p className="text-sm text-navy/60 tracking-widest uppercase mb-2">Service Area</p>
                  <p className="text-lg text-navy font-medium">Preston Hollow • University Park • Uptown Dallas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-navy text-white p-10">
            <h4 className="text-xl font-serif font-semibold mb-6">Office Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-sans font-light">Monday - Friday</span>
                <span className="font-sans font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-sans font-light">Saturday</span>
                <span className="font-sans font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-sans font-light">Sunday</span>
                <span className="font-sans font-medium">By appointment only</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center p-8 border border-gray-100">
            <p className="text-sm text-navy/60 tracking-widest uppercase mb-4">FOLLOW THE JOURNEY</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-navy hover:text-brass transition-colors">Instagram</a>
              <a href="#" className="text-navy hover:text-brass transition-colors">Pinterest</a>
              <a href="#" className="text-navy hover:text-brass transition-colors">Houzz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}