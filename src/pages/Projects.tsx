import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Projects = () => {
  // Dummy gallery for now — replace these with Ganesh's real photos/films later.
  const galleryItems = Array.from({ length: 18 }, (_, i) => ({
    src: `https://picsum.photos/seed/ganesh-work-${i + 1}/800/1000`,
    title: `Untitled Frame ${i + 1}`
  }));

  const PAGE_SIZE = 6;
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = galleryItems.slice(0, visible);
  const hasMore = visible < galleryItems.length;

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-red-500 mb-4">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            The Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A growing collection of frames, films and moments. More work is added
            all the time — check back often.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {shown.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-secondary/20"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8"
              >
                View More
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;