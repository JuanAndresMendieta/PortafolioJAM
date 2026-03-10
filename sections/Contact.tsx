"use client"

import { useState } from "react"
import { FaEnvelope, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa"

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <div id="contact" className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Abrir contacto"
      >
        <FaEnvelope size={22} />
      </button>

      {/* Menú desplegable */}
      {open && (
        <div className="mt-4 flex flex-col items-end space-y-3">
          <a
            href="https://www.instagram.com/juanandresmendieta.dev/"
            target="_blank"
            className="flex items-center space-x-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg hover:text-white transition-colors"
          >
            <FaInstagram /> <span>Instagram</span>
          </a>

          <a
            href="https://github.com/JuanAndresMendieta?tab=repositories"
            target="_blank"
            className="flex items-center space-x-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg hover:text-white transition-colors"
          >
            <FaGithub /> <span>GitHub</span>
          </a>

          <a
            href="https://wa.me/573232005614?text=Estoy%20interesado%20en%20tus%20servicios"
            target="_blank"
            className="flex items-center space-x-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg hover:text-white transition-colors"
          >
            <FaWhatsapp /> <span>WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/juan-andr%C3%A9s-mendieta-239aa628b/"
            target="_blank"
            className="flex items-center space-x-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg hover:text-white transition-colors"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      )}
    </div>
  )
}
