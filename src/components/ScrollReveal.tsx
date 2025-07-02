import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  /** Delay before the animation begins */
  delay?: number;
  /** Start offset on the Y axis */
  yOffset?: number;
  /** Duration of the animation */
  duration?: number;
}

/**
 * Wraps content in an element that fades in when it enters the viewport.
 */
export default function ScrollReveal({
  children,
  delay = 0.2,
  yOffset = 30,
  duration = 0.6, // Default duration value
}: Props) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is visible
    rootMargin: "0px 0px -20% 0px", // Trigger when the element is 20% into the viewport
  });

  useEffect(() => {
    // Start the reveal animation once the element is in view
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
      transition={{ duration, delay }}
    >
      {/* reveal target content */}
      {children}
    </motion.div>
  );
}

