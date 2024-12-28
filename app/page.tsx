import Link from 'next/link'
import EventCard from './components/EventCard'

export default function Home() {
  const events = [
    {
      title: "Galactic Tech Quiz ???",
      date: "10th January 2025",
      time: "8:00 am",
      location: "Nebula Lab, 2nd Floor",
      description: "Test your knowledge across the tech universe.",
      rules: [
        "Teams of 2 members each.",
        "Multiple choice and rapid-fire rounds.",
        "Use of electronic devices is strictly prohibited."
      ]
    },
    {
      title: "Cosmic Code Debugging",
      date: "10th January 2025",
      time: "8:45 am",
      location: "Quantum Computing Lab, 2nd Floor",
      description: "Unravel the mysteries in buggy alien codes.",
      rules: [
        "Individual participation.",
        "Time limit: 60 minutes.",
        "Languages allowed: C, C++, Java, Python."
      ]
    },
    {
      title: "Reverse Engineering: Decoding Alien Signals",
      date: "10th January 2025",
      time: "9:30 am",
      location: "Signal Processing Lab, 2nd Floor",
      description: "Decipher alien outputs and recreate their input signals.",
      rules: [
        "Teams of 2 members each.",
        "Time limit: 90 minutes.",
        "Use of any external resources is prohibited."
      ]
    },
    {
      title: "Intergalactic Sci-Fi Essay Writing",
      date: "11th January 2025",
      time: "8:00 am",
      location: "Holographic Projection Room, 2nd Floor",
      description: "Craft a cosmic tale of 1000-1500 words.",
      rules: [
        "Individual participation.",
        "Time limit: 120 minutes.",
        "Plagiarism will result in disqualification."
      ]
    },
    {
      title: "Warp Speed Typing Test",
      date: "11th January 2025",
      time: "8:45 am",
      location: "Starship Bridge Simulator, 2nd Floor",
      description: "Type at light speed to save the galaxy.",
      rules: [
        "Individual participation.",
        "Time limit: 5 minutes.",
        "Accuracy and speed will be evaluated."
      ]
    },
    {
      title: "Space Battle Royale: BGMI",
      date: "11th January 2025",
      time: "9:30 am",
      location: "Virtual Reality Arena, 2nd Floor",
      description: "Engage in interplanetary warfare in BGMI.",
      rules: [
        "Squad matches (4 players per team).",
        "Participants must bring their own devices.",
        "Use of emulators or hacks will result in disqualification."
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
        href="https://forms.google.com/technotia-registration" 
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

