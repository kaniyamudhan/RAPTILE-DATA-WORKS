import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Zap, 
  Target, 
  Users, 
  Sparkles, 
  ArrowRight,
  Calendar,
  Globe,
  Settings
} from "lucide-react";
import aboutHeroImage from "@/assets/about-hero-image.jpg";
import aboutBgFuturistic from "@/assets/about-bg-futuristic.jpg";

const stats = [
  {
    icon: Calendar,
    label: "Founded",
    value: "2025",
    description: "Starting fresh with cutting-edge vision"
  },
  {
    icon: Bot,
    label: "AI Solutions",
    value: "100+",
    description: "Automated processes delivered"
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: "50+",
    description: "Businesses transformed"
  },
  {
    icon: Globe,
    label: "Global Reach",
    value: "24/7",
    description: "Support & availability"
  }
];

const features = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Advanced automation solutions that streamline your business processes and boost efficiency.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description: "Quick implementation of AI tools into your existing workflow with minimal disruption.",
    color: "text-neon-green"
  },
  {
    icon: Target,
    title: "Precision Results",
    description: "Data-driven solutions that deliver measurable outcomes and ROI for your business.",
    color: "text-neon-violet"
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description: "Tailored AI implementations designed specifically for your industry and requirements.",
    color: "text-accent"
  }
];

export const AboutSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Futuristic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${aboutBgFuturistic})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-scale">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            About Raptile DataWorks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are an upcoming technology company dedicated to enhancing your business 
            with cutting-edge AI automation solutions.
          </p>
        </div>

        {/* Hero Image and Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Founded in 2025</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gradient-violet mb-4">
                Pioneering AI Automation
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in AI automation, transforming traditional business processes 
                into intelligent, efficient systems. Our mission is to empower businesses 
                with the tools they need to thrive in the digital age.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From small startups to established enterprises, we deliver customized 
                automation solutions that drive growth, reduce costs, and unlock new 
                opportunities for innovation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="neon-glow hover-lift group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover-lift border-primary/20 hover:border-primary/40"
              >
                View Our Services
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative overflow-hidden rounded-3xl glass-card p-1">
              <img 
                src={aboutHeroImage}
                alt="Raptile DataWorks - AI Automation Specialists" 
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl animate-pulse-neon">
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold text-gradient">AI</div>
                  <div className="text-sm text-muted-foreground">Powered</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-2xl animate-pulse-neon" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8 text-neon-green" />
                <div>
                  <div className="text-2xl font-bold text-gradient">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="glass-card border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift group"
              >
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
            Why Choose Raptile DataWorks?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-card border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className={`h-6 w-6 ${feature.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-8 md:p-12 rounded-3xl border-primary/20">
          <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the future of business automation. Let's discuss how AI can revolutionize your operations.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="neon-glow hover-lift group text-lg px-8 py-4"
          >
            Start Your AI Journey
            <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};