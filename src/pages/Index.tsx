import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { HireSection } from "@/components/HireSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingHelpBot } from "@/components/FloatingHelpBot";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUp, Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [careersModalOpen, setCareersModalOpen] = useState(false);
  const [serviceCategory, setServiceCategory] = useState<string>("all");

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

  const handleServiceCategoryClick = (category: string) => {
    setServiceCategory(category);
    scrollToSection('services');
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 glass-card border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
              <img 
                src="/lovable-uploads/0103d35b-f35d-4893-91ab-74a6d2182b0b.png" 
                alt="Raptile DataWorks" 
                className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
              />
              <span className="text-lg md:text-xl font-bold text-gradient truncate min-w-0">Raptile DataWorks</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition-colors"
              >
                About
              </button>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-primary transition-colors bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-64 glass-card border-primary/20 p-4">
                      <div className="space-y-2">
                        <div className="text-primary font-semibold mb-2">Service Categories</div>
                        <button
                          onClick={() => handleServiceCategoryClick('students')}
                          className="block w-full text-left p-2 rounded hover:bg-primary/10 transition-colors"
                        >
                          <div className="font-medium">Students</div>
                          <div className="text-xs text-muted-foreground">Projects, Resume, Portfolio</div>
                        </button>
                        <button
                          onClick={() => handleServiceCategoryClick('business')}
                          className="block w-full text-left p-2 rounded hover:bg-primary/10 transition-colors"
                        >
                          <div className="font-medium">Business Professionals</div>
                          <div className="text-xs text-muted-foreground">Websites, Marketing, R&D</div>
                        </button>
                        <button
                          onClick={() => handleServiceCategoryClick('career')}
                          className="block w-full text-left p-2 rounded hover:bg-primary/10 transition-colors"
                        >
                          <div className="font-medium">Career Development</div>
                          <div className="text-xs text-muted-foreground">Interviews, Training</div>
                        </button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
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
                onClick={() => setCareersModalOpen(true)}
                className="hover:text-primary transition-colors"
              >
                Careers
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
              
              <ThemeToggle />
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
                    scrollToSection('about');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left hover:text-primary transition-colors py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => {
                    handleServiceCategoryClick('all');
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
                     setCareersModalOpen(true);
                     setMobileMenuOpen(false);
                   }}
                   className="text-left hover:text-primary transition-colors py-2"
                 >
                   Careers
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
        <div className="section-angled">
          <AboutSection />
        </div>
        <ServicesSection initialCategory={serviceCategory} />
        <div className="section-angled">
          <PortfolioSection />
        </div>
        <HireSection onContactUs={handleContactUs} />
        <div className="section-angled">
          <TestimonialsSection />
        </div>
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
      
      {/* Careers Modal */}
      <Dialog open={careersModalOpen} onOpenChange={setCareersModalOpen}>
        <DialogContent className="max-w-md glass-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-gradient text-2xl">Join Our Team</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              We're a dynamic freelancing team looking for talented individuals to join us. 
              If you're passionate about technology and innovation, we'd love to hear from you!
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">What We Offer:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Flexible freelancing opportunities</li>
                <li>• Work on cutting-edge projects</li>
                <li>• Collaborative team environment</li>
                <li>• Skill development and growth</li>
              </ul>
            </div>
            <Button 
              className="w-full neon-glow"
              onClick={() => window.open('https://forms.google.com/create', '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Apply Now - Google Form
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Fill out our application form and we'll get back to you within 24 hours.
            </p>
          </div>
        </DialogContent>
      </Dialog>

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
