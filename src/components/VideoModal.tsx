interface Props {
  onClose: () => void;
}

/** Simple fullscreen modal used to display the promotional trailer. */
export default function VideoModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="w-[90%] max-w-3xl relative">
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={onClose}
        >
          ✕
        </button>
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/YOUR_TRAILER_ID?autoplay=1"
          title="Crypthouse Studio Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
}
  