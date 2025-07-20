import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database,
  Globe,
  Zap,
  CheckCircle,
  MessageCircle,
  ArrowRight
} from "lucide-react";

const freelanceServices = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Full-stack web applications with modern technologies",
    icon: Globe,
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    pricing: "₹20,000 - ₹1,00,000",
    duration: "2-8 weeks",
    features: [
      "Responsive design",
      "SEO optimization",
      "Database integration",
      "API development",
      "Testing & deployment"
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Cross-platform mobile apps for iOS and Android",
    icon: Smartphone,
    technologies: ["React Native", "Flutter", "Firebase"],
    pricing: "₹30,000 - ₹1,50,000",
    duration: "4-12 weeks",
    features: [
      "Cross-platform compatibility",
      "Native performance",
      "Push notifications",
      "Offline functionality",
      "App store deployment"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design for web and mobile applications",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "Sketch", "Framer"],
    pricing: "₹15,000 - ₹50,000",
    duration: "1-4 weeks",
    features: [
      "User research & personas",
      "Wireframes & prototypes",
      "Visual design system",
      "Usability testing",
      "Design handoff"
    ]
  },
  {
    id: "backend-development",
    title: "Backend Development",
    description: "Scalable server-side solutions and APIs",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    pricing: "₹25,000 - ₹80,000",
    duration: "3-6 weeks",
    features: [
      "RESTful API development",
      "Database design",
      "Authentication & security",
      "Cloud deployment",
      "Performance optimization"
    ]
  }
];

const availableHours = [
  { label: "Part-time", value: "20-30 hours/week", icon: "⏰" },
  { label: "Full-time", value: "40+ hours/week", icon: "🚀" },
  { label: "Project-based", value: "Flexible timeline", icon: "📋" }
];

export const HireSection = ({ onContactUs }: { onContactUs: () => void }) => {
  const handleServiceInquiry = (serviceId: string) => {
    const service = freelanceServices.find(s => s.id === serviceId);
    const message = `Hi! I'm interested in hiring Raptile DataWorks for ${service?.title}. Can we discuss the project requirements?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-6" id="hire">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Hire Raptile
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to bring your project to life? Our expert team is available for freelance and contract work.
          </p>
          
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 animate-pulse-neon">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-semibold">Available to Hire</span>
          </div>
        </div>

        {/* Availability Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {availableHours.map((option, index) => (
            <Card 
              key={option.label}
              className="glass-card hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{option.label}</h3>
                <p className="text-muted-foreground">{option.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {freelanceServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                className="glass-card hover-lift group transition-all duration-300 hover:neon-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-primary/5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing & Duration */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-3">
                      <div className="text-sm text-muted-foreground mb-1">Pricing</div>
                      <div className="font-semibold text-accent">{service.pricing}</div>
                    </div>
                    <div className="glass-card p-3">
                      <div className="text-sm text-muted-foreground mb-1">Timeline</div>
                      <div className="font-semibold">{service.duration}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      Included Services
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleServiceInquiry(service.id)}
                    className="w-full neon-glow hover-lift group/btn"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Discuss Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card p-8 max-w-3xl mx-auto hover-lift">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-accent/20">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl text-gradient mb-4">
                Let's Build Together
              </CardTitle>
              <CardDescription className="text-lg">
                Have a unique project in mind? We love taking on challenging projects 
                and bringing innovative ideas to life. Let's discuss your vision.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="glass-card p-4">
                  <Code2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold">Custom Development</div>
                  <div className="text-sm text-muted-foreground">Tailored solutions</div>
                </div>
                <div className="glass-card p-4">
                  <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="font-semibold">Rapid Delivery</div>
                  <div className="text-sm text-muted-foreground">Fast turnaround</div>
                </div>
                <div className="glass-card p-4">
                  <CheckCircle className="h-8 w-8 text-neon-green mx-auto mb-2" />
                  <div className="font-semibold">Quality Assured</div>
                  <div className="text-sm text-muted-foreground">Tested & reliable</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onContactUs}
                  size="lg"
                  className="neon-glow hover-lift group px-8"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start a Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-card border-accent hover:neon-glow-green px-8"
                  onClick={() => window.open('mailto:hello@raptile.dev', '_blank')}
                >
                  Send Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};