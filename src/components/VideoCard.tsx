import { Play } from 'lucide-react';
import { Badge } from './ui/badge';

interface VideoCardProps {
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  className?: string;
}

const VideoCard = ({ title, description, thumbnail, category, className = "" }: VideoCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-card cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] ${className}`}>
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-card-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <Badge 
          variant="secondary" 
          className="absolute top-4 left-4 bg-secondary/80 backdrop-blur-sm text-secondary-foreground"
        >
          {category}
        </Badge>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-background/30 group-hover:scale-110">
            <Play className="w-6 h-6 text-foreground ml-1" />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;