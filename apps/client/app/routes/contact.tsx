import { Mail, Phone, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { useForm} from 'react-hook-form';
import { EventType, CakeOrderSchema, CakeOrderDto} from '@yeezahs-cakes/shared-models';
import { useState } from 'react';
import { zodResolver} from '@hookform/resolvers/zod';

export async function loader() {return {}}

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const {register, handleSubmit, formState: {errors}, reset} = useForm<CakeOrderDto>({
    resolver: zodResolver(CakeOrderSchema)
  });

  const onSubmit = async (cakeOrder: CakeOrderDto)=>{
    
    const response = await fetch('/api/cakes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cakeOrder)
    });
    
    if(response.ok){
      setShowModal(true);
      reset();
    }else{
      alert("There was a problem submitting the form. Please contact the administratior");
    }
  }
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 text-primary">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create your perfect cake? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Phone */}
          <a 
            href="tel:+1234567890" 
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary/40 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/30 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2 text-primary">Phone</h3>
              <p className="text-foreground font-semibold mb-1">+1 (234) 567-890</p>
              <p className="text-sm text-muted-foreground">Mon-Fri: 9AM - 6PM</p>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:info@yeezahscakes.com" 
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary/40 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/30 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2 text-primary">Email</h3>
              <p className="text-foreground font-semibold mb-1">info@yeezahscakes.com</p>
              <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary/40 group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/30 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2 text-primary">WhatsApp</h3>
              <p className="text-foreground font-semibold mb-1">+1 (234) 567-890</p>
              <p className="text-sm text-muted-foreground">Chat with us anytime</p>
            </div>
          </a>
        </div>

        {/* Social Media & Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Instagram */}
          <div className="bg-gradient-to-br from-secondary to-accent rounded-lg p-8 shadow-lg border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Instagram className="w-8 h-8 text-primary" />
              <h2 className="text-2xl text-primary">Follow Us on Instagram</h2>
            </div>
            <p className="text-foreground mb-6">
              See our latest creations, behind-the-scenes content, and get inspired for your next cake order!
            </p>
            <a 
              href="https://www.instagram.com/yeezahs.cakes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md"
            >
              <Instagram className="w-5 h-5" />
              <span>@yeezahs.cakes</span>
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-2xl text-primary">Visit Our Bakery</h2>
            </div>
            <div className="text-foreground space-y-2 mb-6">
              <p className="font-semibold">Yeezah's Cakes</p>
              <p>123 Sweet Street</p>
              <p>Bakery District</p>
              <p>Confection City, CC 12345</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Please schedule an appointment before visiting to ensure we can give you our full attention.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border-2 border-primary/20">
            <h2 className="text-3xl mb-6 text-center text-primary">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-foreground">Name</label>
                  <input 
                  {...register('name')}
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-input-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                </div>
                <div>
                  <label className="block mb-2 text-foreground">Email</label>
                  <input
                  {...register('email')} 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-input-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-foreground">Phone</label>
                <input 
                {...register('phone')}
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-input-background focus:border-primary focus:outline-none transition-colors"
                  placeholder="+1 (234) 567-890"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

              </div>
              
              <div>
                <label className="block mb-2 text-foreground">Event Type</label>
                <select {...register('eventType')} className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-input-background focus:border-primary focus:outline-none transition-colors"
                >
                  <option>Please select a type of event</option>
                  <option value={EventType.WEDDING}>Wedding</option>
                  <option value={EventType.BIRTHDAY}>Birthday</option>
                  <option value={EventType.CORPORATE}>Corporate Event</option>
                  <option value={EventType.ANNIVERSARY}>Anniversary</option>
                  <option value={EventType.OTHER}>Other</option>
                </select>
                {errors.eventType && <p className="text-red-500 text-sm">{errors.eventType.message}</p>}
              </div>
              
              <div>
                <label className="block mb-2 text-foreground">Message</label>
                <textarea 
                {...register('message')}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-primary/20 bg-input-background focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your dream cake..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

              </div>
              
              <button 
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg"
              >
                Send Message
              </button>
            </form>

            {/* Success Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-xl text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Success!</h2>
                  <p className="text-gray-600 mb-6">Your form has been submitted.</p>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                  >
                    Great!
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
