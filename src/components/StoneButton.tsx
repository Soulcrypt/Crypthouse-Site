interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary";
    className?: string;
  }
  
  export default function StoneButton({
    children,
    onClick,
    type = "button",
    variant = "primary",
    className = "",
  }: Props) {
    const base = "relative px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 button-glow";
    const variants = {
      primary: "bg-gray-800 text-white shadow-[0_0_15px_rgba(255,0,0,0.2)] hover:bg-red-700",
      secondary: "bg-gray-600 text-white border border-gray-400 hover:bg-gray-500",
    };
  
    return (
      <button
        onClick={onClick}
        type={type}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
