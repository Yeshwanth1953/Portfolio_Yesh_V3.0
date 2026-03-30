import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ModeProvider, useMode } from "./context/ModeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Dev mode pages
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Design mode pages
import HomeDesign from "./components/design/HomeDesign";
import ProjectsDesign from "./components/design/ProjectsDesign";
import ContactDesign from "./components/design/ContactDesign";

// Shared pages
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";

function AppRoutes() {
  const { mode } = useMode();
  const isDesign = mode === "design";

  return (
    <>
      <div className="particles">
        {Array.from({ length: 50 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <Navbar />

      <Routes>
        <Route path="/"              element={isDesign ? <HomeDesign />     : <Home />}     />
        <Route path="/projects"      element={isDesign ? <ProjectsDesign /> : <Projects />} />
        <Route path="/contact"       element={isDesign ? <ContactDesign />  : <Contact />}  />

        {/* Shared */}
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/achievements"   element={<Achievements />}   />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ModeProvider>
        <AppRoutes />
      </ModeProvider>
    </BrowserRouter>
  );
}