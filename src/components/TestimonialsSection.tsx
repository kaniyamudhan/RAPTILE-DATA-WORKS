import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Computer Science Student",
    company: "VIT University",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    service: "Final Year Project",
    content: "Raptile DataWorks delivered an outstanding e-commerce platform for my final year project. The code quality was exceptional, and they provided comprehensive documentation and PPT. Their support during viva was invaluable!",
    highlight: "Excellent code quality and viva support"
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Software Developer",
    company: "Tech Startup",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    service: "Portfolio Website",
    content: "My portfolio website helped me land my dream job! The design is modern, responsive, and perfectly showcases my skills. The SEO optimization was spot-on. Highly recommended for job seekers!",
    highlight: "Modern design that landed me a job"
  },
  {
    id: 3,
    name: "Sneha Reddy",
    role: "Business Owner",
    company: "Local Restaurant",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    service: "Business Website",
    content: "Our restaurant website with online ordering has increased our revenue by 40%! The Razorpay integration works flawlessly, and the WhatsApp ordering system is loved by customers. Worth every penny!",
    highlight: "40% revenue increase with online orders"
  },
  {
    id: 4,
    name: "Rohit Kumar",
    role: "Final Year Student",
    company: "IIT Delhi",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    service: "Major Project",
    content: "The AI-powered recommendation system they built exceeded all expectations. Complex algorithms were implemented perfectly, and the project documentation was thorough. Scored 95% in final evaluation!",
    highlight: "Scored 95% in final evaluation"
  },
  {
    id: 5,
    name: "Kavya Mehta",
    role: "Freelancer",
    company: "Independent",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    service: "Portfolio + Resume",
    content: "The portfolio website and ATS-optimized resume package was perfect! Within 2 weeks of receiving them, I got 3 interview calls and landed a freelance contract. Professional quality work!",
    highlight: "3 interview calls in 2 weeks"
  },
  {
    id: 6,
    name: "Vikram Singh",
    role: "Boutique Owner",
    company: "Fashion Boutique",
    avatar: "/api/placeholder/100/100",
    rating: 5,
    service: "E-commerce Website",
    content: "Our boutique's online presence transformed completely! The website handles inventory, payments, and customer management beautifully. Mobile-first design resulted in 60% mobile orders. Fantastic work!",
    highlight: "60% orders from mobile users"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 2; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section className="py-20 px-6" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students and businesses who achieved their goals with our solutions
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${currentIndex}`}
                className={`glass-card hover-lift transition-all duration-500 ${
                  index === 0 ? 'md:scale-105 md:z-10 neon-glow' : 'md:scale-100'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: index === 0 ? 'translateY(-10px)' : undefined
                }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-8 w-8 text-primary/50" />
                    <Badge className="bg-accent/20 text-accent">
                      {testimonial.service}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'text-neon-yellow fill-neon-yellow'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-sm leading-relaxed mb-4 text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Highlight */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-primary">
                      💡 {testimonial.highlight}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="glass-card border-primary/20 hover:neon-glow"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-6'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="glass-card border-primary/20 hover:neon-glow"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {isAutoPlaying ? '⏸️ Pause auto-scroll' : '▶️ Resume auto-scroll'}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-green mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-violet mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};