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
      
      setCount(Math.floor(end * percentage));

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
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#9bc329] mb-2">
        {formattedNumber}{suffix}
      </div>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};

export default StatCounter;