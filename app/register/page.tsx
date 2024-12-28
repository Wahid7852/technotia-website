'use client'

import { useState } from 'react'
import StarryBackground from '../components/StarryBackground'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    event: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Your cosmic registration has been received! Prepare for launch!')
  }

  return (
    <div className="max-w-md mx-auto relative">
      <StarryBackground />
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-300">Cosmic Mission Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-yellow-200">Cosmic Identifier (Name):</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-yellow-200">Subspace Communication Channel (Email):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="college" className="block mb-1 text-yellow-200">Galactic Academy (College):</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded text-white"
          />
        </div>
        <div>
          <label htmlFor="event" className="block mb-1 text-yellow-200">Cosmic Event:</label>
          <select
            id="event"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-purple-900 bg-opacity-50 border border-purple-500 rounded text-white"
          >
            <option value="">Select a cosmic event</option>
            <option value="galactic-quiz">Galactic Tech Quiz</option>
            <option value="cosmic-debugging">Cosmic Code Debugging</option>
            <option value="reverse-engineering">Reverse Engineering: Decoding Alien Signals</option>
            <option value="intergalactic-essay">Intergalactic Sci-Fi Essay Writing</option>
            <option value="warp-speed-typing">Warp Speed Typing Test</option>
            <option value="space-battle-royale">Space Battle Royale: BGMI</option>
          </select>
        </div>
        <div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
            Launch Registration
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-green-300">Entry fees: 40 Cosmic Credits (to be paid at the Intergalactic Ticket Booth)</p>
    </div>
  )
}

