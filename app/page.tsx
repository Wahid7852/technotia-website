import Link from 'next/link'
import EventCard from './components/EventCard'

export default function Home() {
  const events = [
    {
      title: "Reverse Coding",
      date: "21st February 2025",
      time: "8:00 am",
      location: "IT Lab, 2nd Floor",
      description: "Test your knowledge across the tech universe. An output will be given for which the participants have to write the source code",
      rules: [
        "Individual Participation",
        "Time limit: 90 minutes.",
        "Use of any external resources is prohibited."
      ]
    },
    {
      title: "Code Debug",
      date: "21st February 2025",
      time: "8:45 am",
      location: "IT Lab, 2nd Floor",
      description: "Unravel the mysteries in buggy codes.",
      rules: [
        "Individual participation.",
        "Time limit: 60 minutes.",
        "Languages allowed: C, Python."
      ]
    },
    {
      title: "Reverse Engineering: Decoding Jumbled Words",
      date: "21st February 2025",
      time: "9:30 am",
      location: "Signal Processing Lab, 2nd Floor",
      description: "Decipher jumbled outputs and recreate the source.",
      rules: [
        "Individual participation.",
        "Time limit: 60 minutes.",
      ]
    },
    {
      title: "Battle Royales!: BGMI, Free Fire, Valorant",
      date: "21st February 2025",
      time: "10:00 am",
      location: "IT Lab, 2nd Floor",
      description: "Engage in Battle Royales with your friends, competiting for the best team in this arena of players.",
      rules: [
        "Squad matches (Max 4 players per team).",
        "Participants must bring their own devices.",
        "Use of any type of hacks and modification tools will result in disqualification."
      ]
    }
  ]

  return (
    <div className="text-center relative z-10">
      <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800 minimal-glow">
        <br></br><br></br>Technotia
      </h1>
      <p className="text-2xl mb-8 text-blue-300">Embark on a Cosmic Journey of Technology and Innovation</p>
      <div className="mb-12">
        <p className="text-xl text-green-300">10th & 11th January, 2025</p>
        <p className="text-lg text-yellow-300">Kamaladevi College of Arts and Commerce, Kalyan, Vitthalwadi (E)</p>
      </div>
      <Link 
        href="https://forms.gle/WEHZMs5bdhbZywes5" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
      >
        Register Now
      </Link>
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-purple-300 minimal-glow">Featured Cosmic Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  )
}

