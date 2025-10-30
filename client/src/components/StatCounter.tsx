import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ end, duration = 2000, suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);

        setCount(currentCount);

        if (now < endTime) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold font-sans mb-2 text-foreground" data-testid="text-stat-value">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground" data-testid="text-stat-label">
        {label}
      </div>
    </div>
  );
}
