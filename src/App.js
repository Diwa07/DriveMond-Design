import React from "react";

import "./App.css";

import Price from "./app/price";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./app/HeroSection";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </Router>
  );
};

export default App;
