import { Link } from 'react-router-dom';
import { Cake } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <Cake className="w-8 h-8" />
            <span className="text-foreground">Yeezah's Cakes</span>
          </Link>
          
          <div className="flex gap-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
