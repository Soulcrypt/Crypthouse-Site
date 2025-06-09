import bgVideo from "/assets/bg.mov";

export default function GraveWallpaper() {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <img
          src="/assets/graveyard-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))",
        }}
      />
    </div>
  );
}
