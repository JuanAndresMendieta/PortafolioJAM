"use client"

import { motion } from "framer-motion"

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow animado */}
      <motion.div
        initial={{ opacity: 0.6, scale: 0.9 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl top-[-150px] left-[-150px]"
      />

      <motion.div
        initial={{ opacity: 0.6, scale: 0.9 }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-3xl bottom-[-150px] right-[-150px]"
      />
    </div>
  )
}
