"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)

  }, [])

  return (
    <div
      className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-[999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)"
      }}
    />
  )
}