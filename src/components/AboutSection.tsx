import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              About Us
            </p>
            <h2 className="heading-section mb-8">
              About BLD Labs
            </h2>
            <div className="p-6 rounded-xl bg-card border border-border inline-block">
              <img src={logo} alt="BLD Labs" className="h-12 md:h-16" />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="body-large">
              BLD Labs is a product-focused design studio helping startups and companies turn complex ideas into clear, usable, and scalable digital products.
            </p>
            <p className="body-base">
              We believe great products are built on deep understanding — not assumptions. That's why research, strategy, and problem definition come before visuals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
