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
  // Tailwind's JIT won't detect classes built from dynamic strings,
  // so map supported values to explicit class names.
  const columnClasses: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  const gapClasses: Record<string, string> = {
    "gap-2": "gap-2",
    "gap-4": "gap-4",
    "gap-6": "gap-6",
    "gap-8": "gap-8",
  };

  // Build the set of utility classes based on the chosen layout.
  const layoutClasses =
    layout === "grid"
      ? `grid grid-cols-1 ${columnClasses[columns] || columnClasses[3]} ${
          gapClasses[gap] || gapClasses["gap-6"]
        }`
      : `flex flex-wrap ${gapClasses[gap] || gapClasses["gap-6"]}`;

  return (
    <>
      {/*
        A simple container that centers content and applies either a grid
        or flex layout depending on props.
      */}
      <div className={`max-w-7xl mx-auto px-6 py-12 ${layoutClasses} ${className}`}> 
        {children}
      </div>
    </>
  );
}