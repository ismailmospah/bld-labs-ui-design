const Footer = () => {
  return (
    <footer className="section-padding !py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              BLD<span className="text-primary">.</span>Labs
            </span>
            <span className="text-muted-foreground">
              — Product & Design Studio
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dribbble
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 BLD Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
