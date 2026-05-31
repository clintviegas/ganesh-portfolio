import { Play, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Reel = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            DIRECTOR'S REEL
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            A curated collection of my finest work showcasing the evolution of 
            my visual storytelling journey
          </p>
        </div>
      </section>

      {/* Video Player Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video bg-secondary/20 rounded-lg overflow-hidden relative group">
            {/* Placeholder for video player */}
            <div className="w-full h-full bg-gradient-to-br from-secondary/40 to-secondary/60 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto group-hover:bg-background/30 transition-all duration-300 cursor-pointer hover:scale-110">
                  <Play className="w-10 h-10 text-foreground ml-2" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Demo Reel 2024
                </h3>
                <p className="text-muted-foreground">
                  3:24 minutes of cinematic excellence
                </p>
              </div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <div className="flex items-center gap-4">
              <Button variant="hero" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Play Reel
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              Last updated: March 2024
            </div>
          </div>
        </div>
      </section>

      {/* Video Details */}
      <section className="py-20 px-6 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                About This Reel
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  This reel represents a carefully curated selection of my most 
                  impactful work from the past two years, showcasing the breadth 
                  and depth of my cinematographic capabilities.
                </p>
                <p>
                  Each shot has been chosen to demonstrate different aspects of 
                  visual storytelling, from intimate character moments to sweeping 
                  cinematic landscapes.
                </p>
                <p>
                  The reel features work from commercial campaigns, narrative films, 
                  documentaries, and music videos, highlighting my versatility 
                  across different genres and formats.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Technical Specifications
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground">3:24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Resolution:</span>
                  <span className="text-foreground">4K UHD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="text-foreground">MP4 (H.264)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frame Rate:</span>
                  <span className="text-foreground">23.98 fps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Color Grade:</span>
                  <span className="text-foreground">REC.709</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Audio:</span>
                  <span className="text-foreground">Stereo 48kHz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reel;