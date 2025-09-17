import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Local",
    text: "The contrast therapy changed my recovery game completely. Best investment in my wellness routine.",
    service: "Contrast Therapy",
    rating: 5
  },
  {
    name: "Mike T.",
    location: "FIFO Worker",
    text: "After long shifts, the sauna helps me unwind like nothing else. The infrared heat goes deep.",
    service: "Infrared Sauna",
    rating: 5
  },
  {
    name: "Emma L.",
    location: "Fitness Enthusiast",
    text: "Cold plunge after my workouts = next level recovery. I feel stronger and more energized.",
    service: "Cold Plunge",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real locals who've experienced the power of contrast therapy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-2 hover:glow-ice transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-fire text-fire" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust badge */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Join 200+ locals who've discovered the power of contrast therapy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;