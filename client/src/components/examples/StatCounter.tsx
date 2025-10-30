import StatCounter from '../StatCounter'

export default function StatCounterExample() {
  return (
    <div className="p-8 bg-background">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatCounter end={25} suffix="+" label="Years of Service" />
        <StatCounter end={150} suffix="+" label="Publications" />
        <StatCounter end={50} suffix="+" label="Awards" />
        <StatCounter end={5000} suffix="+" label="Students Mentored" />
      </div>
    </div>
  )
}
