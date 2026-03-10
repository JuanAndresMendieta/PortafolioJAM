"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Experiencia
        </h2>

        <div className="relative">
          {/* Línea central con gradiente */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {/* Banco de Bogotá */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pl-12 mb-12"
          >
            <div className="absolute left-[6px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
            <div className="bg-slate-900 p-6 rounded-xl border border-blue-500/30 shadow-lg hover:shadow-blue-500/40 transition-transform">
              <span className="text-sm text-blue-400">Abril 2024 — Julio 2025</span>
              <h3 className="text-xl font-semibold mt-2 text-white">Software Developer</h3>
              <p className="text-slate-400 text-sm mb-3">Banco de Bogotá</p>
              <p className="text-slate-300 leading-relaxed">
                Participé en soporte técnico de sistemas empresariales y en el desarrollo de soluciones internas para optimizar procesos.
              </p>
              <p className="text-slate-300 mt-3 leading-relaxed">
                Desarrollé un sistema de gestión de inventarios con Power Apps, C#, ASP.NET y SQL Server, mejorando el control de activos.
              </p>
            </div>
          </motion.div>

          {/* Freelance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pl-12 mb-12"
          >
            <div className="absolute left-[6px] top-2 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.7)]"></div>
            <div className="bg-slate-900 p-6 rounded-xl border border-green-500/30 shadow-lg hover:shadow-green-500/40 transition-transform">
              <span className="text-sm text-green-400">Enero 2023 — Actualidad</span>
              <h3 className="text-xl font-semibold mt-2 text-white">Desarrollador Web Freelance</h3>
              <p className="text-slate-400 text-sm mb-3">Proyectos independientes</p>
              <p className="text-slate-300 leading-relaxed">
                Diseño y desarrollo de múltiples páginas web para clientes de distintos sectores, aplicando React, TailwindCSS, ASP.NET y SQL Server.
              </p>
              <ul className="list-disc list-inside mt-3 text-slate-300 leading-relaxed">
                <li>Sistemas de reservas en línea para negocios locales.</li>
                <li>Optimización de rendimiento y SEO en sitios corporativos.</li>
                <li>Integración de bases de datos y paneles administrativos personalizados.</li>
              </ul>
            </div>
          </motion.div>

          {/* Sector real */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pl-12"
          >
            <div className="absolute left-[6px] top-2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.7)]"></div>
            <div className="bg-slate-900 p-6 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/40 transition-transform">
              <span className="text-sm text-purple-400">14 meses de experiencia</span>
              <h3 className="text-xl font-semibold mt-2 text-white">Experiencia en el sector real</h3>
              <p className="text-slate-300 leading-relaxed">
                Participación en proyectos que integran frontend y backend, asegurando escalabilidad, responsividad y presentación profesional de las aplicaciones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
