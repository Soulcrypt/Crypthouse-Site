import { Link } from "react-router-dom";
import { FaDiscord, FaYoutube, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaTwitch } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-black to-gray-900 border-t border-red-900 text-gray-400 px-6 py-10 font-gothic">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo / Title */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl text-red-700 font-bold drop-shadow-[0_0_10px_rgba(255,0,0,0.7)]">
            Crypthouse Studio
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Born in the shadows of the grave.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <ul className="space-y-2 text-center md:text-left">
            {["Home", "Games", "Devlog", "Community"].map((name) => (
              <li key={name}>
                <Link
                  to={`/${name.toLowerCase()}`}
                  className="hover:text-red-500 transition-all duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-sm text-gray-500">Follow Us</p>
          <div className="flex gap-4 text-2xl text-gray-400">
            <a
              href="https://discord.gg/PqgWZS7XeX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaDiscord />
            </a>
            <a
              href="https://twitter.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com/@YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://twitch.tv/YOUR_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-all duration-300"
            >
              <FaTwitch />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Back to Top and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-500">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-red-500 hover:text-red-700 transition-all duration-300 mb-4 md:mb-0"
        >
          Back to Top
        </button>
        <p>
          © {new Date().getFullYear()} Crypthouse Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
