import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-contact-heading">
            Contact Information
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-6" data-testid="text-office-info">
                  Office of the Vice Chancellor
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        GLA University
                        Administration Building, 3rd Floor<br />
                        University Campus, City - 123456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">vc@prestigiousuniversity.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-hours">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        (By appointment only)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl font-semibold mb-6" data-testid="text-form-heading">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    required
                    data-testid="input-subject"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-submit">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
