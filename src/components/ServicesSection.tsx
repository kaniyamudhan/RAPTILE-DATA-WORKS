import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "ai-saas-platform",
    title: "AI-Powered Niche SaaS Platform",
    description: "Focused software solving a specific business problem using AI.",
    icon: Rocket,
    duration: "4-12 weeks",
    features: [
      "Custom AI automation for business processes",
      "Data-driven decision support",
      "Scalable cloud architecture",
      "User-friendly dashboards",
      "Ongoing support & updates"
    ],
    category: "AI & SaaS"
  },
  {
    id: "micro-learning-platform",
    title: "Micro-Learning / Skill Platform",
    description: "Teach niche skills with interactive lessons, quizzes, and certification.",
    icon: GraduationCap,
    duration: "4-8 weeks",
    features: [
      "Interactive courses and quizzes",
      "AI-driven progress tracking",
      "Certification issuance",
      "Gamification elements",
      "Corporate or B2C deployment"
    ],
    category: "Education Tech"
  },
  {
    id: "digital-service-marketplace",
    title: "Digital Marketplace for Services",
    description: "Connect freelancers to micro-projects in specialized niches.",
    icon: Globe,
    duration: "6-10 weeks",
    features: [
      "Freelancer & client dashboards",
      "Micro-project management",
      "AI-assisted matching & recommendations",
      "Payment and commission handling",
      "Analytics and reporting"
    ],
    category: "Marketplace & B2B"
  },
  {
    id: "vertical-saas",
    title: "Vertical SaaS for Local Businesses",
    description: "Automation and management tools for niche industries like salons, gyms, or restaurants.",
    icon: Briefcase,
    duration: "4-8 weeks",
    features: [
      "Appointment scheduling with reminders",
      "Loyalty & membership management",
      "Integrated payment & invoicing",
      "Analytics for customer engagement",
      "Customizable industry-specific modules"
    ],
    category: "SaaS & Automation"
  },
  {
    id: "ai-content-platform",
    title: "Automated Content & Marketing Platform",
    description: "AI-powered tool to generate graphics, ads, emails, and social media content.",
    icon: Code,
    duration: "6-12 weeks",
    features: [
      "AI content creation for multiple channels",
      "Template-based and dynamic content generation",
      "Campaign scheduling & tracking",
      "Analytics dashboard for ROI",
      "Integration with marketing platforms"
    ],
    category: "AI & Marketing"
  },
  {
    id: "digital-health-platform",
    title: "Digital Health & Wellness Platform",
    description: "AI-driven nutrition, fitness, and mental wellness solutions.",
    icon: User,
    duration: "6-10 weeks",
    features: [
      "Personalized AI recommendations",
      "Health tracking and analytics",
      "Tele-consultation integrations",
      "Gamified challenges and coaching",
      "Data security & HIPAA compliance"
    ],
    category: "Health Tech"
  },
  {
    id: "local-ecommerce-tech",
    title: "Local E-Commerce & Logistics Platform",
    description: "Help local businesses and artisans sell online with AI-powered logistics.",
    icon: Globe,
    duration: "6-12 weeks",
    features: [
      "Online storefront and catalog management",
      "AI demand forecasting and inventory optimization",
      "Delivery & logistics management",
      "Secure payment integration",
      "Analytics and reporting for business growth"
    ],
    category: "E-Commerce & Logistics"
  },
  {
    id: "ai-personal-assistant",
    title: "AI-Powered Personal Assistant Tool",
    description: "Boost professional productivity with scheduling, lead gen, and email automation.",
    icon: MessageCircle,
    duration: "4-8 weeks",
    features: [
      "Calendar and email automation",
      "AI-powered reminders and follow-ups",
      "Lead generation & CRM integration",
      "Multi-platform accessibility",
      "Customizable premium features"
    ],
    category: "AI & Productivity"
  }
];

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleBookService = (serviceId: string) => {
    const whatsappMessage = `Hi! I'm interested in the ${selectedService?.title} service. Can we discuss the details?`;
    const whatsappUrl = `https://wa.me/919943554500?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 px-6 relative" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional solutions to accelerate your career and business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="glass-card hover-lift cursor-pointer group transition-all duration-300 hover:neon-glow"
                onClick={() => handleServiceClick(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-accent font-semibold">{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent
            className="
              glass-card border-primary/20
              w-[90%] sm:w-[80%] md:w-[600px] lg:w-[700px] max-w-[90%]
              mx-auto p-4 sm:p-6
            "
          >
            {selectedService && (
              <div className="space-y-6 w-full">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4 w-full">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="glass-card p-4 flex items-center justify-center">
                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg">
                      ⚡ On Demand ⚡
                    </span>
                  </div>
                  <div className="glass-card p-4 w-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-accent">Duration</span>
                    </div>
                    <span className="text-xl font-semibold text-primary">
                      {selectedService.duration}
                    </span>
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

                <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
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
                    disabled={selectedService?.price === undefined}
                  >
                    <IndianRupee className="mr-2 h-4 w-4" />
                    Pay with Razorpay
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
