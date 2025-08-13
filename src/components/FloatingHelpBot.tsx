import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  MessageCircle, 
  X, 
  Phone, 
  Mail, 
  Calendar,
  HelpCircle,
  Zap,
  ArrowRight
} from "lucide-react";

const quickActions = [
  {
    id: "whatsapp",
    title: "Chat on WhatsApp",
    description: "Get instant response",
    icon: MessageCircle,
    action: () => window.open("https://wa.me/919876543210?text=Hi! I need help with my project.", "_blank"),
    color: "bg-neon-green/10 hover:bg-neon-green/20 text-neon-green border-neon-green/20"
  },
  {
    id: "call",
    title: "Schedule a Call",
    description: "Book a consultation",
    icon: Phone,
    action: () => window.open("tel:+919876543210", "_blank"),
    color: "bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
  },
  {
    id: "email",
    title: "Send Email",
    description: "Detailed inquiry",
    icon: Mail,
    action: () => window.open("mailto:hello@raptile.dev?subject=Project Inquiry", "_blank"),
    color: "bg-accent/10 hover:bg-accent/20 text-accent border-accent/20"
  }
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary: Portfolio websites (1-2 weeks), Final year projects (2-4 weeks), Business websites (2-3 weeks), Complex applications (1-3 months)."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We offer 30 days of free support after project delivery, including bug fixes and minor modifications."
  },
  {
    question: "What's included in the final year project service?",
    answer: "Complete source code, documentation, PPT presentation, viva support, project deployment, and training sessions."
  },
  {
    question: "Can you work with my existing code?",
    answer: "Absolutely! We can enhance, debug, or extend existing projects. We work with all major frameworks and technologies."
  }
];

export const FloatingHelpBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleBot = () => {
    if (isOpen) {
      setIsMinimized(!isMinimized);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const closeBot = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50">
        {!isOpen && (
          <Button
            onClick={toggleBot}
            size="lg"
            className="rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl animate-pulse-neon hover-lift group"
          >
            <MessageCircle className="h-6 w-6 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
          </Button>
        )}
      </div>

      {/* Help Bot Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-card border-primary/20 max-w-[95vw] md:max-w-md fixed bottom-4 right-4 md:bottom-6 md:right-6 top-auto left-auto m-0 translate-x-0 translate-y-0 max-h-[85vh] md:max-h-auto">
          <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10 animate-pulse">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-lg text-gradient">Need Help?</DialogTitle>
                <DialogDescription>We're here to assist you!</DialogDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleBot}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                {isMinimized ? <ArrowRight className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeBot}
                className="h-8 w-8 p-0 hover:bg-destructive/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogHeader>

          {!isMinimized && (
            <div className="space-y-4 max-h-[60vh] md:max-h-96 overflow-y-auto">
              {/* Quick Actions */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-accent" />
                  Quick Contact
                </h4>
                <div className="space-y-2">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <Button
                        key={action.id}
                        variant="outline"
                        onClick={action.action}
                        className={`w-full justify-start h-auto p-3 ${action.color} transition-all duration-200 hover:scale-105`}
                      >
                        <IconComponent className="h-5 w-5 mr-3" />
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs opacity-70">{action.description}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 ml-auto" />
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-primary" />
                  Common Questions
                </h4>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="bg-background/50 border-primary/10">
                      <CardContent className="p-3">
                        <h5 className="font-medium text-sm mb-2 text-primary">
                          {faq.question}
                        </h5>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="text-center pt-2">
                <div className="inline-flex items-center gap-2 glass-card px-3 py-2 text-sm">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-neon-green font-medium">Usually responds in 2-4 hours</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};