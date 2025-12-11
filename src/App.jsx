import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import ITLeadershipEdge from "./pages/ITLeadershipEdge";
import LeadershipArticles from "./pages/LeadershipArticles";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  // Scroll reveal on page load + scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/leadership-articles" element={<LeadershipArticles />} />
            <Route path="/it-leadership-edge" element={<ITLeadershipEdge />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
