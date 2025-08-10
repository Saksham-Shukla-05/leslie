import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Trust from "./components/Trust";
import ComingSoon from "./components/ComingSoon";
import Intro from "./components/Intro";
import RealResult from "./components/RealResult";
import BigMoment from "./components/BigMoment";
import HowLeslieHelp from "./components/HowLeslieHelp";
import InTheirOwnWords from "./components/InTheirOwnWords";
import SomeThing_Happen from "./components/SomeThing_Happen";
import Footer from "./components/Footer";
import OtherSays from "./components/OtherSays";

function App() {
  return (
    <main className="flex flex-col gap-5">
      <Navbar />
      <HeroSection />
      <Trust />
      <ComingSoon />
      <Intro />
      <RealResult />
      <OtherSays />
      <BigMoment />
      <HowLeslieHelp />
      <InTheirOwnWords />
      <SomeThing_Happen />
      <Footer />
    </main>
  );
}

export default App;
