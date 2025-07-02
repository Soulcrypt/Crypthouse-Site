import { useEffect, useRef, useState } from "react";

/**
 * Hook that calculates a parallax offset based on scroll position.
 *
 * The offset is throttled using `requestAnimationFrame` for smoother
 * animations and to avoid excessive state updates on scroll.
 */
export function useParallax(speed: number) {
  // Track the current offset value
  const [offsetY, setOffsetY] = useState(0);
  // Store the animation frame id so it can be cancelled on unmount
  const frame = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Cancel any pending animation frame before scheduling a new one
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * speed);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return offsetY;
}
