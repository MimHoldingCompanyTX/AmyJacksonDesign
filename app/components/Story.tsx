"use client";

import Image from 'next/image';

interface StoryProps {
  t: any;
}

export default function Story({ t }: StoryProps) {
  return (
    <section id="story" className="py-16 px-5 md:px-10 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary text-center">
        {t.storyTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg text-dark leading-relaxed">
            {t.storyCopy}
          </p>
          <blockquote className="text-xl md:text-2xl font-serif italic text-accent border-l-4 border-accent pl-6 my-8">
            {t.storyQuote}
          </blockquote>
        </div>
        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1616137466211-2f7d5ec8c491?auto=format&fit=crop&q=80&w=800"
            alt="Interior design workspace"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}