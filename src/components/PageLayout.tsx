interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  layout?: "grid" | "flex"; // Choose between grid or flex layout
  columns?: number; // Number of columns for grid layout
  gap?: string; // Gap between items
}

export default function PageLayout({
  children,
  className = "",
  layout = "grid",
  columns = 3,
  gap = "gap-6",
}: PageLayoutProps) {
  const layoutClasses =
    layout === "grid"
      ? `grid grid-cols-1 md:grid-cols-${columns} ${gap}`
      : `flex flex-wrap ${gap}`;

  return (
    <div className={`max-w-7xl mx-auto px-6 py-12 ${layoutClasses} ${className}`}>
      {children}
    </div>
  );
}