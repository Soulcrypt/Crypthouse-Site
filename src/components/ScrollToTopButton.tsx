import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "classnames";

/** Button that fades in after the user scrolls down, allowing a quick jump back to the top. */
export default function ScrollToTopButton() {
  // Track whether the button should be shown
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Floating action button
    <button
      onClick={scrollToTop}
      className={clsx(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full bg-red-700 text-white shadow-lg transition-opacity duration-300 hover:bg-red-600",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
