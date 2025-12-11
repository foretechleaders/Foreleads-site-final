import React from "react";
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
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />

            {/* NEW Leadership Articles Route */}
            <Route path="/leadership-articles" element={<LeadershipArticles />} />

            {/* Workshop Page */}
            <Route path="/it-leadership-edge" element={<ITLeadershipEdge />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
