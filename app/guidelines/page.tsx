import EventCard from '../components/EventCard'

export default function Events() {
  const events = [
    {
      title: "Galactic Tech Quiz ???",
      date: "10th January 2025",
      time: "8:00 am",
      location: "Nebula Lab, 2nd Floor",
      description: "Test your knowledge across the tech universe."
    },
    {
      title: "Cosmic Code Debugging",
      date: "10th January 2025",
      time: "8:45 am",
      location: "Quantum Computing Lab, 2nd Floor",
      description: "Unravel the mysteries in buggy alien codes."
    },
    {
      title: "Reverse Engineering: Decoding Alien Signals",
      date: "10th January 2025",
      time: "9:30 am",
      location: "Signal Processing Lab, 2nd Floor",
      description: "Decipher alien outputs and recreate their input signals."
    },
    {
      title: "Intergalactic Sci-Fi Essay Writing",
      date: "11th January 2025",
      time: "8:00 am",
      location: "Holographic Projection Room, 2nd Floor",
      description: "Craft a cosmic tale of 1000-1500 words."
    },
    {
      title: "Warp Speed Typing Test",
      date: "11th January 2025",
      time: "8:45 am",
      location: "Starship Bridge Simulator, 2nd Floor",
      description: "Type at light speed to save the galaxy."
    },
    {
      title: "Space Battle Royale: BGMI",
      date: "11th January 2025",
      time: "9:30 am",
      location: "Virtual Reality Arena, 2nd Floor",
      description: "Engage in interplanetary warfare in BGMI."
    }
  ]

  return (
    <div className="relative">
      <h2 className="text-4xl font-bold mb-8 text-center text-purple-300 cosmic-text">Cosmic Event Schedule</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  )
}

