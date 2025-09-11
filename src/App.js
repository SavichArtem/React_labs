import './App.css';
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import CustomersSection from './components/customersSection';
import PlanSection from './components/planSection';
import Features from './components/features';
import StatsSection from './components/statsSection';
import BlogSection from './components/blogSection';
import QuotesSection from './components/quotesSection';

function App() {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/", icon: "Facebook_logo.svg" },
    { name: "Telegram", url: "https://web.telegram.org/", icon: "Telegram_logo.svg" },
    { name: "Twitter", url: "https://x.com/", icon: "Twitter_logo.svg" },
    { name: "Medium", url: "", icon: "M_logo.svg" }
  ];

  const navItems = [
    { id: 1, title: "Home", href: "#Home" },
    { id: 2, title: "Blog", href: "#Blog" },
    { id: 3, title: "Features", href: "#Features" },
    { id: 4, title: "Pricing", href: "#Catalog" },
    { id: 5, title: "Documentation", href: "#Documentation" }
  ];

  return (
    <div className="App">
      <Header socialLinks={socialLinks} navItems={navItems}/>
      <HeroSection />
      <CustomersSection />
      <PlanSection />
      <Features />
      <StatsSection />
      <BlogSection />
      <QuotesSection />
    </div>
  );
}

export default App;