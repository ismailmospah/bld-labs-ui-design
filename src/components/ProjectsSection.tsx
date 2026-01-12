import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Wallet Platform",
    description: "A comprehensive mobile banking solution designed to simplify personal finance management for everyday users.",
    category: "Product Design / UX / UI",
  },
  {
    title: "Healthcare Management System",
    description: "End-to-end patient management platform improving healthcare delivery and administrative efficiency.",
    category: "Product Design / UX",
  },
  {
    title: "E-commerce Experience Redesign",
    description: "Complete shopping experience overhaul resulting in improved conversion rates and customer satisfaction.",
    category: "UX Research / UI Design",
  },
  {
    title: "SaaS Dashboard for Operations",
    description: "Data-driven operations dashboard helping teams make faster, more informed business decisions.",
    category: "Product Design / Product Strategy",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="heading-section">
            Selected Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a 
              key={project.title}
              href="#"
              className="group block p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-2xl font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="heading-card mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="body-base mb-4">
                {project.description}
              </p>
              <p className="text-sm text-primary font-medium">
                {project.category}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
