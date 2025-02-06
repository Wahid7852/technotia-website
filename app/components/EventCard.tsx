"use client"

import { JSX, useState } from "react"
import { Dialog } from "@headlessui/react"
import Image, { type StaticImageData } from "next/image"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  description: string
  rules?: string[]
  image?: string | StaticImageData | (() => JSX.Element)
}

export default function EventCard({ title, date, time, location, description, rules, image }: EventCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg shadow-lg border border-purple-500 hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
      {image && (
        <div className="mb-4">
          {typeof image === "string" || "src" in image ? (
            <Image
              src={typeof image === "string" ? image : image.src}
              alt={title}
              width={500}
              height={400}
              className="rounded-lg object-cover w-full h-48"
            />
          ) : typeof image === "function" ? (
            <div className="w-full h-48 overflow-hidden rounded-lg">{image()}</div>
          ) : null}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-cyan-300 minimal-glow">{title}</h3>
      <p className="mb-1 text-yellow-200">
        <strong>Date:</strong> {date}
      </p>
      <p className="mb-1 text-yellow-200">
        <strong>Time:</strong> {time}
      </p>
      <p className="mb-2 text-yellow-200">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-green-300 mb-4">{description}</p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        View Rules
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded bg-purple-900 p-6 text-white">
            <Dialog.Title className="text-2xl font-bold mb-4">{title} Rules</Dialog.Title>
            <ul className="list-disc pl-5 space-y-2">
              {rules?.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}