import EventCard from '../components/EventCard'
import ReverseCode from '../images/reverse-coding.jpg'

export default function Events() {
  const events = [
    {
      title: "Reverse Coding",
      date: "21st February 2025",
      time: "8:00 am",
      location: "IT Lab, 2nd Floor",
      description: "Test your knowledge across the tech universe. An output will be given for which the participants have to write the source code",
      rules: [
        "Individual Participation",
        "Time limit: 30 minutes.",
        "Use of any external resources is prohibited."
      ],
      image: ReverseCode,
    },
    {
      title: "Code Debug",
      date: "21st February 2025",
      time: "8:45 am",
      location: "IT Lab, 2nd Floor",
      description: "Unravel the mysteries in buggy codes."
    },
    {
      title: "Reverse Engineering: Decoding Jumbled Words",
      date: "21st February 2025",
      time: "9:30 am",
      location: "Signal Processing Lab, 2nd Floor",
      description: "Decipher jumbled outputs and recreate the source."
    },
    {
      title: "Battle Royales!: BGMI, Free Fire",
      date: "21st February 2025",
      time: "10:00 am",
      location: "IT Lab, 2nd Floor",
      description: "Engage in Battle Royales with your friends, competiting for the best team in this arena of players."
    }
  ]

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-300 minimal-glow">Cosmic Event Schedule</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  )
}

