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
            <a href="https://www.linkedin.com/company/bld-labs/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://x.com/bld_labs?s=21" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="https://www.facebook.com/share/17wT9DX4nm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Facebook
            </a>
            <a href="https://www.instagram.com/bldlabs?igsh=Y2RuZXNjb2RlcWh0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@bld.labs?_r=1&_t=ZS-93QfRJeNITV" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              TikTok
            </a>
            <a href="mailto:bldlabscompany@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
