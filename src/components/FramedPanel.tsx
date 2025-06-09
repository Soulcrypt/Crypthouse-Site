import React from "react";
import clsx from "classnames";

interface FramedPanelProps {
  children: React.ReactNode;
  title?: string;
  variant?: "default" | "red" | "frost";
  className?: string;
  onClick?: () => void;
}

export default function FramedPanel({
  children,
  title,
  variant = "default",
  className = "",
  onClick,
}: FramedPanelProps) {
  const base =
    "relative bg-black bg-opacity-50 rounded-xl border p-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105 cursor-pointer bg-[url('/assets/texture.png')] bg-cover bg-center";

  const variantStyles = {
    default: "border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.8)]",
    red: "border-red-800 shadow-[0_0_30px_rgba(255,0,0,0.4)]",
    frost: "border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.4)]",
  };

  return (
    <div
      className={clsx(base, "framed-panel", variantStyles[variant], className)}
      onClick={onClick}
    >
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-[url('/assets/flourish-top-left.png')] bg-contain bg-no-repeat"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[url('/assets/flourish-bottom-right.png')] bg-contain bg-no-repeat"></div>
      {title && (
        <h2 className="text-xl md:text-2xl mb-4 font-bold text-gray-200 tracking-wide relative gothic-title">
          {title}
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></span>
        </h2>
      )}
      {children}
    </div>
  );
}
