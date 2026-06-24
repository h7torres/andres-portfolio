import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bio from "./pages/Bio";
import Landing from "./pages/Landing";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WorkDetail from "./pages/WorkDetail";
import NotFound from "./pages/NotFound";

function Contact() {
  return (
    <div className="px-10 mt-32 text-center text-lg font-mono">
      <p><a href="mailto:preciaan@bc.edu" className="text-blue-400 underline">Email</a></p>
      <p><a href="https://instagram.com/mr.ap123" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Instagram</a></p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/works" element={<Works />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works/:slug" element={<WorkDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;