"use client"

import FadeIn from "../components/FadeIn"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-white">
            Tecnologías y Competencias
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed text-base sm:text-lg">
            Estas son las herramientas y lenguajes que utilizo para construir soluciones 
            robustas, escalables y con impacto real en el negocio.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Backend */}
          <FadeIn>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative p-6 bg-slate-800 rounded-xl shadow-lg border border-blue-500/30 
                         transition-transform hover:shadow-blue-500/40"
            >
              <h3 className="font-semibold mb-4 text-blue-400">Backend</h3>
              <ul className="space-y-2 text-slate-300 leading-relaxed text-sm sm:text-base">
                <li>C# — APIs y lógica empresarial</li>
                <li>ASP.NET — Aplicaciones web seguras</li>
                <li>Python — Automatización</li>
                <li>FastAPI — Servicios rápidos</li>
                <li>Entity Framework — ORM</li>
              </ul>
            </motion.div>
          </FadeIn>

          {/* Bases de Datos */}
          <FadeIn>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative p-6 bg-slate-800 rounded-xl shadow-lg border border-green-500/30 
                         transition-transform hover:shadow-green-500/40"
            >
              <h3 className="font-semibold mb-4 text-green-400">Bases de Datos</h3>
              <ul className="space-y-2 text-slate-300 leading-relaxed text-sm sm:text-base">
                <li>SQL Server — Consultas optimizadas</li>
                <li>PostgreSQL — Modelado avanzado</li>
                <li>MySQL — Integración web</li>
              </ul>
            </motion.div>
          </FadeIn>

          {/* Frontend */}
          <FadeIn>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative p-6 bg-slate-800 rounded-xl shadow-lg border border-purple-500/30 
                         transition-transform hover:shadow-purple-500/40"
            >
              <h3 className="font-semibold mb-4 text-purple-400">Frontend</h3>
              <ul className="space-y-2 text-slate-300 leading-relaxed text-sm sm:text-base">
                <li>React — Interfaces dinámicas</li>
                <li>Angular — Aplicaciones robustas</li>
                <li>TailwindCSS — Estilos modernos</li>
              </ul>
            </motion.div>
          </FadeIn>

          {/* Herramientas */}
          <FadeIn>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative p-6 bg-slate-800 rounded-xl shadow-lg border border-pink-500/30 
                         transition-transform hover:shadow-pink-500/40"
            >
              <h3 className="font-semibold mb-4 text-pink-400">Herramientas</h3>
              <ul className="space-y-2 text-slate-300 leading-relaxed text-sm sm:text-base">
                <li>Power Apps — Soluciones rápidas</li>
                <li>Power BI — Dashboards de datos</li>
                <li>Git — Control de versiones</li>
                <li>Docker — Despliegue eficiente</li>
              </ul>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
