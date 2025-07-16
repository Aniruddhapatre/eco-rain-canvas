import RainEffect from '@/components/RainEffect.jsx';
import Navbar from '@/components/Navbar.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import ImpactSection from '@/components/ImpactSection.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Rain Effect */}
      <RainEffect />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>
        
        {/* Impact Section */}
        <div id="impact">
          <ImpactSection />
        </div>
        
        {/* Additional sections can be added here */}
        <div id="about" className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Our Mission</h2>
            <p className="text-xl text-muted-foreground">More content coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
