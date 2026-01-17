import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectById, projects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-section mb-4">Project not found</h1>
          <Link to="/#work">
            <Button variant="hero">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="section-padding pt-32 pb-16 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              {project.category}
            </p>
            
            <h1 className="heading-display mb-6">
              {project.title}
            </h1>
            
            <p className="body-large max-w-3xl">
              {project.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Mockup Image */}
      <section className="section-padding !pt-32">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            <img 
              src={project.mockupImage} 
              alt={`${project.title} mockup`}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-card mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center text-sm">!</span>
                The Challenge
              </h2>
              <p className="body-base">
                {project.challenge}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-card mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">✓</span>
                Our Solution
              </h2>
              <p className="body-base">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results
      <section className="section-padding border-t border-border">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-12">Results & Impact</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-card border border-border"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                  <p className="text-foreground font-medium">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Navigation */}
      <section className="section-padding border-t border-border">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <Link 
              to={`/project/${prevProject.id}`}
              className="group flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all flex-1"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Previous</p>
                <p className="font-medium group-hover:text-primary transition-colors">{prevProject.title}</p>
              </div>
            </Link>
            
            <Link 
              to={`/project/${nextProject.id}`}
              className="group flex items-center justify-end gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all flex-1 text-right"
            >
              <div>
                <p className="text-sm text-muted-foreground mb-1">Next</p>
                <p className="font-medium group-hover:text-primary transition-colors">{nextProject.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
