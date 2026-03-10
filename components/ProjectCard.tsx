"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  github: string
}

export default function ProjectCard({ title, description, github }: ProjectCardProps) {

  return (

    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition"
    >

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-slate-400 mb-4">
        {description}
      </p>

      <a
        href={github}
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        Ver en GitHub
      </a>

    </motion.div>

  )
}