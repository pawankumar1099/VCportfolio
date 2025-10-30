import FlipCard from '../FlipCard'

export default function FlipCardExample() {
  return (
    <div className="p-8 bg-background">
      <FlipCard
        className="h-64 w-64 mx-auto"
        front={
          <div className="w-full h-full bg-primary text-primary-foreground flex items-center justify-center rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Front</h3>
              <p>Click to flip</p>
            </div>
          </div>
        }
        back={
          <div className="w-full h-full bg-secondary text-secondary-foreground flex items-center justify-center rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Back</h3>
              <p>Click again</p>
            </div>
          </div>
        }
      />
    </div>
  )
}
