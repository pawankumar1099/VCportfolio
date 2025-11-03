export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4">
          <p className="font-serif text-xl font-semibold" data-testid="text-footer-university">
            GLA University
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} GLA University. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">
            Excellence in Education, Innovation in Research, Leadership for Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
