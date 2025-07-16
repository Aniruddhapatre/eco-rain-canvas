import { ArrowRight, Play, TreePine, Droplets, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingCard from './FloatingCard';
import forestHero from '@/assets/forest-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${forestHero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <TreePine className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Environmental Conservation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Restoring Our Planet{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                One Project
              </span>{' '}
              at a Time
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're dedicated to environmental conservation through innovative tree planting, 
              water restoration, and sustainable community development programs that create 
              lasting positive impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Explore Our Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">CO₂ Reduced</div>
            </div>
          </div>
        </div>

        {/* Right Column - Floating Cards */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <FloatingCard delay={0.2} className="text-center">
              <TreePine className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Forest Restoration</h3>
              <p className="text-sm text-muted-foreground">
                Planting native trees to restore biodiversity
              </p>
            </FloatingCard>

            <FloatingCard delay={0.4} className="text-center mt-8">
              <Droplets className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Water Conservation</h3>
              <p className="text-sm text-muted-foreground">
                Protecting water sources and watersheds
              </p>
            </FloatingCard>

            <FloatingCard delay={0.6} className="text-center">
              <Wind className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Clean Energy</h3>
              <p className="text-sm text-muted-foreground">
                Promoting renewable energy solutions
              </p>
            </FloatingCard>

            <FloatingCard delay={0.8} className="text-center mt-8">
              <div className="h-8 w-8 bg-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">♻️</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Building sustainable communities
              </p>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;