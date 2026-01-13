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
                className="group block rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow overflow-hidden"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.mockupImage} 
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-foreground/80 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-card mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="body-base mb-3 line-clamp-2">
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
