import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";

import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#121212] flex justify-center items-center p-4 md:p-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">

        {/* LEFT SIDEBAR */}
        <aside className="h-fit lg:sticky lg:top-10">
          <Navbar />
        </aside>

        {/* RIGHT CONTENT */}
        <main className="bg-[#1e1e1f] rounded-3xl p-8 border border-[#383838] relative min-h-[80vh]">
          <TopNav />

          {/* PAGE ANIMATION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Routes location={location}>
                {/* Default */}
                <Route path="/" element={<Navigate to="/about" replace />} />

                {/* Pages */}
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <footer className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            © 2026 Prabhat | All Rights Reserved | prabhatmmg007@gmail.com
          </footer>
        </main>

      </div>
    </div>
  );
}

export default App;
