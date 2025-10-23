import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { FeaturesSection } from '../../components/FeaturesSection/FeaturesSection';
import { HowItWorksSection } from '../../components/HowItWorksSection/HowItWorksSection';
import { GettingStarted } from '../../components/GettingStarted/GettingStarted';
import { Footer } from '../../components/Footer/Footer';

export function HomePage() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
      <GettingStarted/>
      <Footer/>
    </div>
  );
}

export default HomePage;
