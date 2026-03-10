"use client"

import FadeIn from "../components/FadeIn"
import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Proyectos destacados
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-center leading-relaxed text-base sm:text-lg">
            Una selección de aplicaciones y sitios web que he desarrollado en el banco, la universidad y de manera independiente.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inventarios Banco */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-slate-800 rounded-xl shadow-lg border border-blue-500/30 hover:shadow-blue-500/40 transition-transform"
            >
              <h3 className="font-semibold text-blue-400 mb-2">Gestión de Inventarios</h3>
              <p className="text-slate-300 text-sm mb-2">Banco de Bogotá</p>
              <p className="text-slate-400 leading-relaxed">
                Sistema interno para el control de activos empresariales, desarrollado con Power Apps, C#, ASP.NET y SQL Server. 
                Mejoró la trazabilidad y redujo errores en el registro de inventarios.
              </p>
            </motion.div>
          </FadeIn>

          {/* Semilla Urbana */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-slate-800 rounded-xl shadow-lg border border-green-500/30 hover:shadow-green-500/40 transition-transform"
            >
              <h3 className="font-semibold text-green-400 mb-2">Semilla Urbana</h3>
              <p className="text-slate-300 text-sm mb-2">Aplicación web con arquitectura hexagonal</p>
              <p className="text-slate-400 leading-relaxed">
                Proyecto académico que aplicó principios de arquitectura limpia para gestionar iniciativas urbanas. 
                Enfocado en escalabilidad y separación de capas.
              </p>
            </motion.div>
          </FadeIn>

          {/* Sabores de mi Tierra */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-slate-800 rounded-xl shadow-lg border border-pink-500/30 hover:shadow-pink-500/40 transition-transform"
            >
              <h3 className="font-semibold text-pink-400 mb-2">Sabores de mi Tierra</h3>
              <p className="text-slate-300 text-sm mb-2">Libro de recetas digital</p>
              <p className="text-slate-400 leading-relaxed">
                Página web que recopila recetas tradicionales, con diseño responsivo y enfoque en experiencia de usuario. 
                Proyecto universitario que combinó frontend moderno con contenido cultural.
              </p>
            </motion.div>
          </FadeIn>

          {/* Agencia de Barbarias */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-slate-800 rounded-xl shadow-lg border border-purple-500/30 hover:shadow-purple-500/40 transition-transform"
            >
              <h3 className="font-semibold text-purple-400 mb-2">Agencia de Barbarias</h3>
              <p className="text-slate-300 text-sm mb-2">Aplicación en Mendix</p>
              <p className="text-slate-400 leading-relaxed">
                Plataforma para la gestión de citas y servicios en barberías locales. 
                Desarrollada con Mendix, integrando flujos de negocio y experiencia de usuario intuitiva.
              </p>
            </motion.div>
          </FadeIn>

          {/* Activautos CDA */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-slate-800 rounded-xl shadow-lg border border-yellow-500/30 hover:shadow-yellow-500/40 transition-transform"
            >
              <h3 className="font-semibold text-yellow-400 mb-2">Activautos CDA</h3>
              <p className="text-slate-300 text-sm mb-2">Proyecto UX/UI</p>
              <p className="text-slate-400 leading-relaxed">
                Página web diseñada en el curso de UX/UI, enfocada en la experiencia de clientes de un centro de diagnóstico automotor. 
                Incluyó prototipado y pruebas de usabilidad.
              </p>
            </motion.div>
          </FadeIn>

          {/* Proyectos universitarios */}
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-slate-800 rounded-xl shadow-lg border border-teal-500/30 hover:shadow-teal-500/40 transition-transform"
            >
              <h3 className="font-semibold text-teal-400 mb-2">Proyectos universitarios</h3>
              <p className="text-slate-300 text-sm mb-2">Aplicaciones y sitios web</p>
              <p className="text-slate-400 leading-relaxed">
                Diversos proyectos académicos que abarcan desde aplicaciones CRUD hasta páginas web interactivas. 
                Cada uno fue una oportunidad para aplicar nuevas tecnologías y metodologías de desarrollo.
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
