import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { site, whatsappLink, mailtoLink } from '@/lib/site';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Ganesh, I'd like to start a project.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Project Type: ${formData.projectType || 'N/A'}\n\n` +
      `${formData.message}`;
    window.open(whatsappLink(text), '_blank');
    toast({
      title: "Opening WhatsApp\u2026",
      description: "Your message is ready to send to Ganesh on WhatsApp.",
    });
    setFormData({ name: '', email: '', projectType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            LET'S CREATE
            <br />
            TOGETHER
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on your next cinematic
            project and create something extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-secondary/10 p-6 sm:p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Start a Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">Your Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="projectType" className="text-foreground">Project Type</Label>
                  <Input
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    placeholder="e.g., Commercial, Documentary, Music Video"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">Tell me about your project</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your vision, goals, and any specific requirements..."
                    rows={6}
                    required
                    className="mt-1 resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  I'm always excited to discuss new projects and creative opportunities. 
                  Whether you have a clear vision or just an idea, let's explore how we 
                  can bring it to life through compelling visual storytelling.
                </p>
              </div>

              <div className="space-y-6">
                <a href={mailtoLink()} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{site.email}</p>
                  </div>
                </a>

                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{site.whatsapp}</p>
                  </div>
                </a>

                <a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Instagram className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Instagram</h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{site.instagramHandle}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">{site.baseCity}</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent 
                  projects, please mention it in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;