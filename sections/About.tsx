"use client"

import FadeIn from "../components/FadeIn"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Fondo dinámico mejorado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent animate-pulse" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-[ping_6s_linear_infinite]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-[ping_8s_linear_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Texto */}
        <div className="text-left max-w-xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-white">
              Sobre mí
            </h2>
          </FadeIn>

          <FadeIn>
            <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
              Ingeniero en Software apasionado por crear aplicaciones web y soluciones empresariales
              que combinan solidez técnica con experiencias visuales impactantes.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-slate-400 mt-6 leading-relaxed text-base sm:text-lg">
              Experiencia con C#, ASP.NET, Python y SQL Server, aplicando arquitecturas modernas
              para garantizar escalabilidad y mantenibilidad.
            </p>
          </FadeIn>

          <FadeIn>
            <p className="text-slate-400 mt-6 leading-relaxed text-base sm:text-lg">
              Mi filosofía: construir con calidad, aprender constantemente y aportar valor en cada línea de código.
            </p>
          </FadeIn>
        </div>

        {/* Imágenes */}
        <FadeIn>
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/images/Presentacion1.png"
              alt="Presentación de Juan Andrés Mendieta"
              width={300}
              height={300}
              className="rounded-xl shadow-lg border border-slate-700 hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
            />

            <Image
              src="/images/Amazon1.png"
              alt="Proyecto Amazon de Juan Andrés Mendieta"
              width={300}
              height={300}
              className="rounded-xl shadow-lg border border-slate-700 hover:scale-105 active:scale-95 transition-transform hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
