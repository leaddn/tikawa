import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add routes for other pages like Menu, Gallery, Reviews, Contact */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

