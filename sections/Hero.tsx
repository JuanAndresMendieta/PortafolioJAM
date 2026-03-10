"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white relative overflow-hidden">

      {/* Fondos glow dinámicos */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-20 left-20 animate-pulse"></div>
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-20 right-20 animate-pulse"></div>
      <div className="absolute -top-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-[ping_6s_linear_infinite]" />
      <div className="absolute -bottom-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-[ping_8s_linear_infinite]" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Juan Andrés Mendieta
          </h1>

          <TypeAnimation
            sequence={[
              "Ingeniero de Software",
              2000,
              "Desarrollador Full Stack",
              2000,
              "Construyendo soluciones digitales",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg sm:text-xl md:text-2xl text-blue-400 font-semibold drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]"
          />

          <p className="text-gray-400 mt-6 mb-8 max-w-xl text-base sm:text-lg leading-relaxed">
            Desarrollador de software especializado en aplicaciones web y soluciones empresariales.
            Experiencia en backend con C#, ASP.NET y Python, así como en el diseño de sistemas
            utilizando arquitecturas modernas.
          </p>
        </motion.div>

        {/* Avatar épico con colores */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Halo multicolor animado */}
          <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl animate-pulse"></div>

          {/* Contenedor con borde sólido */}
          <div className="relative w-64 h-64 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform">
            <Image
              src="/images/HojaVida.png"
              alt="Foto de Juan Andrés Mendieta"
              width={300}
              height={300}
              className="rounded-full shadow-2xl border-4 border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
