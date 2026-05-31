import { Link, useLocation } from 'react-router-dom';
import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Gallery',
    path: '/projects'
  }, {
    name: 'Reels',
    path: '/reel'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between mx-0 py-0 my-0 px-[2px]">
          {/* Left side - Logo */}
          <Link to="/" className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <Film className="w-6 h-6 text-gold" />
            <span className="text-lg font-medium tracking-wide">Ganesh Khatri</span>
          </Link>
          
          {/* Right side - Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-black bg-gold px-4 py-2 rounded' : 'text-white/80 hover:text-gold'}`}>
                {item.name}
              </Link>)}
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;