import RippleGrid from './ui/RippleGrid'; 
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import TrueFocus from './ui/TrueFocus';




export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] relative overflow-hidden">
      {/* Componente Orb como fondo */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
  <RippleGrid
      particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">

            {/* H1 oculto para SEO */}
             <h1 className="sr-only">Leonel Piter</h1>

         <div className="mb-4" aria-hidden="true">
        <TrueFocus 
            sentence="Leonel Piter"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            Checker de Calidad | Desarrollador Web en formación (UNER)
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Profesional con amplia experiencia en control de calidad, actualmente en
            <span className="font-semibold text-white"> transición hacia el sector IT</span>. Especializado en crear
            soluciones web que resuelven problemas reales del mundo industrial.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4" />
            <span>leonelpiter@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="w-4 h-4" />
            <span>+54 3446-597723</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span>📍 Gualeguaychú, Entre Ríos</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild variant="default" size="lg">
            <a href="#projects">Ver Proyectos</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors">
            <a href="#contact">Contactar</a>
          </Button>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/leonelpiter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/leoptr22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
}
