import { Star, Quote } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const cakeImages = [
  {
    url: 'https://images.unsplash.com/photo-1686354715541-8fa88eee016d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0ZWQlMjBwaW5rJTIwY2FrZXxlbnwxfHx8fDE3Njc4NzQ5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegant Pink Cake'
  },
  {
    url: 'https://images.unsplash.com/photo-1655411880489-2f0d18785863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzY3ODc0OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Chocolate Birthday Cake'
  },
  {
    url: 'https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzY3ODExOTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Wedding Cake'
  },
  {
    url: 'https://images.unsplash.com/photo-1555526148-0fa555bb2e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1cGNha2VzfGVufDF8fHx8MTc2Nzg3NDkzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Colorful Cupcakes'
  },
  {
    url: 'https://images.unsplash.com/photo-1557803056-4acbacad87d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMGNha2UlMjBmbG93ZXJzfGVufDF8fHx8MTc2Nzg3NDkzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Celebration Cake'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    review: 'Seven created the most beautiful wedding cake for us! Not only was it stunning, but it tasted absolutely divine. Every guest raved about it!',
    rating: 5,
    occasion: 'Wedding'
  },
  {
    id: 2,
    name: 'Michael Chen',
    review: 'The birthday cake for my daughter was a masterpiece! She was thrilled with the design and everyone loved the flavor. Highly recommend!',
    rating: 5,
    occasion: 'Birthday'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    review: 'Amazing attention to detail and incredible taste! Seven brought my vision to life perfectly. Will definitely order again!',
    rating: 5,
    occasion: 'Anniversary'
  },
  {
    id: 4,
    name: 'David Thompson',
    review: 'Professional, creative, and delicious! The cake was the highlight of our corporate event. Thank you, Seven!',
    rating: 5,
    occasion: 'Corporate Event'
  }
];

export async function loader() {return {}}

export function Homepage() {
  // 1. Initialize Autoplay plugin with options
  const autoplayOptions = { 
    delay: 1500, 
    stopOnInteraction: false, 
    stopOnMouseEnter: true 
  };
  
  // 2. Initialize Embla with options and the Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false
    }, 
    [Autoplay(autoplayOptions)]
  );

  // 3. State to track the active index for the dots
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 4. Navigation handlers
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // 5. Set up listeners when API is ready
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Force autoplay play on mount/re-init
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (autoplay) autoplay.play();

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  // Guard clause for empty data
  if (!cakeImages || cakeImages.length === 0) {
    return (
      <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-xl flex items-center justify-center">
        <p className="text-gray-400">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 py-8">
            <h1 className="text-5xl mb-4 text-primary">Welcome to Seven Cakes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where every cake is a masterpiece, crafted with love, creativity, and the finest ingredients
            </p>
          </div>
          
           {/* Carousel*/}
            <div className="relative group max-w-5xl mx-auto px-4">
              <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                
                {/* Container: This holds all the slides in a row */}
                <div className="flex">
                  {cakeImages.map((cake, index) => (
                    <div 
                      key={index} 
                      className="relative flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                    >
                      {/* Slide Content */}
                      <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl bg-gray-200">
                        <img 
                          src={cake?.url} 
                          alt={cake?.title || 'Cake Image'}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                          <h3 className="text-white text-2xl font-semibold">{cake?.title}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            {/* Custom Navigation Buttons (Visible on Hover) */}
            <button
              onClick={scrollPrev}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full text-pink-600 shadow-lg transition-all transform hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 z-20 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full text-pink-600 shadow-lg transition-all transform hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 z-20 flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>

            {/* Enhanced Progress Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {cakeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi && emblaApi.scrollTo(index)}
                  className={`h-2.5 transition-all duration-300 rounded-full ${
                    selectedIndex === index ? 'w-8 bg-pink-500' : 'w-2.5 bg-pink-200 hover:bg-pink-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Read reviews from our happy customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-secondary/30 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary/20"
              >
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-4 italic">
                  "{testimonial.review}"
                </p>

                <div className="border-t border-primary/20 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.occasion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-secondary to-accent p-12 rounded-2xl shadow-xl">
            <h2 className="text-4xl mb-4 text-foreground">Ready to Order Your Dream Cake?</h2>
            <p className="text-lg text-foreground/80 mb-8">
              Let's create something sweet and memorable together!
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
