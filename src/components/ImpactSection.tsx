import { Leaf, Users, Globe, Heart } from 'lucide-react';
import FloatingCard from './FloatingCard';
import treesImage from '@/assets/trees-daylight.jpg';
import mountainImage from '@/assets/mountain-landscape.jpg';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Leaf,
      value: '2.5M+',
      label: 'Trees Planted',
      description: 'Across 15 countries worldwide',
      color: 'text-green-400',
    },
    {
      icon: Users,
      value: '100K+',
      label: 'Lives Impacted',
      description: 'Communities supported globally',
      color: 'text-blue-400',
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Projects Active',
      description: 'Ongoing environmental initiatives',
      color: 'text-emerald-400',
    },
    {
      icon: Heart,
      value: '95%',
      label: 'Satisfaction Rate',
      description: 'From our community partners',
      color: 'text-rose-400',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${treesImage})` }}
        />
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${mountainImage})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-primary mb-4">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">
              Global Impact
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Creating{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Measurable Change
            </span>{' '}
            Together
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to environmental sustainability has resulted in tangible, 
            measurable impacts across the globe. Here's how we're making a difference.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <FloatingCard
                key={stat.label}
                delay={index * 0.1}
                className="text-center group cursor-pointer"
              >
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground group-hover:scale-105 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-primary">
                      {stat.label}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </FloatingCard>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <FloatingCard className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Mission
            </h3>
            <p className="text-muted-foreground mb-6">
              Every action counts. Be part of the solution and help us create 
              a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                Start Your Project
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-300">
                Learn More
              </button>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;