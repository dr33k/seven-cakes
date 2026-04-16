import { Clock, MapPin, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 text-primary">About Seven Cakes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turning your sweetest dreams into delicious reality
          </p>
        </div>

        {/* Values Section */}
        <section className="mt-16 mb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary to-accent p-12 rounded-2xl shadow-xl text-center">
            <h2 className="text-3xl mb-6 text-foreground">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground">
              <div>
                <h3 className="text-xl mb-3">Quality</h3>
                <p>Only the finest ingredients make it into our creations</p>
              </div>
              <div>
                <h3 className="text-xl mb-3">Creativity</h3>
                <p>Each cake is a unique work of art tailored to you</p>
              </div>
              <div>
                <h3 className="text-xl mb-3">Excellence</h3>
                <p>We're committed to perfection in every detail</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Story */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl text-primary">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-4">
                Welcome to Seven Cakes, where passion meets perfection in every slice! Founded with a love for baking and a commitment to quality, we've been creating memorable cakes that bring joy to celebrations of all kinds.
              </p>
              <p className="mb-4">
                Every cake we create is a labor of love, crafted with the finest ingredients and meticulous attention to detail. Whether it's a wedding, birthday, anniversary, or any special occasion, we believe that every moment deserves a cake as unique and special as the celebration itself.
              </p>
              <p>
                Our journey began with a simple dream: to share the joy of beautifully crafted, delicious cakes with our community. Today, we're proud to have become a trusted name in custom cake design, serving clients who appreciate artistry, quality, and exceptional taste.
              </p>
            </div>
          </div>
        </section>

        {/* Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Opening Hours */}
          <div className="bg-secondary/30 rounded-lg p-8 shadow-md border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h2 className="text-2xl text-primary">Opening Hours</h2>
            </div>
            <div className="space-y-3 text-foreground">
              <div className="flex justify-between">
                <span className="font-semibold">Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sunday:</span>
                <span>Closed</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-primary/20">
                *Orders by appointment only. Please contact us in advance to schedule a consultation.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-secondary/30 rounded-lg p-8 shadow-md border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-2xl text-primary">Location</h2>
            </div>
            <div className="space-y-3 text-foreground">
              <p className="font-semibold">Seven Cakes</p>
              <p>123 Sweet Street</p>
              <p>Bakery District</p>
              <p>Confection City, CC 12345</p>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-primary/20">
                We're located in the heart of the Bakery District, easily accessible by public transport and with ample parking nearby.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-secondary/30 rounded-lg p-8 shadow-md border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl text-primary">Our Mission</h2>
            </div>
            <div className="text-foreground">
              <p className="mb-4">
                To create exceptional custom cakes that exceed our clients' expectations and become the centerpiece of their most cherished celebrations.
              </p>
              <p className="mb-4">
                We strive to combine artistic excellence with outstanding taste, ensuring that every cake is not just beautiful to look at, but a delight to eat.
              </p>
              <p className="font-semibold text-primary">
                Your celebration, our passion!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export async function loader(){return {title: "About"};}
