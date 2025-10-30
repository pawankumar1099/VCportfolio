export default function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full animate-morph animate-float-slow blur-3xl"
        style={{ animationDelay: '0s' }}
      />
      <div 
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/15 rounded-full animate-morph animate-float blur-3xl"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/20 rounded-full animate-morph animate-float-slow blur-3xl"
        style={{ animationDelay: '4s' }}
      />
      <div 
        className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-primary/15 rounded-full animate-morph animate-float blur-3xl"
        style={{ animationDelay: '6s' }}
      />
    </div>
  );
}
