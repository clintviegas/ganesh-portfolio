import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Film, Camera, Mountain, VideoIcon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { inquiryLink } from '@/lib/site';

const services = [
  {
    icon: Film,
    title: 'Drone Footage & Stills',
    description:
      'High-quality aerial stock footage and images for your projects. Licensed for commercial use.',
  },
  {
    icon: Camera,
    title: 'Video & Photo Stocks',
    description:
      'A diverse library of creative video clips and photographs available for licensing.',
  },
  {
    icon: Mountain,
    title: 'Event & Wedding Films',
    description:
      'Cinematic coverage for weddings, events and brand shoots across Dubai and the UAE.',
  },
  {
    icon: VideoIcon,
    title: 'On-Demand Shooting',
    description:
      'Professional videography and photography services tailored to your specific needs.',
  },
  {
    icon: Users,
    title: 'Team Bookings',
    description:
      'Full team available for visual ad shoots, events, and comprehensive photography/videography projects.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-4">
            What I Offer
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Creative Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From breathtaking aerials to compelling visual narratives, I offer a
            range of services to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card/80 border border-border/60 hover:border-gold/40 hover:bg-card transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 text-gold">
                    <service.icon className="w-full h-full" />
                  </div>
                  <CardTitle className="text-xl font-normal text-gold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-foreground/70">
                    {service.description}
                  </CardDescription>
                  <a
                    href={inquiryLink(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium"
                  >
                    Inquire Now <ChevronRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something unforgettable together.
          </p>
          <Button size="lg" asChild className="bg-gold hover:bg-gold-dark text-black">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
