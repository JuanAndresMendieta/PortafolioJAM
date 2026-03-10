"use client"

import { FaEnvelope, FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-gray-400 py-8 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent animate-pulse -z-10" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Texto */}
        <p className="text-sm text-center md:text-left">
          © 2026 Juan Andrés Mendieta. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.instagram.com/juanandresmendieta.dev/"
            target="_blank"
            className="hover:text-white transition-colors transform hover:scale-110 active:scale-95"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/JuanAndresMendieta?tab=repositories"
            target="_blank"
            className="hover:text-white transition-colors transform hover:scale-110 active:scale-95"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://wa.me/573232005614?text=Estoy%20interesado%20en%20tus%20servicios"
            target="_blank"
            className="hover:text-white transition-colors transform hover:scale-110 active:scale-95"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://www.linkedin.com/in/juan-andr%C3%A9s-mendieta-239aa628b/"
            target="_blank"
            className="hover:text-white transition-colors transform hover:scale-110 active:scale-95"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
