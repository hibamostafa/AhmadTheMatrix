import { Target, Shield, Users, Globe } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Mission = () => {
  const missionPoints = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Efficiency First",
      description: "Building streamlined HR processes that maximize productivity and minimize administrative burden."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Excellence",
      description: "Ensuring every HR operation aligns perfectly with Egyptian labor laws and best practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "People-Focused",
      description: "Creating HR systems that empower both employees and organizations to grow with confidence."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Network",
      description: "Leveraging extensive connections with Social Insurance Offices and government authorities across Egypt."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" id="mission">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              My Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To help businesses build efficient, compliant, and people-focused HR systems that empower 
              both employees and organizations to grow with confidence.
            </p>
          </div>

          {/* Mission Points */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {missionPoints.map((point, index) => (
              <Card key={index} className="group border-none bg-gradient-to-br from-card to-accent/10 shadow-medium hover:shadow-strong transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-primary-foreground shadow-medium group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Work With Me */}
          <Card className="border-none bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10 shadow-strong">
            <CardContent className="p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Why Work With Me
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  One of my strongest assets is my extensive experience with Social Insurance Offices and 
                  government authorities across Egypt — backed by a powerful nationwide network.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This allows me to navigate official processes efficiently, ensuring that every HR operation 
                  I support aligns perfectly with Egyptian labor laws and best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
