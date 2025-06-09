import NavBar from "../components/NavBar"; // Import NavBar
import Section from "../components/Section";
import "../styles/Community.css"; // Correct the path if necessary
import PageLayout from "../components/PageLayout";
import FramedPanel from "../components/FramedPanel";
import Divider from "../components/Divider";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer"; // Import Footer
import DiscordBanner from "../components/DiscordBanner";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Import social media icons

export default function Community() {
  return (
    <div className="relative min-h-screen bg-black text-white font-gothic community-bg">
      {/* ☠ NavBar */}
      <NavBar />

      {/* 🖤 Discord Section */}
      <Section className="py-20 text-center"> {/* Removed background="gradient" */}
        <h1 className="text-5xl md:text-6xl font-bold text-red-700 drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">
          Join Our Community
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          Connect with fellow gamers and developers on Discord and social media.
        </p>
        <DiscordBanner className="mt-10" />
      </Section>

      <Divider />

      {/* 🌐 Social Media Section */}
      <Section className="py-20"> {/* Removed background="dark" */}
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Follow Us on Social Media
        </h2>
        <PageLayout layout="grid" columns={3} gap="gap-8">
          <ScrollReveal>
            <FramedPanel
              title="Twitter"
              variant="default"
              className="cursor-pointer flex flex-col items-center"
            >
              <FaTwitter className="text-4xl text-blue-400 mb-4" /> {/* Twitter Icon */}
              <p className="text-gray-300 text-center">
                Stay updated with the latest news and announcements.
              </p>
              <a
                href="https://twitter.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 transition-all duration-300 mt-4"
              >
                Follow Us →
              </a>
            </FramedPanel>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FramedPanel
              title="YouTube"
              variant="default"
              className="cursor-pointer flex flex-col items-center"
            >
              <FaYoutube className="text-4xl text-red-600 mb-4" /> {/* YouTube Icon */}
              <p className="text-gray-300 text-center">
                Watch behind-the-scenes videos and trailers.
              </p>
              <a
                href="https://youtube.com/YOUR_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 transition-all duration-300 mt-4"
              >
                Subscribe →
              </a>
            </FramedPanel>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <FramedPanel
              title="Instagram"
              variant="default"
              className="cursor-pointer flex flex-col items-center"
            >
              <FaInstagram className="text-4xl text-pink-500 mb-4" /> {/* Instagram Icon */}
              <p className="text-gray-300 text-center">
                Explore concept art and sneak peeks of our projects.
              </p>
              <a
                href="https://instagram.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 transition-all duration-300 mt-4"
              >
                Follow Us →
              </a>
            </FramedPanel>
          </ScrollReveal>
        </PageLayout>
      </Section>

      <Divider />

      {/* 🌟 Community Highlights Section */}
      <Section className="py-20"> {/* Removed background="gradient" */}
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Community Highlights
        </h2>
        <PageLayout layout="grid" columns={2} gap="gap-8">
          <ScrollReveal>
            <FramedPanel title="Fan Art" variant="default">
              <p className="text-gray-300">
                Check out amazing fan art created by our talented community.
              </p>
              <button className="mt-4 text-red-500 hover:text-red-700 transition-all duration-300">
                View Gallery →
              </button>
            </FramedPanel>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <FramedPanel title="Top Contributors" variant="default">
              <p className="text-gray-300">
                Meet the top contributors who make our community special.
              </p>
              <button className="mt-4 text-red-500 hover:text-red-700 transition-all duration-300">
                Learn More →
              </button>
            </FramedPanel>
          </ScrollReveal>
        </PageLayout>
      </Section>

      <Divider />

      {/* Footer */}
      <Footer />
    </div>
  );
}
