import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="section-padding !py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="BLD Labs" className="h-7" />
            <span className="text-muted-foreground">
              — Product Studio
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
              Facebook
            </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instgram
            </a>
                                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
                                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mail
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
