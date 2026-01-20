import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-primary/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4 text-primary">Yeezah's Cakes</h3>
            <p className="text-muted-foreground">
              Creating sweet memories with every cake, crafted with love and passion.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4">Connect With Us</h3>
            <div className="flex flex-col gap-3">
              <a href="https://www.instagram.com/yeezahs.cakes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@yeezahs.cakes</span>
              </a>
              <a href="mailto:info@yeezahscakes.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@yeezahscakes.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <a href="https://www.flaticon.com/free-icons/cake" title="cake icons">Cake favicon created by surang - Flaticon</a>

          <p>&copy; {new Date().getFullYear()} Yeezah's Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
