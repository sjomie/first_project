'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  image: string
}

export function RotatingPortfolio() {
  const [rotation, setRotation] = useState(0)
  const [isRotating, setIsRotating] = useState(true)
  const projects: Project[] = [
    { id: 1, title: 'Project 1', image: '/project1.jpg' },
    { id: 2, title: 'Project 2', image: '/project2.jpg' },
    { id: 3, title: 'Project 3', image: '/project3.jpg' },
    { id: 4, title: 'Project 4', image: '/project4.jpg' },
    { id: 5, title: 'Project 5', image: '/project5.jpg' },
  ]

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isRotating) {
      intervalId = setInterval(() => {
        setRotation((prevRotation) => (prevRotation + 1) % 360)
      }, 50)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isRotating])

  const toggleRotation = () => {
    setIsRotating((prev) => !prev)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-[700px] h-[700px] mb-8">
        {projects.map((project, index) => {
          const angle = (index * 360) / projects.length
          return (
            <motion.div
              key={project.id}
              className="absolute w-36 h-20 flex items-center justify-center bg-white rounded-lg shadow-md"
              style={{
                top: '50%',
                left: '50%',
                margin: '-10px 0 0 -18px',
              }}
              animate={{
                x: `${Math.cos((rotation + angle) * Math.PI / 180) * 250}px`,
                y: `${Math.sin((rotation + angle) * Math.PI / 180) * 250}px`,
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                x: { duration: 0.05, ease: 'linear' },
                y: { duration: 0.05, ease: 'linear' },
                rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-sm font-semibold">{project.title}</h3>
            </motion.div>
          )
        })}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <img
              src="/placeholder.svg?height=192&width=192"
              alt="Profile"
              className="w-44 h-44 rounded-full object-cover"
            />
          </div>
          <input
            type="text"
            placeholder="Prénom"
            className="px-3 py-2 border border-gray-300 rounded-md text-center w-48 mb-2"
          />
          <input
            type="text"
            placeholder="Nom"
            className="px-3 py-2 border border-gray-300 rounded-md text-center w-48"
          />
        </div>
      </div>
      <Button
        onClick={toggleRotation}
        className="flex items-center gap-2"
      >
        {isRotating ? (
          <>
            Pause
            <Pause className="w-5 h-5" />
          </>
        ) : (
          <>
            Resume
            <Play className="w-5 h-5" />
          </>
        )}
      </Button>
    </div>
  )
}