import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Trust from "./components/Trust";
import ComingSoon from "./components/ComingSoon";
import Intro from "./components/Intro";
import RealResult from "./components/RealResult";
import WhatOtherSay from "./components/whatOtherSay";

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Trust />
      <ComingSoon />
      <Intro />
      <RealResult />
      <WhatOtherSay />
    </main>
  );
}

export default App;
