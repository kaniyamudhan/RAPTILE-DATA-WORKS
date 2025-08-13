import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { HireSection } from "@/components/HireSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingHelpBot } from "@/components/FloatingHelpBot";
import { Button } from "@/components/ui/button";
import { ArrowUp, Menu, X } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    scrollToSection('services');
  };

  const handleHireUs = () => {
    scrollToSection('hire');
  };

  const handleContactUs = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-card border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/0103d35b-f35d-4893-91ab-74a6d2182b0b.png" 
                alt="Raptile DataWorks" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-gradient">Raptile DataWorks</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('hire')}
                className="hover:text-primary transition-colors"
              >
                Hire Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="hover:text-primary transition-colors"
              >
                Reviews
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                size="sm"
                className="neon-glow"
              >
                Contact
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-primary/10">
              <div className="flex flex-col gap-4 pt-4">
                <button 
                  onClick={() => {
                    scrollToSection('services');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Services
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('portfolio');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('hire');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Hire Us
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('testimonials');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  Reviews
                </button>
                <Button 
                  onClick={() => {
                    scrollToSection('contact');
                    setMobileMenuOpen(false);
                  }}
                  size="sm"
                  className="neon-glow w-fit"
                >
                  Contact
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <HeroSection 
          onExploreServices={handleExploreServices}
          onHireUs={handleHireUs}
        />
        <ServicesSection />
        <PortfolioSection />
        <HireSection onContactUs={handleContactUs} />
        <TestimonialsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-secondary/5 border-t border-primary/10 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/lovable-uploads/0103d35b-f35d-4893-91ab-74a6d2182b0b.png" 
                  alt="Raptile DataWorks" 
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold text-gradient">Raptile DataWorks</h3>
                  <p className="text-sm text-muted-foreground">We Craft Code, Build Brands, and Launch Careers.</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Your trusted partner for final year projects, portfolio websites, and business solutions. 
                Empowering students and businesses with cutting-edge technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Final Year Projects</li>
                <li>Portfolio Websites</li>
                <li>Business Websites</li>
                <li>Mobile Apps</li>
                <li>Freelance Projects</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+91 6374172911</li>
                <li>raptilesdataworks@gmail.com</li>
                <li>Available 24/7</li>
                <li>Response: 2-4 hours</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Raptile DataWorks. All rights reserved. Built with ❤️ for students and businesses.</p>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <FloatingHelpBot />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="fixed bottom-24 right-6 z-40 rounded-full w-12 h-12 shadow-lg neon-glow hover-lift"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
