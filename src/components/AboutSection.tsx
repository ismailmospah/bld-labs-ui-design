const AboutSection = () => {
  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">
              About Us
            </p>
            <h2 className="heading-section">
              About BLD Labs
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="body-large">
              BLD Labs is a product-focused design studio helping startups and companies turn complex ideas into clear, usable, and scalable digital products.
            </p>
            <p className="body-base">
              We believe great products are built on deep understanding — not assumptions. That's why research, strategy, and problem definition come before visuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
