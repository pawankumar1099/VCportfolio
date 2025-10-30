import RevealText from '../RevealText'

export default function RevealTextExample() {
  return (
    <div className="p-8 bg-background">
      <RevealText 
        text="This text reveals word by word with a beautiful blur effect"
        className="text-4xl font-bold text-center"
      />
    </div>
  )
}
