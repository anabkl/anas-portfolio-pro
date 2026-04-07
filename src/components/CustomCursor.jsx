import { useState, useEffect } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  const springConfig = { damping: 25, stiffness: 200 }
  const ringX = useSpring(useMotionValue(-100), springConfig)
  const ringY = useSpring(useMotionValue(-100), springConfig)

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      ringX.set(e.clientX)
      ringY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [ringX, ringY])

  return (
    <>
      {/* Dot */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          width: 8,
          height: 8,
          backgroundColor: '#00f5ff',
          boxShadow: '0 0 8px #00f5ff',
          left: position.x - 4,
          top: position.y - 4,
          transform: 'translate(0, 0)',
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full border border-[#00f5ff]"
        style={{
          width: 32,
          height: 32,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(0,245,255,0.3)',
        }}
      />
    </>
  )
}
