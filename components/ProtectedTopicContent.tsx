'use client';

import React, { useEffect, useRef } from 'react';
import { SubscriptionCheck } from '@/components/SubscriptionCheck';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProtectedTopicContentProps {
  content: string;
}

export default function ProtectedTopicContent({ content }: ProtectedTopicContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    // Initial fade-in animation
    gsap.fromTo(container, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    // Animate content sections on scroll
    const paragraphs = content.querySelectorAll('p, h2, h3, h4, div');
    
    paragraphs.forEach((element, index) => {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          y: 20,
          transform: 'translateY(20px)'
        },
        {
          opacity: 1,
          y: 0,
          transform: 'translateY(0)',
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
      });
    });

    // Parallax effect for the main container
    gsap.to(container, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <SubscriptionCheck requiredLevel="premium" feature="course materials">
      <div ref={containerRef} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
        <div ref={contentRef} className="prose prose-lg prose-sky max-w-none">
          <div className="text-gray-800 leading-relaxed space-y-6">
            {content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h4 key={index} className="text-xl font-medium text-gray-800 mt-4 mb-2">
                    {paragraph.replace('### ', '')}
                  </h4>
                );
              }
              if (paragraph.trim() === '') {
                return <div key={index} className="h-4" />;
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </SubscriptionCheck>
  );
}
