import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import clsx from "classnames";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Games", path: "/games" },
    { name: "Devlog", path: "/devlog" },
    { name: "Community", path: "/community" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change background after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-red-900 shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔥 Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Crypthouse Studio Logo"
            className="w-10 h-10 object-contain transition-transform hover:scale-110 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
          />
          <span className="text-2xl md:text-3xl font-gothic text-red-700 drop-shadow-[0_0_5px_rgba(255,0,0,0.6)] hidden sm:inline">
            Crypthouse Studio
          </span>
        </NavLink>

        {/* 🔗 Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "transition duration-300",
                  isActive
                    ? "text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.6)]"
                    : "text-gray-300 hover:text-red-400"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* 📱 Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black border-t border-red-800">
          <nav className="flex flex-col p-4 space-y-3 text-gray-300">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  clsx(
                    "transition-all duration-300",
                    isActive
                      ? "text-red-500 drop-shadow-[0_0_5px_rgba(255,0,0,0.6)]"
                      : "hover:text-red-400"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* 🔔 Scrolling Notice */}
      {location.pathname === "/" && ( // Render only on the home screen
        <div className="bg-glass text-white text-sm py-2 overflow-hidden relative">
          <div className="scrolling-wrapper flex items-center hover:pause-scroll">
            <div className="scrolling-content flex-shrink-0 whitespace-nowrap px-4 mr-10">
              <NavLink
                to="/devlog"
                className="hover:underline text-center text-white hover:text-red-500 transition-all duration-300 animate-text-fill"
              >
                🏰 Check out our latest devlog: "Introducing Crypthouse Studio"
                →
              </NavLink>
            </div>
            <div className="scrolling-content flex-shrink-0 whitespace-nowrap px-4">
              <NavLink
                to="/devlog"
                className="hover:underline text-center text-white hover:text-red-500 transition-all duration-300 animate-text-fill"
              >
                🏰 Check out our latest devlog: "Introducing Crypthouse Studio"
                →
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
