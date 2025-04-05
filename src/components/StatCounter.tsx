import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  description: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, duration = 2000, suffix = '', description }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easeOutExpo for smoother animation
      const easeOutExpo = 1 - Math.pow(2, -10 * percentage);
      setCount(Math.floor(end * easeOutExpo));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (inView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, inView]);

  const formattedNumber = new Intl.NumberFormat('lt-LT').format(count);

  return (
    <div ref={ref} className="text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-bold text-[#9bc329] mb-2 relative">
        <span className="relative z-10">{formattedNumber}{suffix}</span>
        <div className="absolute inset-0 bg-[#9bc329]/10 blur-xl -z-10"></div>
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default StatCounter;