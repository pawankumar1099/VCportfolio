import AnimatedBlobs from '../AnimatedBlobs'

export default function AnimatedBlobsExample() {
  return (
    <div className="relative h-screen bg-background">
      <AnimatedBlobs />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold">Animated Background Blobs</h1>
      </div>
    </div>
  )
}
