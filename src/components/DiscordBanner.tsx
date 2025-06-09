import { FaDiscord } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal"; // Import ScrollReveal for animation
import "./DiscordBanner.css"; // Import the CSS file

export default function DiscordBanner({ className }: { className?: string }) {
  return (
    <ScrollReveal delay={0.2} duration={0.8}>
      <div className={`discord-banner shadow-lg ${className}`}>
        <div className="flex items-center justify-center mb-6">
          <FaDiscord className="text-6xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </div>
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Join Our Discord
        </h2>
        <p className="text-lg text-gray-300 text-center mb-8">
          Connect with fellow gamers, share your ideas, and stay updated with the latest news!
        </p>
        <div className="flex justify-center">
          <a
            href="https://discord.gg/PqgWZS7XeX"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button bg-red-600 text-white font-bold py-3 px-8 rounded-full text-lg"
          >
            Join Now
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}