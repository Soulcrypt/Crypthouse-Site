import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games"; // Assuming Games is part of Home
import Devlog from "./pages/Devlog";
import Community from "./pages/Community"; // Import Community page
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} /> {/* Assuming Games is part of Home */}
        <Route path="/devlog" element={<Devlog />} />
        <Route path="/community" element={<Community />} /> {/* Add Community route */}
      </Routes>
      <ScrollToTopButton />
    </>
  );
}
