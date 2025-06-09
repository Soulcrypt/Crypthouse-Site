export default function FogOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="w-full h-full bg-[url('/assets/fog.png')] bg-repeat opacity-60 animate-fogMotion blur-sm" />
      <div
        className="w-full h-full bg-[url('/assets/fog.png')] bg-repeat opacity-40 animate-fogMotion blur-md"
        style={{ animationDuration: "120s" }}
      />
    </div>
  );
}
