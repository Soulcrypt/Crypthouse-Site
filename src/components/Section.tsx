interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "light" | "gradient";
  padding?: string; // Custom padding
  alignment?: "center" | "left" | "right"; // Content alignment
  style?: React.CSSProperties; // Add this line to allow inline styles
}

export default function Section({
  children,
  className = "",
  background,
  padding = "py-16",
  alignment = "center",
  style,
}: SectionProps) {
  const backgroundClasses = {
    dark: "bg-black text-white",
    light: "bg-gray-100 text-black",
    gradient: "bg-gradient-to-b from-gray-800 to-black text-white",
  };

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
      style={style} // Apply the inline styles here
    >
      {children}
    </section>
  );
}