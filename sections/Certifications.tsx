"use client"

import FadeIn from "../components/FadeIn"
import { FaMicrosoft, FaAws, FaGoogle, FaHtml5 } from "react-icons/fa"
import { SiVim } from "react-icons/si"

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Título */}
        <FadeIn>
          <h2 className="text-3xl font-bold mb-8 text-white text-center">
            Certificaciones
          </h2>
        </FadeIn>

        {/* Descripción */}
        <FadeIn>
          <p className="text-slate-400 mb-12 text-center max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
            Estas son algunas de las certificaciones que he obtenido y las que estoy en proceso de conseguir,
            reflejando mi compromiso con el aprendizaje continuo y la excelencia profesional.
          </p>
        </FadeIn>

        {/* Grid de certificaciones */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {/* Prompt Engineering for Everyone */}
          <FadeIn>
            <a
              href="https://courses.cognitiveclass.ai/certificates/a2fac5f9975c4caaa420a81abca14c7f"
              target="_blank"
              className="group bg-slate-800 rounded-xl p-6 shadow-lg border border-purple-500/30 
                         hover:shadow-purple-500/40 transition-transform active:scale-95 flex flex-col items-center text-center"
            >
              <SiVim className="text-purple-400 text-5xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Prompt Engineering 
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Certificación en fundamentos de ingeniería de prompts.
              </p>
            </a>
          </FadeIn>
                    
          {/* Multicloud Network Associate */}
          <FadeIn>
            <a
              href="https://www.credly.com/badges/6485f720-5579-4468-807e-8d115c1ba5fc/public_url"
              target="_blank"
              className="group bg-slate-800 rounded-xl p-6 shadow-lg border border-blue-500/30 
                         hover:shadow-blue-500/40 transition-transform active:scale-95 flex flex-col items-center text-center"
            >
              <FaMicrosoft className="text-blue-400 text-5xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Multicloud Network Associate AWS
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Certificación en fundamentos de la nube con Microsoft Azure.
              </p>
            </a>
          </FadeIn>

          {/* Create Web Page with HTML */}
          <FadeIn>
            <a
              href="https://courses.cognitiveclass.ai/certificates/bf617acb47f0410d8420efed46880c0c"
              target="_blank"
              className="group bg-slate-800 rounded-xl p-6 shadow-lg border border-orange-500/30 
                         hover:shadow-orange-500/40 transition-transform active:scale-95 flex flex-col items-center text-center"
            >
              <FaHtml5 className="text-orange-400 text-5xl mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Create Web Page with HTML
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Creación de página web con HTML, CSS y JavaScript.
              </p>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}