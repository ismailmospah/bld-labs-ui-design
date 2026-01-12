import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-narrow">
        <div className="max-w-4xl">
          <h1 className="heading-display mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Building digital products that actually{" "}
            <span className="text-gradient">make sense.</span>
          </h1>
          
          <div className="space-y-4 mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="body-large max-w-2xl">
              We don't start with pixels.
            </p>
            <p className="body-large max-w-2xl">
              We start by understanding the problem, the user, and the business — then we design products that last.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Let's Build Something
            </Button>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block">
          <div className="w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
