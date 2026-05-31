import { Button } from '@/components/ui/button';
import { Award, Camera, Film, Users, Plane, Clapperboard, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '@/lib/site';

const About = () => {
  const stats = [
    { icon: Film, label: "Projects Delivered", value: "120+" },
    { icon: Award, label: "Brands & Couples", value: "60+" },
    { icon: Users, label: "Happy Clients", value: "90+" },
    { icon: Camera, label: "Years Behind the Lens", value: "6+" }
  ];

  const skills = [
    { icon: Clapperboard, label: "Cinematography" },
    { icon: Plane, label: "Aerial / Drone" },
    { icon: Camera, label: "Wedding & Events" },
    { icon: Film, label: "Brand Films" },
    { icon: Wand2, label: "Post-Production" }
  ];

  // Dummy photos for now — swap these out for Ganesh's real work later.
  const gallery = Array.from({ length: 6 }, (_, i) =>
    `https://picsum.photos/seed/ganesh-about-${i + 1}/600/750`
  );

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-red-500 mb-4">
            The Storyteller Behind the Lens
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {site.tagline}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm {site.name} — a cinematographer and videographer turning real
            moments into films that linger. From the mountains of {site.origin} to
            the skyline of {site.baseCity}, I chase light, motion and emotion for a
            living.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                My Journey &amp; Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I grew up surrounded by the dramatic landscapes of Nepal, where a
                  love for capturing fleeting moments quickly turned into a career.
                  Today I create from Dubai, one of the most cinematic cities in the
                  world, bringing that same sense of wonder to every frame.
                </p>
                <p>
                  My work spans wedding and event films, brand and commercial
                  shoots, and aerial cinematography. Whether it's an intimate portrait
                  or a sweeping skyline, my goal is the same: to make people feel
                  something.
                </p>
                <p>
                  I believe great visuals come from collaboration. I work closely with
                  every client to understand their vision and bring it to life with
                  creativity, precision and a genuine passion for the craft.
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/seed/ganesh-portrait/800/1000"
                alt={`${site.name} on set`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Skills */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What I Do
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center">
                  <skill.icon className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-foreground font-medium">{skill.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments in Frame */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Moments in Frame
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, index) => (
              <div key={index} className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`Moment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-base font-medium">
              <Link to="/projects">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate on your next cinematic project.
          </p>
          <Button size="lg" asChild className="bg-red-500 hover:bg-red-600 text-white">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;