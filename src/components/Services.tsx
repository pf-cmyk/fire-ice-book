import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Thermometer, Snowflake, Repeat } from "lucide-react";

const services = [
  {
    icon: <Thermometer className="h-8 w-8" />,
    title: "🔴 Infrared Sauna",
    description: "Detox, relax, recover",
    details: "Deep penetrating heat therapy that promotes detoxification, muscle recovery, and deep relaxation. Experience the healing power of infrared technology.",
    buttonVariant: "fire" as const,
    buttonText: "Book Sauna",
    glowClass: "glow-fire"
  },
  {
    icon: <Snowflake className="h-8 w-8" />,
    title: "🔵 Cold Plunge",
    description: "Reduce inflammation, boost energy",
    details: "Therapeutic cold water immersion that reduces inflammation, boosts metabolism, and enhances mental clarity. Feel the invigorating power of cold therapy.",
    buttonVariant: "ice" as const,
    buttonText: "Book Cold Plunge",
    glowClass: "glow-ice"
  },
  {
    icon: <Repeat className="h-8 w-8" />,
    title: "🔁 Contrast Therapy",
    description: "Fire + Ice combo",
    details: "The ultimate wellness experience combining the benefits of both sauna and cold plunge. Maximize recovery, boost circulation, and elevate your wellness journey.",
    buttonVariant: "premium" as const,
    buttonText: "Book Combo",
    glowClass: "glow-fire-intense"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Therapy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each service is designed to optimize your recovery, boost your energy, and enhance your overall wellbeing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:${service.glowClass} transition-all duration-300 transform hover:scale-105 bg-card/80 backdrop-blur-sm border-2`}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="flex justify-center text-fire group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-lg font-medium text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.details}
                </p>
                
                <Button 
                  variant={service.buttonVariant}
                  size="lg"
                  className="w-full"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;