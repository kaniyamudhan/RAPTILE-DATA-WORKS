import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export const HeroSection = ({ onExploreServices, onHireUs }: { 
  onExploreServices: () => void;
  onHireUs: () => void;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        <div 
          className="absolute w-2 h-2 bg-primary rounded-full opacity-60 animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.01}%`,
            top: `${30 + mousePosition.y * 0.01}%`,
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-neon-green rounded-full opacity-40 float-delayed"
          style={{
            left: `${70 + mousePosition.x * 0.005}%`,
            top: `${20 + mousePosition.y * 0.005}%`,
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-neon-violet rounded-full opacity-30 animate-float"
          style={{
            left: `${85 + mousePosition.x * 0.008}%`,
            top: `${60 + mousePosition.y * 0.008}%`,
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/lovable-uploads/0103d35b-f35d-4893-91ab-74a6d2182b0b.png" 
            alt="Raptile DataWorks Logo" 
            className="w-32 h-32 animate-float hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Main headline with 3D effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-slide-up">
          RAPTILE
          <br />
          <span className="text-gradient-violet">DATAWORKS</span>
        </h1>

        {/* Slogan */}
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-scale">
          We Craft Code, Build Brands, and Launch Careers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={onExploreServices}
            size="lg"
            className="glass-card neon-glow hover-lift group px-8 py-6 text-lg font-semibold"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            onClick={onHireUs}
            variant="outline"
            size="lg"
            className="glass-card neon-glow-green hover-lift group px-8 py-6 text-lg font-semibold border-accent"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Hire Us
          </Button>
        </div>

        {/* Stats or features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="glass-card p-6 hover-lift animate-fade-scale">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="glass-card p-6 hover-lift animate-fade-scale" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
          <div className="glass-card p-6 hover-lift animate-fade-scale" style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl font-bold text-neon-violet mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </section>
  );
};