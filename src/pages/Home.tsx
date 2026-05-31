import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Film, Camera, Mountain, VideoIcon, Users, Mail, Phone, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site, whatsappLink, mailtoLink, inquiryLink } from '@/lib/site';
import Reveal from '@/components/Reveal';
const Home = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' fill='%23000'%3E%3Crect width='100%25' height='100%25'/%3E%3C/svg%3E">
            <source src="/website_1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ganesh Khatri
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold mb-8 leading-tight">
              Cinematographer &amp;<br />
              Videographer
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Crafting compelling narratives through cinematic visuals, brand films, events and travel storytelling — straight out of Dubai.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2">
            <Button size="lg" asChild className="w-full sm:w-auto min-w-48 bg-gold hover:bg-gold-dark text-black px-8 py-4 text-base font-medium">
              <Link to="/projects">
                Explore My Work
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-w-48 bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-4 text-base font-medium">
              <Link to="/contact">
                Book a Service
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-14 md:py-20 px-5 sm:px-6 md:px-8 text-white bg-gradient-to-b from-[#16130e] to-[#0d0b08]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <Reveal className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight text-gold font-extrabold">Meet Ganesh Khatri</h2>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-white/90">
                    A passionate cinematographer and videographer, originally from the mountains of Nepal and now 
                    creating from the vibrant city of Dubai. My lens captures not just 
                    images, but stories, emotions, and perspectives that resonate.
                  </p>
                  <p className="text-white/90">
                    With expertise in aerial filming and a keen eye for cinematic detail, I strive to push 
                    creative boundaries and deliver impactful visual content. Whether it's a sweeping 
                    landscape, an intimate portrait, or a dynamic commercial, my goal is to bring your 
                    vision to life with artistry and precision.
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button asChild className="bg-gold hover:bg-gold-dark text-black px-8 py-6 text-base font-medium">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More About Me
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            {/* Right Content - Stacked Photo Cards */}
            <Reveal delay={150} className="relative">
              <div className="relative w-72 sm:w-80 h-64 mx-auto lg:ml-auto lg:mr-0">
                {/* Background Card */}
                <div className="absolute top-0 left-6 sm:left-8 w-72 sm:w-80 h-64 bg-gradient-to-br from-gold/10 to-amber-700/10 rounded-2xl transform rotate-6 backdrop-blur-sm border border-white/10"></div>
                
                {/* Middle Card */}
                <div className="absolute top-4 left-3 sm:left-4 w-72 sm:w-80 h-64 bg-gradient-to-br from-gold/10 to-amber-900/20 rounded-2xl transform rotate-3 backdrop-blur-sm border border-white/10"></div>
                
                {/* Front Card with Image */}
                <div className="relative w-72 sm:w-80 h-64 bg-gradient-to-br from-[#1b1712] to-[#0d0b09] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <img src="/lovable-uploads/3dfd5c1f-48c7-4ae5-b473-93205595e87d.png" alt="Ganesh Khatri filming" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                {/* Small floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-gold/20 to-amber-600/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Film className="w-8 h-8 text-white" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* My Creative Services Section */}
      <section className="py-14 md:py-20 px-5 sm:px-6 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Reveal>
              <h2 className="text-4xl mb-6 text-gold text-center font-bold md:text-5xl">My Creative Services</h2>
              <p className="text-lg max-w-3xl mx-auto text-foreground/75">
                From breathtaking aerials to compelling visual narratives, I offer a range of services to bring your vision to life.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Service Cards */}
            <Reveal delay={0}>
            <Card className="h-full bg-card/80 border border-border/50 hover:bg-card/90 hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Film className="w-full h-full" />
                </div>
                <CardTitle className="text-xl font-normal text-gold">Drone Footage & Stills</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-foreground/70">
                  High-quality aerial stock footage and images for your projects. Licensed for commercial use.
                </CardDescription>
                <a href={inquiryLink('Drone Footage & Stills')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            </Reveal>

            <Reveal delay={80}>
            <Card className="h-full bg-card/80 border border-border/50 hover:bg-card/90 hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Camera className="w-full h-full" />
                </div>
                <CardTitle className="text-xl font-normal text-gold">Video & Photo Stocks</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-foreground/70">
                  A diverse library of creative video clips and photographs available for licensing.
                </CardDescription>
                <a href={inquiryLink('Video & Photo Stocks')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            </Reveal>

            <Reveal delay={160}>
            <Card className="h-full bg-card/80 border border-border/50 hover:bg-card/90 hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Mountain className="w-full h-full" />
                </div>
                <CardTitle className="text-xl font-normal text-gold">Event &amp; Wedding Films</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-foreground/70">
                  Cinematic coverage for weddings, events and brand shoots across Dubai and the UAE.
                </CardDescription>
                <a href={inquiryLink('Event & Wedding Films')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            </Reveal>

            <Reveal delay={0}>
            <Card className="h-full bg-card/80 border border-border/50 hover:bg-card/90 hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                  <VideoIcon className="w-full h-full" />
                </div>
                <CardTitle className="text-xl font-normal text-gold">On-Demand Shooting</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-foreground/70">
                  Professional videography and photography services tailored to your specific needs.
                </CardDescription>
                <a href={inquiryLink('On-Demand Shooting')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            </Reveal>

            <Reveal delay={80}>
            <Card className="h-full bg-card/80 border border-border/50 hover:bg-card/90 hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Users className="w-full h-full" />
                </div>
                <CardTitle className="text-xl font-normal text-gold">Team Bookings</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-foreground/70">
                  Full team available for visual ad shoots, events, and comprehensive photography/videography projects.
                </CardDescription>
                <a href={inquiryLink('Team Bookings')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                  Inquire Now <ChevronRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 text-primary">
                  <Film className="w-full h-full" />
                </div>
                <span className="text-xl font-light text-foreground">Ganesh Khatri</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cinematographer &amp; Videographer. Capturing stories that matter, crafting visuals that inspire.
              </p>
              <p className="text-sm text-muted-foreground">
                Based in Dubai, available worldwide.
              </p>
            </div>

            {/* Explore Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground">Explore</h3>
              <nav className="space-y-3">
                <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Me
                </Link>
                <Link to="/projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
                <Link to="/projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
                <Link to="/reel" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Reels
                </Link>
                <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <a href={mailtoLink()} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{site.email}</span>
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{site.whatsapp} (WhatsApp)</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-4">Connect Socially</h3>
                <div className="flex gap-4">
                  <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href={mailtoLink()} aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">© 2025 Ganesh Khatri. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Home;