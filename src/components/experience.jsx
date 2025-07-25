import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useState, useEffect, useRef } from 'react';

export function Experience() {
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

  const experiences = [
    {
      title: "Checker de Calidad / Analista de Laboratorio",
      company: "Laboratorio Pyam",
      period: "Octubre 2010 - Presente",
      location: "Gualeguaychú, Entre Ríos",
      responsibilities: [
        "Supervisión de procesos productivos",
        "Control de calidad y ensayos de laboratorio",
        "Elaboración de informes técnicos",
        "Colaboración en mejoras de producción",
      ],
      skills: ["Control de Calidad", "Análisis de Laboratorio", "Mejora Continua", "Informes Técnicos"],
    },
    {
      title: "Operario Maquinista",
      company: "Rontaltex S.A.",
      period: "Julio 2004 - Octubre 2010",
      location: "Gualeguaychú, Entre Ríos",
      responsibilities: [
        "Operación de maquinaria textil",
        "Control de calidad en producción",
        "Mantenimiento preventivo",
        "Solución de fallas menores",
      ],
      skills: ["Operación de Maquinaria", "Mantenimiento", "Resolución de Problemas", "Producción Textil"],
    },
  ];

  const education = [
    {
      title: "Técnico Universitario en Desarrollo Web",
      institution: "Universidad Nacional de Entre Ríos (UNER)",
      status: "En curso",
      type: "Carrera Universitaria",
    },
    {
      title: "Técnico Superior en Productividad y Calidad Total",
      institution: "Instituto Idessa",
      period: "2009 - 2011",
      status: "Adeudo TP final",
      type: "Carrera Técnica",
    },
  ];

  const certifications = [
    "Frontend Developer (Alura Latam / Oracle ONE)",
    "Fullstack Node.js (Codo a Codo 4.0)",
    "React: Desarrollo con JavaScript",
    "Gestión Ágil de Proyectos",
    "React: Function Components",
    "Programa Oracle Next Education - Front-end",
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-50 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#d1d5db] via-[#6b7280] to-[#374151]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experiencia & Formación</h2>
          <p className="text-xl text-slate-600">
            Una sólida base en control de calidad complementada con formación en desarrollo web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experiencia Laboral - Desliza desde la izquierda */}
          <div>
            <h3 
              className="text-2xl font-semibold text-slate-900 mb-6 transform transition-all duration-700 opacity-0 -translate-x-10"
              data-animate
              data-index="title-left"
              style={{
                opacity: visibleItems.has('title-left') ? 1 : 0,
                transform: visibleItems.has('title-left') ? 'translateX(0)' : 'translateX(-40px)'
              }}
            >
              Experiencia Laboral
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="border-slate-200 transform transition-all duration-700 opacity-0 -translate-x-10"
                  data-animate
                  data-index={`exp-${index}`}
                  style={{
                    opacity: visibleItems.has(`exp-${index}`) ? 1 : 0,
                    transform: visibleItems.has(`exp-${index}`) ? 'translateX(0)' : 'translateX(-40px)',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-900">{exp.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 mb-4 text-slate-700">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Formación - Desliza desde la derecha */}
          <div>
            <h3 
              className="text-2xl font-semibold text-slate-900 mb-6 transform transition-all duration-700 opacity-0 translate-x-10"
              data-animate
              data-index="title-right"
              style={{
                opacity: visibleItems.has('title-right') ? 1 : 0,
                transform: visibleItems.has('title-right') ? 'translateX(0)' : 'translateX(40px)'
              }}
            >
              Formación Académica
            </h3>
            <div className="space-y-4 mb-8">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="border-slate-200 transform transition-all duration-700 opacity-0 translate-x-10"
                  data-animate
                  data-index={`edu-${index}`}
                  style={{
                    opacity: visibleItems.has(`edu-${index}`) ? 1 : 0,
                    transform: visibleItems.has(`edu-${index}`) ? 'translateX(0)' : 'translateX(40px)',
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-slate-900">{edu.title}</h4>
                    <p className="text-slate-600">{edu.institution}</p>
                    {edu.period && <p className="text-sm text-slate-500">{edu.period}</p>}
                    <div className="flex gap-2 mt-2">
                      <Badge variant={edu.status === "En curso" ? "default" : "outline"}>{edu.status}</Badge>
                      <Badge variant="secondary">{edu.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 
              className="text-2xl font-semibold text-slate-900 mb-6 transform transition-all duration-700 opacity-0 translate-x-10"
              data-animate
              data-index="cert-title"
              style={{
                opacity: visibleItems.has('cert-title') ? 1 : 0,
                transform: visibleItems.has('cert-title') ? 'translateX(0)' : 'translateX(40px)'
              }}
            >
              Certificaciones
            </h3>
            <Card 
              className="border-slate-200 transform transition-all duration-700 opacity-0 translate-x-10"
              data-animate
              data-index="certifications"
              style={{
                opacity: visibleItems.has('certifications') ? 1 : 0,
                transform: visibleItems.has('certifications') ? 'translateX(0)' : 'translateX(40px)'
              }}
            >
              <CardContent className="p-4">
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}