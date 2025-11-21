import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Import your pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Programs from './pages/Programs'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import LeadershipArticles from './pages/LeadershipArticles'
import ITLeadershipEdge from "./pages/ITLeadershipEdge";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Fixed Header */}
        <Header />

        {/* Main Content */}
        <main
          className="
            flex-grow 
            mt-24 sm:mt-28 md:mt-32 
            mb-16 sm:mb-20 md:mb-24 
            px-4 sm:px-6 md:px-8 
            max-w-7xl mx-auto w-full
          "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership-articles" element={<LeadershipArticles />} />
	    <Route path="/it-leadership-edge" element={<ITLeadershipEdge />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}
