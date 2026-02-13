import { Shield, Users, FileText, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    icon: Shield,
    title: "Compliance & Legal",
    skills: [
      "Egyptian Labor Law Expertise (Law No. 14 of 2025)",
      "Social Insurance Regulations (Law No. 148 of 2019)",
      "Labor Inspections & Audits",
      "Legal Documentation & Reporting"
    ]
  },
  {
    icon: Users,
    title: "Talent Management",
    skills: [
      "Recruitment & Selection",
      "Performance Management",
      "Training & Development",
      "Employee Relations"
    ]
  },
  {
    icon: FileText,
    title: "Personnel Administration",
    skills: [
      "Payroll Management",
      "Social Insurance Processing",
      "Contract Management",
      "Medical Insurance Coordination"
    ]
  },
  {
    icon: TrendingUp,
    title: "Strategic HR",
    skills: [
      "HR Policy Development",
      "Organizational Development",
      "KPI Setting & Monitoring",
      "HR Analytics & Reporting"
    ]
  }
];

const technicalSkills = [
  "MS Office (Excel, Word, PowerPoint)",
  "HR Management Systems",
  "Labor Office Systems",
  "Social Insurance Platforms",
  "Payroll Software"
];

const Skills = () => {
  return (
    <section className="py-20 bg-muted/30" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Skills & Competencies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          {/* Main Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="shadow-medium hover:shadow-strong transition-all duration-300 border-none bg-gradient-to-br from-card to-accent/10 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <category.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Skills */}
          <Card className="shadow-medium border-none bg-gradient-to-br from-primary/5 to-secondary/5 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-medium">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Technical Proficiency</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
