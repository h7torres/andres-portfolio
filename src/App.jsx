import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from "./pages/Bio";
import Landing from "./pages/Landing";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import WorkDetail from "./pages/WorkDetail";

function Contact() {
  return (
    <div className="px-10 mt-32 text-center text-lg font-mono">
      <p>
        <a href="mailto:preciaan@bc.edu" className="text-blue-400 underline">
          Email
        </a>
      </p>
      <p>
        <a href="https://instagram.com/mr.ap123" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Instagram</a>
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/works" element={<Works />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/:slug/:index" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;