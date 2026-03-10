import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Background from "../components/Background"
//import CustomCursor from "../components/CustomCursor"
import Spotlight from "../components/Spotlight"

import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import  Certifications from "../sections/Certifications"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"

export default function Home() {

  return (

    <main className="relative bg-slate-950 text-white antialiased">

      <Background />

      <Spotlight />

      {/* <CustomCursor /> */}

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Certifications />

      <Projects />

      <Contact />

      <Footer />

    </main>

  )
}