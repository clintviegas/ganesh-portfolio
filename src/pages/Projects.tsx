import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Reveal from '@/components/Reveal';

const Projects = () => {
  // Dummy gallery for now — replace these with Ganesh's real photos/films later.
  const galleryItems = Array.from({ length: 18 }, (_, i) => ({
    src: `https://picsum.photos/seed/ganesh-work-${i + 1}/800/1000`,
    title: `Untitled Frame ${i + 1}`
  }));

  const PAGE_SIZE = 6;
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown = galleryItems.slice(0, visible);
  const hasMore = visible < galleryItems.length;

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const showPrev = useCallback(
    () => setLightbox((i) => (i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length)),
    [galleryItems.length]
  );
  const showNext = useCallback(
    () => setLightbox((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [galleryItems.length]
  );

  // Keyboard controls + body scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="py-16 md:py-20 px-6">
        <Reveal className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-4">
            Selected Work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            The Gallery
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A growing collection of frames, films and moments. More work is added
            all the time — check back often.
          </p>
        </Reveal>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {shown.map((item, index) => (
              <Reveal key={index} delay={(index % 3) * 80}>
                <button
                  type="button"
                  onClick={() => setLightbox(index)}
                  aria-label={`Open ${item.title}`}
                  className="group relative block w-full aspect-[4/5] rounded-lg overflow-hidden bg-secondary/20 cursor-pointer"
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
                </button>
              </Reveal>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <Button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black px-8"
              >
                View More
                <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-[calc(1rem+env(safe-area-inset-top))] right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <figure className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightbox].src.replace('/800/1000', '/1200/1500')}
              alt={galleryItems[lightbox].title}
              className="max-h-[80vh] w-auto mx-auto rounded-lg object-contain"
            />
            <figcaption className="text-center text-white/80 text-sm mt-4">
              {galleryItems[lightbox].title} · {lightbox + 1} / {galleryItems.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;