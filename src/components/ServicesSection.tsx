import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Code, 
  Briefcase, 
  User, 
  Globe, 
  MessageCircle, 
  GraduationCap, 
  Rocket,
  IndianRupee,
  Clock,
  CheckCircle,
  Bot,
  TrendingUp,
  Building,
  Zap,
  Lightbulb,
  Search,
  Users
} from "lucide-react";

const services = [
  // AI & Automation (Most Popular)
  {
    id: "ai-agents",
    title: "AI Agents & Automation",
    description: "n8n, Make.com, API integrations, chatbots, filtering",
    icon: Bot,
    price: "₹15,000 - ₹50,000",
    duration: "2-4 weeks",
    features: [
      "Custom automation workflows",
      "API integrations & webhooks",
      "AI chatbot development",
      "Data filtering & processing",
      "n8n & Make.com expert setup"
    ],
    category: "business",
    popular: true
  },
  {
    id: "local-business",
    title: "Local Business Solutions",
    description: "Complete websites with marketing & e-commerce",
    icon: Building,
    price: "₹25,000 - ₹75,000",
    duration: "3-5 weeks",
    features: [
      "Business website development",
      "E-commerce functionality",
      "Digital marketing setup",
      "Payment gateway integration",
      "WhatsApp business API"
    ],
    category: "business",
    popular: true
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Solutions",
    description: "SEO, social media, content marketing & lead generation",
    icon: TrendingUp,
    price: "₹20,000 - ₹60,000",
    duration: "4-6 weeks",
    features: [
      "SEO optimization",
      "Social media management",
      "Content marketing strategy",
      "Lead generation systems",
      "Analytics & reporting"
    ],
    category: "business",
    popular: true
  },
  {
    id: "company-poc",
    title: "Company PoC Project Builds",
    description: "Proof of concept development for enterprise solutions",
    icon: Lightbulb,
    price: "₹30,000 - ₹1,00,000",
    duration: "4-8 weeks",
    features: [
      "MVP development",
      "Technical feasibility study",
      "Prototype creation",
      "Technology consultation",
      "Scalability planning"
    ],
    category: "business"
  },
  {
    id: "rd-works",
    title: "R&D Works",
    description: "Research & development for innovative solutions",
    icon: Search,
    price: "₹40,000 - ₹1,50,000",
    duration: "6-12 weeks",
    features: [
      "Technology research",
      "Innovation consulting",
      "Custom solution development",
      "Market analysis",
      "Implementation roadmap"
    ],
    category: "business"
  },
  // Career Development
  {
    id: "career-coaching",
    title: "Career Coaching & Mentorship",
    description: "1-on-1 guidance for career advancement",
    icon: Users,
    price: "₹10,000 - ₹25,000",
    duration: "4-6 weeks",
    features: [
      "Personalized career roadmap",
      "Skill gap analysis",
      "Industry networking guidance",
      "Salary negotiation tips",
      "Long-term career planning"
    ],
    category: "career"
  },
  {
    id: "tech-training",
    title: "Technical Training Programs",
    description: "Hands-on training in latest technologies",
    icon: Code,
    price: "₹15,000 - ₹40,000",
    duration: "6-8 weeks",
    features: [
      "Live coding sessions",
      "Project-based learning",
      "Industry best practices",
      "Certification assistance",
      "Job placement support"
    ],
    category: "career"
  },
  // Students Category (Lower priority)
  {
    id: "portfolio",
    title: "Personal Portfolio Websites",
    description: "Professional portfolios for job seekers & freelancers",
    icon: Globe,
    price: "₹5,000 - ₹15,000",
    duration: "1-2 weeks",
    features: [
      "Responsive design",
      "Modern UI/UX",
      "SEO optimization",
      "Contact forms",
      "Portfolio showcase"
    ],
    category: "students"
  },
  {
    id: "final-year",
    title: "Final Year Project Development",
    description: "Complete project solutions with PPT & Viva support",
    icon: GraduationCap,
    price: "₹8,000 - ₹25,000",
    duration: "3-5 weeks",
    features: [
      "Complete source code",
      "Documentation & Reports",
      "PPT presentation",
      "Viva support & training",
      "Project deployment"
    ],
    category: "students"
  },
  {
    id: "interview",
    title: "Mock Interview + Kits",
    description: "Interview preparation with personalized feedback",
    icon: MessageCircle,
    price: "₹3,000 - ₹8,000",
    duration: "1-2 weeks",
    features: [
      "1-on-1 mock interviews",
      "Technical & behavioral rounds",
      "Detailed feedback report",
      "Interview kit with common questions",
      "Follow-up sessions"
    ],
    category: "students"
  },
  {
    id: "resume",
    title: "Resume & LinkedIn Optimization",
    description: "Professional resume design + LinkedIn profile optimization",
    icon: User,
    price: "₹2,000 - ₹5,000",
    duration: "3-5 days",
    features: [
      "ATS-friendly resume design",
      "LinkedIn profile optimization",
      "Cover letter template",
      "Interview preparation tips",
      "Industry-specific keywords"
    ],
    category: "students"
  }
];

export const ServicesSection = ({ initialCategory }: { initialCategory?: string } = {}) => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "all");

  useEffect(() => {
    if (initialCategory && initialCategory !== selectedCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleBookService = (serviceId: string) => {
    // This would integrate with Razorpay in a real implementation
    const whatsappMessage = `Hi! I'm interested in the ${selectedService?.title} service. Can we discuss the details?`;
    const whatsappUrl = `https://wa.me/916374172911?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-20 px-6" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Professional solutions to accelerate your career and business growth
          </p>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[280px] glass-card border-primary/20">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="glass-card border-primary/20">
                <SelectItem value="all">All Services</SelectItem>
                <SelectItem value="students">Students</SelectItem>
                <SelectItem value="business">Business Professionals</SelectItem>
                <SelectItem value="career">Career Development</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="glass-card hover-lift cursor-pointer group transition-all duration-300 hover:neon-glow relative"
                onClick={() => handleServiceClick(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {(service as any).popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-primary to-neon-green text-background px-3 py-1 rounded-full text-xs font-bold animate-pulse-neon">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="glass-card border-primary/20 max-w-2xl">
            {selectedService && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <selectedService.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl text-gradient">
                        {selectedService.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {selectedService.description}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass-card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <IndianRupee className="h-5 w-5 text-accent" />
                        <span className="font-semibold">Pricing</span>
                      </div>
                      <span className="text-2xl font-bold text-accent">{selectedService.price}</span>
                    </div>
                    <div className="glass-card p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Duration</span>
                      </div>
                      <span className="text-xl">{selectedService.duration}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={() => handleBookService(selectedService.id)}
                      className="flex-1 neon-glow hover-lift"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book via WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 glass-card border-accent hover:neon-glow-green"
                    >
                      <IndianRupee className="mr-2 h-4 w-4" />
                      Pay with Razorpay
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};