import NavBar from "../components/NavBar";
import Section from "../components/Section";
import PageLayout from "../components/PageLayout";
import FramedPanel from "../components/FramedPanel";
//import Divider from "../components/Divider";
import Footer from "../components/Footer";
import "../styles/Games.css"; // Ensure the CSS file is imported

export default function Games() {
  const games = [
    {
      id: "crypthouse",
      title: "Crypthouse",
      description:
        "Descend into a procedurally shifting crypt where every choice awakens something forgotten.",
      image: "/assets/featured-crypt.png",
      link: "https://store.steampowered.com/app/YOUR_GAME_ID",
    },
    {
      id: "Placeholder",
      title: "Placeholder Game",
      description:
        "This is just placehilder text. Replace it with your game description.",
      image: "/assets/shattered-peaks.png",
      link: "https://store.steampowered.com/app/YOUR_GAME_ID",
    },
    {
      id: "Placeholder 2",
      title: "Placeholder Game 2",
      description: "Placeholder text. Replace it with your game description.",
      image: "/assets/abyssal-ruins.png",
      link: "https://store.steampowered.com/app/YOUR_GAME_ID",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white font-gothic games-bg">
      {/* ☠ NavBar */}
      <NavBar />

      {/* 🎮 Games Header */}
      <Section className="py-20 text-center">
        <FramedPanel variant="default" className="p-8 framed-panel-static">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">
            Our Games
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Explore our collection of immersive gothic experiences.
          </p>
        </FramedPanel>
      </Section>

      {/* 🎮 Games List */}
      <Section className="py-20">
        <PageLayout layout="grid" columns={3} gap="gap-8">
          {games.map((game) => (
            <FramedPanel
              key={game.id}
              title={game.title}
              variant="default"
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-300">{game.description}</p>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-red-500 hover:text-red-700 transition-all duration-300"
              >
                Learn More →
              </a>
            </FramedPanel>
          ))}
        </PageLayout>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
