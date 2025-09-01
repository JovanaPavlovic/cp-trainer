import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import ProblemSolution from "./components/ProblemSolution";
import Applications from "./components/Applications";
import TechnicalOverview from "./components/TechnicalOverview";
// import EULocalization from "./components/EULocalization";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ProblemSolution />
      <Features />
      <Applications />
      <TechnicalOverview />
      <SocialProof/>
      {/* <EULocalization/> */}
      <FAQ/>
      <Footer />
    </div>
  );
}

export default App;
