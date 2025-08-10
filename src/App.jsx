import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Trust from "./components/Trust";
import ComingSoon from "./components/ComingSoon";
import Intro from "./components/Intro";
import RealResult from "./components/RealResult";
import WhatOtherSay from "./components/whatOtherSay";
import BigMoment from "./components/BigMoment";
import HowLeslieHelp from "./components/HowLeslieHelp";
import InTheirOwnWords from "./components/InTheirOwnWords";

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
      <BigMoment />
      <HowLeslieHelp />
      <InTheirOwnWords />
    </main>
  );
}

export default App;
