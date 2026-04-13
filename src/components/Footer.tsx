import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="section-padding !py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col items-center justify-between gap-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="BLD Labs" className="h-7" />
            <span className="text-muted-foreground/50">
              — Product Studio
            </span>
          </div>

          {/* Links Section - Responsive wrapping */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 max-w-full px-4">
            <a href="https://www.linkedin.com/company/bld-labs/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              LinkedIn
            </a>
            <a href="https://x.com/bld_labs?s=21" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Twitter
            </a>
            <a href="https://www.facebook.com/share/17wT9DX4nm/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Facebook
            </a>
            <a href="https://www.instagram.com/bldlabs?igsh=Y2RuZXNjb2RlcWh0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@bld.labs?_r=1&_t=ZS-93QfRJeNITV" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              TikTok
            </a>
            <a href="https://www.behance.net/bld_labscompany" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Behance
            </a>
            <a href="mailto:bldlabscompany@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Mail
            </a>
            <a href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Roadmap
            </a>
            <a href="/blogs" className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Blogs
            </a>
          </div>

          {/* Copyright Section */}
          <p className="text-sm text-muted-foreground text-center">
            © 2026 BLD Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;