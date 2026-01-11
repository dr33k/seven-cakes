import { NavLink } from 'react-router';
import { Cake } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-primary" end>
            <Cake className="w-8 h-8" />
            <span className="text-foreground">Yeezah's Cakes</span>
          </NavLink>
          
          <div className="flex gap-8">
            <NavLink 
              to="/" 
              className="text-foreground hover:text-primary transition-colors duration-200" end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200" end
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-200" end
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
