"use client"

import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg text-white">
          Juan Andres Mendieta
        </h1>

        {/* Botón hamburguesa en móvil */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden active:scale-95 transition"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Links en desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400">Sobre mí</a>
          <a href="#skills" className="hover:text-blue-400">Tecnologías</a>
          <a href="#experience" className="hover:text-blue-400">Experiencia</a>
          <a href="#certifications" className="hover:text-blue-400">Certificaciones</a>
          <a href="#projects" className="hover:text-blue-400">Proyectos</a>                    
        </div>
      </div>

      {/* Overlay detrás del menú */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed top-16 left-0 right-0 bg-slate-950/95 backdrop-blur border-t border-slate-800 px-6 py-6 flex flex-col gap-4 text-lg"
            >
              <a href="#about" onClick={handleLinkClick} className="hover:text-blue-400 active:scale-95 transition">Sobre mí</a>
              <a href="#skills" onClick={handleLinkClick} className="hover:text-blue-400 active:scale-95 transition">Tecnologías</a>
              <a href="#projects" onClick={handleLinkClick} className="hover:text-blue-400 active:scale-95 transition">Proyectos</a>
              <a href="#experience" onClick={handleLinkClick} className="hover:text-blue-400 active:scale-95 transition">Experiencia</a>
              <a href="#certifications" onClick={handleLinkClick} className="hover:text-blue-400 active:scale-95 transition">Certificaciones</a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

