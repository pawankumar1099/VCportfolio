import AnimatedSection from '../AnimatedSection'

export default function AnimatedSectionExample() {
  return (
    <div className="space-y-8 p-8">
      <AnimatedSection>
        <div className="p-8 bg-card rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Animated Content 1</h2>
          <p className="text-muted-foreground">This content fades in and slides up when scrolled into view.</p>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="p-8 bg-card rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Animated Content 2</h2>
          <p className="text-muted-foreground">This content appears with a slight delay.</p>
        </div>
      </AnimatedSection>
    </div>
  )
}
