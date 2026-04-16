import { Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t-2 border-primary/20 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4 text-primary">Seven Cakes</h3>
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
              <a href="https://www.instagram.com/seven.cakes/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@seven.cakes</span>
              </a>
              <a href="mailto:info@sevencakes.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@sevencakes.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>
        
        <div style={{fontSize: '12px'}} className="mt-8 pt-8 border-t border-primary/20 text-center text-muted-foreground">
          <p style={{ opacity: '0.7'}}>
            Designed with ❤️ by <a href="https://dreek.web.app" target="_blank" rel="noopener" style={{color: 'inherit', textDecoration: 'none', borderBottom: '1px dashed'}}>dr33k</a>
          </p> 
          <p>Cake icon by<a href="https://www.flaticon.com/free-icons/cake" title="cake icons" style={{color: 'inherit',borderBottom: '1px dashed'}}> surang</a></p>
          <p>&copy; {new Date().getFullYear()} seven's Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
