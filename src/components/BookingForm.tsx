import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    time: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service || !formData.time) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to book your session.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    toast({
      title: "Booking Confirmed! 🔥❄️",
      description: "You're booked. See you soon at CLIMATIZE Studio!",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="text-center glow-fire-intense">
              <CardContent className="p-12 space-y-6">
                <div className="text-6xl">🔥❄️</div>
                <h3 className="text-2xl font-bold">You're booked!</h3>
                <p className="text-muted-foreground">
                  See you soon at [Your Studio Name]. 
                  Check your email for session details.
                </p>
                <Button
                  variant="premium"
                  onClick={() => setIsSubmitted(false)}
                  className="w-full"
                >
                  Book Another Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="bg-card/95 backdrop-blur-sm border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">
                Book Your Session
              </CardTitle>
              <p className="text-muted-foreground">
                Lock in your spot in under 30 seconds
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-input/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-input/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-input/50">
                      <SelectValue placeholder="Choose your therapy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sauna">🔴 Infrared Sauna</SelectItem>
                      <SelectItem value="cold-plunge">🔵 Cold Plunge</SelectItem>
                      <SelectItem value="contrast">🔁 Contrast Therapy (Both)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                    <SelectTrigger className="bg-input/50">
                      <SelectValue placeholder="When works best?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  type="submit"
                  variant="fire-gradient"
                  size="lg"
                  className="w-full animate-pulse-slow"
                >
                  Lock It In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;