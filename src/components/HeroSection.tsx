import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Code, Bot, Cpu } from "lucide-react";
import heroBackground from "@/assets/hero-bg-futuristic.jpg";

export const HeroSection = ({ onExploreServices, onHireUs }: { 
  onExploreServices: () => void;
  onHireUs: () => void;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "We Craft Code, Build Brands, and Launch Careers.",
    "AI Automation • Digital Solutions • Career Growth",
    "Transforming Ideas into Digital Reality"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(180,100,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(180,100,50,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-4 h-4 border border-primary/40 rotate-45 animate-float"
          style={{
            left: `${15 + mousePosition.x * 0.01}%`,
            top: `${25 + mousePosition.y * 0.01}%`,
          }}
        />
        <div 
          className="absolute w-6 h-6 border border-neon-green/40 rounded-full animate-pulse"
          style={{
            left: `${75 + mousePosition.x * 0.005}%`,
            top: `${15 + mousePosition.y * 0.005}%`,
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-neon-violet/40 rotate-12 animate-float"
          style={{
            left: `${85 + mousePosition.x * 0.008}%`,
            top: `${70 + mousePosition.y * 0.008}%`,
          }}
        />
        <div 
          className="absolute w-8 h-1 bg-primary/30 animate-pulse"
          style={{
            left: `${10 + mousePosition.x * 0.006}%`,
            top: `${80 + mousePosition.y * 0.006}%`,
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo with Glow Effect */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
            <img 
              src="/lovable-uploads/0103d35b-f35d-4893-91ab-74a6d2182b0b.png" 
              alt="Raptile DataWorks Logo" 
              className="relative w-32 h-32 animate-float hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Company Name with Futuristic Styling */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold animate-slide-up tracking-wider">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-neon-green to-primary animate-pulse blur-sm">
                RAPTILE
              </span>
              <span className="relative text-gradient animate-pulse">
                RAPTILE
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-primary to-neon-violet animate-pulse blur-sm">
                DATAWORKS
              </span>
              <span className="relative text-gradient-violet animate-pulse">
                DATAWORKS
              </span>
            </span>
          </h1>
        </div>

        {/* Rotating Slogan */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-scale max-w-3xl">
            {rotatingTexts[currentText]}
          </p>
        </div>

        {/* Futuristic Tech Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <div className="p-3 glass-card rounded-full animate-pulse hover:neon-glow transition-all cursor-pointer">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <div className="p-3 glass-card rounded-full animate-pulse hover:neon-glow transition-all cursor-pointer" style={{ animationDelay: '0.5s' }}>
            <Code className="h-6 w-6 text-neon-green" />
          </div>
          <div className="p-3 glass-card rounded-full animate-pulse hover:neon-glow transition-all cursor-pointer" style={{ animationDelay: '1s' }}>
            <Cpu className="h-6 w-6 text-neon-violet" />
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            onClick={onExploreServices}
            size="lg"
            className="glass-card neon-glow hover-lift group px-10 py-8 text-xl font-bold relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-neon-green/20 animate-pulse" />
            <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform relative z-10" />
            <span className="relative z-10">Explore Services</span>
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform relative z-10" />
          </Button>
          
          <Button
            onClick={onHireUs}
            variant="outline"
            size="lg"
            className="glass-card neon-glow-green hover-lift group px-10 py-8 text-xl font-bold border-2 border-accent relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-neon-green/10 animate-pulse" />
            <Zap className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10">Hire Us</span>
          </Button>
        </div>

        {/* Enhanced Stats with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 hover-lift animate-fade-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl md:text-5xl font-bold text-primary mb-3 relative z-10">50+</div>
            <div className="text-sm md:text-base text-muted-foreground relative z-10">Projects Delivered</div>
          </div>
          
          <div className="glass-card p-8 hover-lift animate-fade-scale relative overflow-hidden group" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl md:text-5xl font-bold text-accent mb-3 relative z-10">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground relative z-10">AI Automation</div>
          </div>
          
          <div className="glass-card p-8 hover-lift animate-fade-scale relative overflow-hidden group" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-4xl md:text-5xl font-bold text-neon-violet mb-3 relative z-10">100%</div>
            <div className="text-sm md:text-base text-muted-foreground relative z-10">Future Ready</div>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse opacity-30" 
             style={{ top: '20%', animationDuration: '2s' }} />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-pulse opacity-20" 
             style={{ top: '60%', animationDuration: '3s', animationDelay: '1s' }} />
      </div>
    </section>
  );
};