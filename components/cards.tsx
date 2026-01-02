"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CourseCard {
  name: string;
  duration: string;
}

const CourseCards: React.FC = () => {
  const courses: CourseCard[] = [
    {
      name: 'IIT JEE',
      duration: '12 months'
    },
    {
      name: 'NEET',
      duration: '10 months'
    },
    {
      name: 'UPSC',
      duration: '18 months'
    },
    {
      name: 'SSC CGL',
      duration: '8 months'
    },
    {
      name: 'DSA',
      duration: '6 months'
    },
    {
      name: 'AWS',
      duration: '4 months'
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  useLayoutEffect(() => {
    const viewportEl = viewportRef.current;
    const trackEl = trackRef.current;
    if (!viewportEl || !trackEl) return;

    const compute = () => {
      const viewportWidth = viewportEl.clientWidth;
      const trackWidth = trackEl.scrollWidth;
      const nextMaxTranslate = Math.max(0, trackWidth - viewportWidth);
      setMaxTranslate(nextMaxTranslate);
    };

    compute();

    const ro = new ResizeObserver(() => compute());
    ro.observe(viewportEl);
    ro.observe(trackEl);

    return () => ro.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Popular Courses
      </h2>
      <div ref={viewportRef} className="w-full overflow-hidden">
        <motion.div style={{ x }} className="will-change-transform">
          <div ref={trackRef} className="flex gap-2 px-4 min-w-max">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-64 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-2 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {course.name}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200 text-center">
                    Courses coming soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseCards;