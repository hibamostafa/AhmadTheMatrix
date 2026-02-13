import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mohamed",
      position: "HR Director",
      company: "Tech Solutions Egypt",
      content: "Ahmed's expertise in Egyptian labor law and social insurance coordination saved us countless hours and ensured full compliance. His systematic approach to HR operations transformed our entire department.",
      rating: 5,
      service: "HR Operations Setup"
    },
    {
      name: "Omar Hassan",
      position: "CEO",
      company: "Manufacturing Group",
      content: "Working with Ahmed was a game-changer for our company. His deep understanding of government processes and nationwide network helped us navigate complex compliance requirements seamlessly.",
      rating: 5,
      service: "Legal Compliance"
    },
    {
      name: "Fatma Ali",
      position: "Operations Manager",
      company: "Retail Chain",
      content: "Ahmed's comprehensive HR policies and procedures review helped us build a solid foundation for growth. His attention to detail and practical solutions are unmatched in the industry.",
      rating: 5,
      service: "Policy Development"
    },
    {
      name: "Ahmed Youssef",
      position: "Founder",
      company: "Startup Incubator",
      content: "As a growing startup, we needed expert guidance on HR setup. Ahmed provided exactly what we needed - efficient, compliant, and scalable HR systems that grew with our business.",
      rating: 5,
      service: "HR Infrastructure"
    }
  ];

  const stats = [
    { number: "50+", label: "Companies Served" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "3000+", label: "Employees Managed" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              What Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what business leaders across Egypt say about 
              working with our HR consulting services.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none bg-gradient-to-br from-card to-accent/10 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-none bg-gradient-to-br from-card to-accent/5 shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Service Badge */}
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {testimonial.service}
                  </Badge>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-4xl mx-auto border-none bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 shadow-strong">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Join Our Success Stories?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Let's discuss how I can help your organization achieve the same level of HR excellence 
                  and compliance that our clients have experienced.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    ✓ Proven Track Record
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    ✓ Industry Expertise
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">
                    ✓ Client-Focused Approach
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
