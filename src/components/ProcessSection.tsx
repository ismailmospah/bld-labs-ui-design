import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding the problem, users, and business context.",
  },
  {
    number: "02",
    title: "Define",
    description: "Turning insights into clear product direction and structure.",
  },
  {
    number: "03",
    title: "Design",
    description: "Designing thoughtful experiences and interfaces.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Preparing production-ready designs that scale.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Process
          </p>
          <h2 className="heading-section">
            How We Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number} 
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="mb-4">
                <span className="text-5xl font-bold text-gradient group-hover:opacity-100 opacity-80 transition-opacity">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="body-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
