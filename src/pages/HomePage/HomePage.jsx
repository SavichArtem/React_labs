import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { FeaturesSection } from '../../components/FeaturesSection/FeaturesSection';
import { HowItWorksSection } from '../../components/HowItWorksSection/HowItWorksSection';


export function HomePage() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/>
    </div>
  );
}

export default HomePage;
