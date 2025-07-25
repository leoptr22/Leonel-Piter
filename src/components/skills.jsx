import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Wrench, Users } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Skills() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      elements.forEach(el => {
        if (observerRef.current) {
          observerRef.current.unobserve(el);
        }
      });
    };
  });

  const skillCategories = [
    {
      icon: Code,
      title: "Desarrollo Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: Database,
      title: "Desarrollo Backend",
      skills: ["Node.js", "Python", "MySQL", "Firebase", "API REST"],
      color: "bg-green-50 border-green-200",
    },
    {
      icon: Wrench,
      title: "Herramientas & Metodologías",
      skills: ["Git", "GitHub", "Gestión Ágil", "Control de Calidad", "Análisis de Procesos"],
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: Users,
      title: "Habilidades Blandas",
      skills: [
        "Pensamiento Lógico",
        "Trabajo en Equipo",
        "Capacidad Analítica",
        "Resolución de Problemas",
        "Aprendizaje Autodidacta",
      ],
      color: "bg-orange-50 border-orange-200",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título - Aparece desde arriba */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold text-slate-900 mb-4 transform transition-all duration-700 opacity-0 -translate-y-10"
            data-animate
            data-index="title"
            style={{
              opacity: visibleItems.has('title') ? 1 : 0,
              transform: visibleItems.has('title') ? 'translateY(0)' : 'translateY(-40px)'
            }}
          >
            Habilidades
          </h2>
          <p 
            className="text-xl text-slate-600 transform transition-all duration-700 opacity-0 -translate-y-10"
            data-animate
            data-index="subtitle"
            style={{
              opacity: visibleItems.has('subtitle') ? 1 : 0,
              transform: visibleItems.has('subtitle') ? 'translateY(0)' : 'translateY(-40px)',
              transitionDelay: '200ms'
            }}
          >
            Combinando experiencia industrial con tecnologías modernas de desarrollo web
          </p>
        </div>

        {/* Grid de habilidades - Aparecen con efecto de escala y desde diferentes direcciones */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            // Alternar direcciones: izquierda-derecha-izquierda-derecha
            const isEven = index % 2 === 0;
            const translateDirection = isEven ? '-translate-x-10' : 'translate-x-10';
            const transformValue = isEven ? 'translateX(-40px) scale(0.9)' : 'translateX(40px) scale(0.9)';
            
            return (
              <Card 
                key={index} 
                className={`${category.color} hover:shadow-lg transition-all duration-700 opacity-0 ${translateDirection} scale-90`}
                data-animate
                data-index={`skill-${index}`}
                style={{
                  opacity: visibleItems.has(`skill-${index}`) ? 1 : 0,
                  transform: visibleItems.has(`skill-${index}`) ? 'translateX(0) scale(1)' : transformValue,
                  transitionDelay: `${300 + index * 150}ms`
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-slate-900">
                    <category.icon className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-white/80 transform transition-all duration-300 hover:scale-105"
                        style={{
                          animationDelay: `${800 + index * 150 + idx * 50}ms`
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sección de ventaja competitiva - Aparece desde abajo */}
        <div 
          className="mt-12 bg-slate-50 rounded-lg p-8 transform transition-all duration-700 opacity-0 translate-y-10"
          data-animate
          data-index="competitive-advantage"
          style={{
            opacity: visibleItems.has('competitive-advantage') ? 1 : 0,
            transform: visibleItems.has('competitive-advantage') ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '900ms'
          }}
        >
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 text-center">Mi Ventaja Competitiva</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "15+ Años de Experiencia",
                description: "Sólida base en control de calidad y mejora de procesos industriales"
              },
              {
                title: "Enfoque Práctico", 
                description: "Desarrollo soluciones web basadas en problemas reales del mundo laboral"
              },
              {
                title: "Aprendizaje Continuo",
                description: "Constante actualización en tecnologías y metodologías de desarrollo"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="transform transition-all duration-700 opacity-0 translate-y-5"
                data-animate
                data-index={`advantage-${index}`}
                style={{
                  opacity: visibleItems.has(`advantage-${index}`) ? 1 : 0,
                  transform: visibleItems.has(`advantage-${index}`) ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${1100 + index * 200}ms`
                }}
              >
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}