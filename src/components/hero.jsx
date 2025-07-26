import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]">
    
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Leonel Piter</h1>
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
          <Button asChild variant="outline" size="lg">
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
