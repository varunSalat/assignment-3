import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeOurServicesSection from "../components/home/HomeOurServicesSection";
import "../styles/home.css";
const HomePage = () => {
  return (
    <div className="home-container">
      <HomeHeroSection />
      <HomeOurServicesSection />
    </div>
  );
};

export default HomePage;
