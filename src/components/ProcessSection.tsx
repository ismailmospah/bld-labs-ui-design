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
        <div className="mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Process
          </p>
          <h2 className="heading-section">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-gradient">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="body-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
