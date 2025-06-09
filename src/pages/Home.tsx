import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from "../components/NavBar";
import GraveWallpaper from "../components/GraveWallpaper";
import FogOverlay from "../components/FogOverlay";
import StoneButton from "../components/StoneButton";
import VideoModal from "../components/VideoModal";
import FramedPanel from "../components/FramedPanel";
import DiscordStrip from "../components/DiscordStrip";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Divider from "../components/Divider";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-gothic text-white">
      {/* ☠ NavBar */}
      <NavBar />

      {/* ☠ Hero Section */}
      <Section background="gradient" className="relative z-0 min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <GraveWallpaper />
          <FogOverlay />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-40 md:py-60">
          <h1
            className="text-5xl md:text-7xl font-bold tracking-widest text-red-700 drop-shadow-[0_0_20px_rgba(255,0,0,0.3)] hero-title"
            data-aos="fade-up"
          >
            Crypthouse Studio
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Immersive gothic experiences born in the shadows of the grave.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <StoneButton onClick={() => setShowTrailer(true)}>
              ▶ Watch Trailer
            </StoneButton>
            <a
              href="https://store.steampowered.com/app/YOUR_GAME_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StoneButton variant="secondary">
                💀 Wishlist on Steam
              </StoneButton>
            </a>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <Divider />

      {/* 🧩 Featured Game Section */}
      <Section
        background="dark"
        padding="py-20"
        className="featured-game-section relative"
      >
        <PageLayout layout="grid" columns={2} gap="gap-8">
          <ScrollReveal delay={0.1}>
            <FramedPanel title="Featured Game: Crypthouse" variant="default">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src="/assets/featured-crypt.png"
                  alt="Crypthouse Game Key Art"
                  className="w-full md:w-1/2 rounded-lg shadow-lg border border-gray-700"
                />
                <div className="flex-1 text-left space-y-4">
                  <h3 className="text-3xl text-red-700 font-bold tracking-wide">
                    Crypthouse
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Descend into a procedurally shifting crypt where every
                    choice awakens something forgotten. Explore the depths,
                    uncover secrets, and face the unknown.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <StoneButton
                      className="featured-game-button"
                      onClick={() => console.log("Go to game page")}
                    >
                      🎮 View Game
                    </StoneButton>
                    <a
                      href="https://store.steampowered.com/app/YOUR_GAME_ID"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <StoneButton
                        variant="secondary"
                        className="featured-game-button"
                      >
                        💀 Wishlist
                      </StoneButton>
                    </a>
                  </div>
                </div>
              </div>
            </FramedPanel>
          </ScrollReveal>
        </PageLayout>
      </Section>

      {/* Divider */}
      <Divider />

      {/* 🎥 Modal */}
      {showTrailer && <VideoModal onClose={() => setShowTrailer(false)} />}

      {/* 💬 Discord + Footer */}
      <DiscordStrip />
      <Footer />
    </div>
  );
}
