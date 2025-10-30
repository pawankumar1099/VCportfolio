import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
      data-testid="scroll-progress-bg"
    >
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        data-testid="scroll-progress-bar"
      />
    </div>
  );
}
