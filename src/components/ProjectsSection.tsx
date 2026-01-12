import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section id="work" className="section-padding border-t border-border">
      <div className="container-narrow">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="heading-section">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={`/project/${project.id}`}
                className="group block p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <h3 className="heading-card mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="body-base mb-4">
                    {project.shortDescription}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {project.category}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
