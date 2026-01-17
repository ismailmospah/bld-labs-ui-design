import { motion } from "framer-motion";
import { Layers, Search, Palette, Code } from "lucide-react";
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
    icon: Code,
    title: "Development",
    description: "Full-stack web & mobile development — Frontend, Backend, and Flutter solutions",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Services
          </p>
          <h2 className="heading-section">
            What We Do
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="heading-card mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="body-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
