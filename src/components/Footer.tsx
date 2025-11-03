import coralLogo from "@/assets/coral-logo.svg";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-muted/30 border-t border-border/40">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img 
            src={coralLogo} 
            alt="Coral Academy" 
            className="h-8 w-auto opacity-80"
          />
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Coral Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
