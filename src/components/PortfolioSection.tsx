import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  FileText, 
  Calendar,
  Star,
  Users,
  Code2,
  Smartphone,
  Globe,
  User
} from "lucide-react";
import portfolioBgFuturistic from "@/assets/portfolio-bg-futuristic.jpg";

const portfolioProjects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    category: "Web Development",
    type: "Major Project",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
    features: [
      "User authentication & authorization",
      "Product catalog with search & filters",
      "Shopping cart & wishlist",
      "Payment gateway integration",
      "Order tracking system",
      "Admin dashboard",
      "Responsive design"
    ],
    duration: "3 months",
    teamSize: "2 developers",
    liveDemo: "https://demo-ecommerce.raptile.dev",
    github: "https://github.com/raptile/ecommerce-platform",
    readme: `# E-Commerce Platform

## Overview
A comprehensive e-commerce solution built with modern web technologies. This platform provides a seamless shopping experience for customers and powerful management tools for administrators.

## Key Features
- **User Management**: Registration, login, profile management
- **Product Catalog**: Dynamic product listing with search and filters
- **Shopping Experience**: Cart, wishlist, checkout process
- **Payment Processing**: Secure payment integration with Razorpay
- **Order Management**: Real-time order tracking and status updates
- **Admin Panel**: Complete dashboard for managing products, orders, and users

## Technology Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Payment**: Razorpay integration
- **Deployment**: Docker, AWS EC2

## Installation
\`\`\`bash
npm install
npm run dev
\`\`\`

## Environment Variables
\`\`\`
DATABASE_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
\`\`\`

## API Endpoints
- GET /api/products - Fetch all products
- POST /api/auth/login - User authentication
- POST /api/orders - Create new order
- GET /api/orders/:userId - Get user orders

## Contributing
Pull requests are welcome. For major changes, please open an issue first.`
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description: "Modern portfolio website for software developer",
    category: "Portfolio",
    type: "Mini Project",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Responsive design",
      "Smooth animations",
      "Project showcase",
      "Contact form",
      "Blog section",
      "Dark/light theme"
    ],
    duration: "2 weeks",
    teamSize: "1 developer",
    liveDemo: "https://portfolio.raptile.dev",
    github: "https://github.com/raptile/portfolio",
    readme: `# Personal Portfolio Website

A modern, responsive portfolio website showcasing projects and skills.

## Features
- Responsive design
- Smooth animations
- Project showcase
- Contact form
- SEO optimized

## Tech Stack
- React 18
- Tailwind CSS
- Framer Motion
- Vite

## Setup
\`\`\`bash
npm install
npm run dev
\`\`\``
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    category: "Web App",
    type: "Major Project",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    features: [
      "Real-time collaboration",
      "Task assignments",
      "Progress tracking",
      "File attachments",
      "Team messaging",
      "Calendar integration"
    ],
    duration: "2 months",
    teamSize: "3 developers",
    liveDemo: "https://tasks.raptile.dev",
    github: "https://github.com/raptile/task-manager",
    readme: `# Task Management Application

A collaborative task management platform for teams.

## Features
- Real-time updates
- Team collaboration
- Task assignments
- Progress tracking

## Technology
- Vue.js 3
- Firebase
- Vuetify UI`
  },
  {
    id: "mobile-app",
    title: "Fitness Tracker App",
    description: "React Native app for fitness tracking and workout plans",
    category: "Mobile App",
    type: "Major Project",
    image: "/api/placeholder/400/300",
    technologies: ["React Native", "Firebase", "Redux"],
    features: [
      "Workout tracking",
      "Exercise library",
      "Progress analytics",
      "Social sharing",
      "Offline support",
      "Wearable integration"
    ],
    duration: "4 months",
    teamSize: "2 developers",
    liveDemo: "https://play.google.com/store/fitness-tracker",
    github: "https://github.com/raptile/fitness-tracker",
    readme: `# Fitness Tracker Mobile App

Cross-platform fitness tracking application.

## Features
- Workout logging
- Exercise database
- Progress charts
- Social features

## Tech Stack
- React Native
- Firebase
- Redux Toolkit`
  }
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReadme, setShowReadme] = useState(false);

  const handleProjectClick = (project: typeof portfolioProjects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setShowReadme(false);
  };

  const handleViewReadme = () => {
    setShowReadme(true);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden" id="portfolio">
      {/* Futuristic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${portfolioBgFuturistic})` }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Portfolio Vault
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of final year projects, websites, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card hover-lift cursor-pointer group transition-all duration-300 hover:neon-glow overflow-hidden"
              onClick={() => handleProjectClick(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">
                    {project.category === "Mobile App" ? <Smartphone /> : 
                     project.category === "Portfolio" ? <User /> : 
                     <Globe />}
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary/80">
                  {project.type}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-accent/80">
                  {project.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.teamSize}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="glass-card border-primary/20 max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Code2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <DialogTitle className="text-2xl text-gradient mb-2">
                        {selectedProject.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {selectedProject.description}
                      </DialogDescription>
                      <div className="flex gap-2 mt-3">
                        <Badge className="bg-primary/20 text-primary">
                          {selectedProject.type}
                        </Badge>
                        <Badge className="bg-accent/20 text-accent">
                          {selectedProject.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                {!showReadme ? (
                  <div className="space-y-6">
                    {/* Project Image/Preview */}
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl opacity-20">
                          {selectedProject.category === "Mobile App" ? <Smartphone /> : 
                           selectedProject.category === "Portfolio" ? <User /> : 
                           <Globe />}
                        </div>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="glass-card p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Duration</span>
                        </div>
                        <span className="text-lg">{selectedProject.duration}</span>
                      </div>
                      <div className="glass-card p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-5 w-5 text-accent" />
                          <span className="font-semibold">Team Size</span>
                        </div>
                        <span className="text-lg">{selectedProject.teamSize}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-primary/10">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Star className="h-5 w-5 text-accent" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button
                        onClick={handleViewReadme}
                        className="neon-glow hover-lift"
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        View README
                      </Button>
                      <Button
                        variant="outline"
                        className="glass-card border-primary hover:neon-glow"
                        onClick={() => window.open(selectedProject.liveDemo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="glass-card border-accent hover:neon-glow-green"
                        onClick={() => window.open(selectedProject.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        README.md
                      </h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowReadme(false)}
                      >
                        Back to Project
                      </Button>
                    </div>
                    <div className="glass-card p-6 max-h-96 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap font-mono text-muted-foreground">
                        {selectedProject.readme}
                      </pre>
                    </div>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              Need a Custom Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              We build custom solutions tailored to your specific requirements. 
              From simple portfolios to complex enterprise applications.
            </p>
            <Button className="neon-glow hover-lift">
              Get Your Project Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};