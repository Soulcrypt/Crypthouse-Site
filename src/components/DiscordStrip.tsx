import { FaDiscord } from "react-icons/fa";

// Floating Discord link that stays fixed in the bottom corner
export default function DiscordStrip() {
  return (
    <a
      href="https://discord.gg/PqgWZS7XeX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-red-700 hover:bg-red-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 discord-strip"
      title="Join our Discord"
    >
      <FaDiscord className="text-xl animate-pulse" />
      <span className="hidden md:inline font-semibold">Join Discord</span>
    </a>
  );
}
