import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin,
  Send,
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  Briefcase,
  User,
  Globe
} from "lucide-react";

const serviceCategories = [
  { id: "final-year", label: "Final Year Project", icon: Code },
  { id: "portfolio", label: "Portfolio Website", icon: User },
  { id: "business", label: "Business Website", icon: Globe },
  { id: "freelance", label: "Freelance Project", icon: Briefcase },
  { id: "consultation", label: "Consultation", icon: MessageCircle },
  { id: "other", label: "Other", icon: CheckCircle }
];

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Quick response for urgent queries",
    icon: MessageCircle,
    value: "+91 99xxxxxx00",
    action: () => window.open("https://wa.me/0000000000", "_blank"),
    color: "text-neon-green"
  },
  {
    title: "Email",
    description: "Detailed project discussions",
    icon: Mail,
    value: "raptiledataworks",
    action: () => window.open("mailto:raptiledataworks@gmail.com", "_blank"),
    color: "text-primary"
  },
  {
    title: "Phone",
    description: "Direct call for immediate support",
    icon: Phone,
    value: "+91 99xxxxxx00",
    action: () => window.open("tel:+0000000000", "_blank"),
    color: "text-accent"
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and email to continue.",
        variant: "destructive"
      });
      return;
    }
    if (step === 2 && !formData.service) {
      toast({
        title: "Service Selection Required",
        description: "Please select a service category.",
        variant: "destructive"
      });
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}. 

Service: ${formData.service}
Budget: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Flexible"}

Message: ${formData.message}

Contact: ${formData.email} | ${formData.phone}`;

    const whatsappUrl = `https://wa.me/919943554500?text=${encodeURIComponent(whatsappMessage)}`;
    
    toast({
      title: "Form Submitted!",
      description: "Redirecting to WhatsApp for quick response...",
    });
    
    setIsSubmitting(false);
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });
    setStep(1);
  };

  return (
    <section className="py-20 px-6 bg-secondary/5" id="contact">
      <div className="container mx-auto max-w-6xl">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Let's discuss your requirements and bring your ideas to life.
          </p>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Contact Methods
            </h3>
            
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={method.title}
                  className="glass-card hover-lift cursor-pointer group transition-all duration-300 hover:neon-glow"
                  onClick={method.action}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <IconComponent className={`h-6 w-6 ${method.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-1">
                          {method.description}
                        </p>
                        <p className="font-mono text-sm">{method.value}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Info */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Quick Info
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <Badge className="bg-accent/20 text-accent">
                      <Clock className="h-3 w-3 mr-1" />
                      2-4 hours
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <Badge className="bg-neon-green/20 text-neon-green">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Available Now
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zone:</span>
                    <span>IST (UTC +5:30)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Multi-step Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient flex items-center gap-2">
                <Send className="h-6 w-6" />
                Project Inquiry Form
              </CardTitle>
              <CardDescription>
                Tell us about your project in {step} simple steps
              </CardDescription>
              
              {/* Progress Indicator */}
              <div className="flex items-center gap-2 mt-4">
                {[1, 2, 3].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`flex-1 h-2 rounded-full transition-colors ${
                      stepNum <= step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fade-scale">
                  <h4 className="font-semibold text-lg">Personal Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="glass-card border-primary/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="glass-card border-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 9876543210"
                      className="glass-card border-primary/20"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Service Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-fade-scale">
                  <h4 className="font-semibold text-lg">Service Category</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {serviceCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <Card
                          key={category.id}
                          className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                            formData.service === category.id
                              ? 'ring-2 ring-primary bg-primary/10'
                              : 'glass-card hover:bg-primary/5'
                          }`}
                          onClick={() => handleInputChange("service", category.id)}
                        >
                          <CardContent className="p-4 flex items-center gap-3">
                            <IconComponent className="h-5 w-5 text-primary" />
                            <span className="font-medium">{category.label}</span>
                            {formData.service === category.id && (
                              <CheckCircle className="h-4 w-4 text-primary ml-auto" />
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="glass-card border-primary/20">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                          <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                          <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                          <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="glass-card border-primary/20">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                          <SelectItem value="normal">Normal (2-4 weeks)</SelectItem>
                          <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                          <SelectItem value="planning">Just planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Project Details */}
              {step === 3 && (
                <div className="space-y-4 animate-fade-scale">
                  <h4 className="font-semibold text-lg">Project Details</h4>
                  
                  <div>
                    <Label htmlFor="message">Project Description</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your project requirements, features needed, and any specific preferences..."
                      rows={6}
                      className="glass-card border-primary/20"
                    />
                  </div>

                  {/* Summary */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <h5 className="font-semibold mb-3 text-primary">Project Summary</h5>
                      <div className="space-y-2 text-sm">
                        <div><strong>Name:</strong> {formData.name}</div>
                        <div><strong>Email:</strong> {formData.email}</div>
                        {formData.phone && <div><strong>Phone:</strong> {formData.phone}</div>}
                        <div><strong>Service:</strong> {serviceCategories.find(s => s.id === formData.service)?.label}</div>
                        {formData.budget && <div><strong>Budget:</strong> {formData.budget}</div>}
                        {formData.timeline && <div><strong>Timeline:</strong> {formData.timeline}</div>}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep(prev => prev - 1)}
                    className="glass-card border-primary/20"
                  >
                    Previous
                  </Button>
                )}
                
                {step < 3 ? (
                  <Button
                    onClick={handleNextStep}
                    className="flex-1 neon-glow hover-lift"
                  >
                    Next Step
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 neon-glow hover-lift"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit & Contact
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
