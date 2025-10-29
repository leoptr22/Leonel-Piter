import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
   {
  title: "Clínica IDW",
  description: "Sitio web colaborativo para la gestión integral de una clínica médica. Permite reservar turnos, administrar médicos y visualizar solicitudes. Desarrollado con HTML, CSS, JavaScript y Bootstrap, con almacenamiento de datos mediante LocalStorage y SessionStorage, e inicio de sesión conectado a la API pública DummyJSON. Proyecto académico en equipo con control de versiones por ramas en Git, donde desempeñé el rol de líder de proyecto (PM).",
  image: "/idw.png?height=50&width=50",
  technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "API DummyJSON", "LocalStorage", "SessionStorage", "Git"],
  problem: "Falta de una herramienta web que centralice la gestión de turnos y personal médico.",
  solution: "Desarrollo de una aplicación web con módulo público y panel de administración, permitiendo reservas de turnos, gestión de médicos e integración con API para login seguro.",
  github: "https://github.com/leoptr22/IDW_27",
  demo: "https://leoptr22.github.io/IDW_27/index.html",
  featured: true
}
,
    {
      title: "Gestor de busqueda de COAS ",
      description: "Aplicación web desarrollada para la búsqueda sincronizada, consulta y carga de registros digitales de control de calidad en formato PDF, por lote. Especialmente útil para laboratorios o áreas técnicas que trabajan con documentación digital por producto/lote.",
      image: "/2.png?height=300&width=500",
      technologies: ["Html", "JavaScript (vainilla)", "Css", "Firebase"],
      problem: "Falta de espacio y perdida de tiempo en la busqueda, quien lo necesite tiene acceso inmediato",
      solution: "Busqueda letra por letra de documentos digitalizados",
      github: "https://github.com/leoptr22/labpyam",
      demo: "https://labpyam.vercel.app",
      featured: true,
    },
    {
      title: "Gestor de Contra-muestras",
      description: "Aplicación web desarrollada con React para registrar y consultar datos de contra-muestras en procesos productivos. Ideal para laboratorios, sectores de calidad o producción que requieren trazabilidad de forma ágil y centralizada.",
      image: "/3.png?height=300&width=500",
      technologies: ["Vite", "React", "Css", "Fetch API + Google Apps Script"],
      problem: "Generacion de registros y falta de practicidad",
      solution: "Registro in situ y consulta on line",
      github: "https://github.com/leoptr22/contra-muestras",
      demo: "https://contra-muestras.vercel.app",
      featured: true,
    }
  ];

  // Función para abrir enlaces
  const openLink = (url) => {
    
    const fullUrl = url.startsWith('http') ? url : `https://${url}`;
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-50  bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#3f3f46] via-[#71717a] to-[#d4d4d8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Proyectos</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluciones web desarrolladas para resolver problemas reales identificados en mi ambito laboral
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card  className="border-slate-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="mt-4 w-full h-64 lg:h-full object-cover"
                  />
                  {project.featured && <Badge className="absolute top-4  left-4 bg-slate-900">Proyecto Destacado</Badge>}
                </div>
                <div className="p-6 lg:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-slate-900  mb-2">{project.title}</CardTitle>
                    <p className="text-slate-600">{project.description}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Problema Identificado:</h4>
                        <p className="text-sm text-slate-600">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Solución Implementada:</h4>
                        <p className="text-sm text-slate-600">{project.solution}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Tecnologías:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        size="sm"
                        onClick={() => openLink(project.demo)}
                        className="hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openLink(project.github)}
                        className="hover:bg-slate-100 transition-colors"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}