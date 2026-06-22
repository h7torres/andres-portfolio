import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from "./pages/Bio";
import Navbar from "./components/Navbar";
import WorkGrid from "./components/WorkGrid";
import WorkDetail from "./pages/WorkDetail";

function Home() {
  return <WorkGrid />;
}

function Contact() {
  return (
    <div className="px-10 mt-32 text-center text-lg font-mono">
      <p>
        For direct email contact :{" "}
        <a href="mailto:preciaan@bc.edu" className="text-blue-400 underline">
          preciaan@bc.edu
        </a>
      </p>
      <p>
        Instagram :{" "}
        <a href="https://instagram.com/mr.ap123" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">mr.ap123</a>
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works/:slug/:index" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;