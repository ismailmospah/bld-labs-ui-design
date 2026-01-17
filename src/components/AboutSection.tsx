import { motion } from "framer-motion";
import logo from "@/assets/App.svg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
                About Us
              </p>
              <h2 className="heading-section mb-6">
                About BLD Labs
              </h2>
            </div>
            <p className="body-large">
              BLD Labs is a product studio helping startups and companies turn complex ideas into clear, usable, and scalable digital products.
            </p>
            <p className="body-large">
              We believe great products are built on deep understanding — not assumptions. That's why research, strategy, and problem definition come before visuals.
            </p>
          </motion.div>

          {/* Right side - Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <img src={logo} alt="BLD Labs" className="h-48 md:h-64 lg:h-80 w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
