// Generic wrapper used throughout the site to enforce consistent spacing
// and background styling for different sections of each page.
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Background style shorthand */
  background?: "dark" | "light" | "gradient";
  /** Override default padding */
  padding?: string;
  /** Alignment helper for child content */
  alignment?: "center" | "left" | "right";
  /** Optional inline styles */
  style?: React.CSSProperties;
}

export default function Section({
  children,
  className = "",
  background,
  padding = "py-24",
  alignment = "center",
  style,
}: SectionProps) {
  // Reusable background presets
  const backgroundClasses = {
    dark: "bg-black text-white",
    light: "bg-gray-100 text-black",
    gradient: "bg-gradient-to-b from-gray-800 to-black text-white",
  };

  // Helpers for aligning inner content
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <section
      className={`${padding} ${
        background ? backgroundClasses[background] : ""
      } ${alignmentClasses[alignment]} ${className}`}
      style={style}
    >
      {/* Render caller-provided content */}
      {children}
    </section>
  );
}