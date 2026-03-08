import React, { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Animation direction: 'up' | 'down' | 'left' | 'right' | 'fade' */
  direction?: "up" | "down" | "left" | "right" | "fade";
  /** Delay in ms before animation starts after becoming visible */
  delay?: number;
  /** How much of the element must be visible to trigger (0-1) */
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  // Determine initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(60px)";
      case "down":
        return "translateY(-60px)";
      case "left":
        return "translateX(60px)";
      case "right":
        return "translateX(-60px)";
      case "fade":
        return "translateY(0)";
      default:
        return "translateY(60px)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
