import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section mb-6">
            Let's build something that works —{" "}
            <span className="text-gradient">not just looks good.</span>
          </h2>
          
          <p className="body-large mb-10 max-w-xl mx-auto">
            If you're serious about building a meaningful digital product, we're ready to help.
          </p>

          <Button variant="hero" size="xl">
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
