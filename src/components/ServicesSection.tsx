import { Layers, Search, Palette, Target } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Product Design",
    description: "Designing end-to-end digital products that balance business goals, user needs, and technical constraints.",
  },
  {
    icon: Search,
    title: "UX Research",
    description: "Uncovering real user problems through research, testing, and insights that guide confident product decisions.",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Creating clean, accessible, and consistent interfaces that feel professional and intentional.",
  },
  {
    icon: Target,
    title: "Product Strategy",
    description: "Defining product direction, priorities, and structure to ensure long-term clarity and growth.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Services
          </p>
          <h2 className="heading-section">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-card mb-4">
                {service.title}
              </h3>
              <p className="body-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
