import { Header } from '../../components/Header/Header';
import { HeroSection } from '../../components/HeroSection/HeroSection';
import { FeaturesSection } from '../../components/FeaturesSection/FeaturesSection';


export function HomePage() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
    </div>
  );
}

export default HomePage;
