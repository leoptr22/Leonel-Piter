"use client"

import { Target, Lightbulb, Users, TrendingUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function About() {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const observerRef = useRef()

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      elements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.unobserve(el)
        }
      })
    }
  })

  const highlights = [
    {
      icon: Target,
      title: "Enfoque en Soluciones",
      description: "Mis proyectos web nacen de problemas reales identificados en mi experiencia laboral",
    },
    {
      icon: TrendingUp,
      title: "Transición Estratégica",
      description: "Combinando 15+ años en control de calidad con nuevas habilidades en desarrollo web",
    },
    {
      icon: Lightbulb,
      title: "Pensamiento Analítico",
      description: "Capacidad para identificar problemas y crear soluciones tecnológicas eficientes",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Experiencia colaborando en mejoras de producción y proyectos multidisciplinarios",
    },
  ];

  // Función para determinar la dirección de animación
  const getAnimationDirection = (index) => {
    const directions = [
      { transform: "translateY(-40px) scale(0.8)", class: "-translate-y-10 scale-80" },
      { transform: "translateX(40px) scale(0.8)", class: "translate-x-10 scale-80" },
      { transform: "translateY(40px) scale(0.8)", class: "translate-y-10 scale-80" },
      { transform: "translateX(-40px) scale(0.8)", class: "-translate-x-10 scale-80" },
    ];
    return directions[index % 4];
  };

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-slate-900 mb-4 transform transition-all duration-700 opacity-0 -translate-y-10"
            data-animate
            data-index="about-title"
            style={{
              opacity: visibleItems.has("about-title") ? 1 : 0,
              transform: visibleItems.has("about-title") ? "translateY(0)" : "translateY(-40px)",
            }}
          >
            Sobre Mí
          </h2>
          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto transform transition-all duration-700 opacity-0 -translate-y-10"
            data-animate
            data-index="about-subtitle"
            style={{
              opacity: visibleItems.has("about-subtitle") ? 1 : 0,
              transform: visibleItems.has("about-subtitle") ? "translateY(0)" : "translateY(-40px)",
              transitionDelay: "200ms",
            }}
          >
            Mi transición del control de calidad industrial hacia el desarrollo web me permite crear soluciones
            tecnológicas con una perspectiva única, enfocada en resolver problemas reales y mejorar procesos.
          </p>
        </div>

        {/* Grid de highlights con animaciones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const animation = getAnimationDirection(index);

            return (
              <div
                key={index}
                className={`bg-white border border-slate-200 rounded-lg shadow-sm transition-all duration-700 opacity-0 ${animation.class} hover:bg-slate-100 hover:shadow-lg hover:-translate-y-1`}
                data-animate
                data-index={`highlight-${index}`}
                style={{
                  opacity: visibleItems.has(`highlight-${index}`) ? 1 : 0,
                  transform: visibleItems.has(`highlight-${index}`)
                    ? "translateX(0) translateY(0) scale(1)"
                    : animation.transform,
                  transitionDelay: `${400 + index * 150}ms`,
                }}
              >
                <div className="p-6 text-center">
                  <item.icon
                    className="w-12 h-12 text-slate-700 mx-auto mb-4 transform transition-all duration-300"
                    style={{
                      animationDelay: `${600 + index * 150}ms`,
                    }}
                  />
                  <h3 className="font-semibold text-slate-900 mb-2 transition-transform duration-300 hover:text-blue-600">{item.title}</h3>
                  <p className="text-sm text-slate-600 transition-colors duration-300 hover:text-blue-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sección "Mi Enfoque" con animación */}
        <div
          className="bg-slate-50 rounded-lg p-8 transform transition-all duration-700 opacity-0 translate-y-10"
          data-animate
          data-index="my-approach"
          style={{
            opacity: visibleItems.has("my-approach") ? 1 : 0,
            transform: visibleItems.has("my-approach") ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "1000ms",
          }}
        >
          <h3
            className="text-2xl font-semibold text-slate-900 mb-4 transform transition-all duration-700 opacity-0"
            data-animate
            data-index="approach-title"
            style={{
              opacity: visibleItems.has("approach-title") ? 1 : 0,
              transitionDelay: "1200ms",
            }}
          >
            Mi Enfoque
          </h3>
          <p
            className="text-slate-700 leading-relaxed mb-4 transform transition-all duration-700 opacity-0 translate-x-5"
            data-animate
            data-index="approach-p1"
            style={{
              opacity: visibleItems.has("approach-p1") ? 1 : 0,
              transform: visibleItems.has("approach-p1") ? "translateX(0)" : "translateX(20px)",
              transitionDelay: "1400ms",
            }}
          >
            Como profesional con más de 15 años en control de calidad y análisis de laboratorio, he desarrollado una
            mentalidad orientada a la mejora continua y la resolución de problemas. Esta experiencia me permite
            identificar oportunidades de optimización que otros podrían pasar por alto.
          </p>
          <p
            className="text-slate-700 leading-relaxed transform transition-all duration-700 opacity-0 translate-x-5"
            data-animate
            data-index="approach-p2"
            style={{
              opacity: visibleItems.has("approach-p2") ? 1 : 0,
              transform: visibleItems.has("approach-p2") ? "translateX(0)" : "translateX(20px)",
              transitionDelay: "1600ms",
            }}
          >
            Mis proyectos web no son solo ejercicios académicos, sino soluciones pensadas para problemas reales del
            mundo industrial y empresarial. Cada línea de código está respaldada por años de experiencia práctica en
            procesos productivos y mejora continua.
          </p>
        </div>
      </div>
    </section>
  );
}
