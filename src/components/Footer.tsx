import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Location & Contact */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">CLIMATIZE Studio</h3>
                <p className="text-muted-foreground">
                  Kalgoorlie's premier contrast therapy destination
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-fire" />
                  <span>123 Hannan Street, Kalgoorlie WA 6430</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-ice" />
                  <span>(08) 9021 1234</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-fire" />
                  <span>hello@climatizestudio.com.au</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-ice" />
                  <span>@climatize_kalgoorlie</span>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder & Gift Sessions */}
            <div className="space-y-6">
              <div className="bg-muted rounded-lg p-8 text-center">
                <MapPin className="h-12 w-12 text-fire mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Located in the heart of Kalgoorlie
                </p>
                <Button variant="outline" size="sm">
                  Get Directions
                </Button>
              </div>
              
              <div className="text-center">
                <Button variant="ice-gradient" size="lg" className="w-full">
                  Want to gift a session? Tap here
                </Button>
              </div>
            </div>
          </div>
          
          {/* Instagram Feed Preview */}
          <div className="mb-12">
            <h4 className="text-lg font-semibold mb-4 text-center">Follow Our Journey</h4>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-border pt-8 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              We never spam. Your booking is safe. Privacy policy available on request.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
              <span>© 2024 CLIMATIZE Studio Kalgoorlie</span>
              <span>•</span>
              <span>ABN: 12 345 678 901</span>
              <span>•</span>
              <span>Licensed & Insured</span>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-muted-foreground">
                Fire & Ice • Premium Contrast Therapy • Kalgoorlie's Wellness Destination
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;