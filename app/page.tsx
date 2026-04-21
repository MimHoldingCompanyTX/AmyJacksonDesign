"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Transformations from './components/Transformations';
import Services from './components/Services';
import Expectations from './components/Expectations';
import Contact from './components/Contact';

const content = {
  heroTitle: "Design for the Life You Love",
  heroSubtitle: "We don't just refresh rooms; we transform necessities into destinations.",
  heroCtaBooking: "Book Your Consultation",
  storyTitle: "The Heart Behind the Design",
  storyCopy: "Amy translates her unique journey of purpose into design that prioritizes elegance and true connection to your home, serving the classic residences of our community.",
  storyQuote: "\"Stop just living with your space. Fall in love with it.\"",
  transTitle: "The Power of Transformation",
  transCopy: "Discover the potential in your forgotten or underused spaces. Tap the image to see the change.",
  labelAfter: "TAP TO SEE BEFORE",
  labelBefore: "TAP TO SEE AFTER",
  story1Title: "Story #1: From Ignored to Inviting",
  story2Title: "Story #2: From Cluttered to Calm",
  servicesTitle: "Design Services",
  expectationsTitle: "What to Expect",
  expectationsStep1: "1. Book Your Consultation",
  expectationsStep2: "2. We'll Discuss Your Vision & Space",
  expectationsStep3: "3. Receive Customized Design Recommendations",
  expectationsStep4: "4. Implement Changes Together",
  expectationsStep5: "5. Love Your Transformed Space",
  service1Title: "Service 1",
  service1Copy: "New service details coming soon",
  service2Title: "Service 2",
  service2Copy: "New service details coming soon",
  contactTitle: "Begin Your Transformation",
  contactCopy: "Ready to fall in love with your space? Schedule a complimentary initial consultation.",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactPhone: "Phone Number",
  contactMessage: "Tell us about your project...",
  contactSubmit: "Request Consultation",
  contactSending: "Sending...",
  contactSuccess: "Thank You! Your request has been sent successfully.",
  navStory: "The Story",
  navTransformations: "Transformations",
  navServices: "Services",
  navContact: "Contact",
  footer: "© 2026 Amy Jackson Design."
};

export default function Home() {
  const [showBefore, setShowBefore] = useState(false);

  const toggleImage = () => {
    setShowBefore(!showBefore);
  };

  return (
    <div className="min-h-screen">
      <Header t={content} />
      
      <main className="pt-36 md:pt-20">
        <Hero t={content} />
        
        <Story t={content} />
        
        <Transformations 
          t={content}
          showBefore={showBefore}
          toggleImage={toggleImage}
        />
        
        <Services t={content} />
        
        <Expectations t={content} />
        
        <Contact t={content} />
      </main>
      
      <div className="fixed bottom-4 left-4 text-xs text-gray-400 opacity-50 z-10">
        v1.0
      </div>
    </div>
  );
}