import ScrollProgressIndicator from '../ScrollProgressIndicator'

export default function ScrollProgressIndicatorExample() {
  return (
    <div className="relative h-screen">
      <ScrollProgressIndicator />
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Scroll Progress Indicator</h2>
        <p className="text-muted-foreground">
          Scroll down to see the progress indicator at the top of the page.
        </p>
        <div className="h-[200vh] mt-8 bg-gradient-to-b from-muted/30 to-transparent" />
      </div>
    </div>
  )
}
