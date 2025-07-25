import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from 'react';

export function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "leonelpiter@gmail.com",
      href: "mailto:leonelpiter@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 3446-597723",
      href: "tel:+5434465977723",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Gualeguaychú, Entre Ríos",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/leonelpiter",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/leoptr22",
      color: "hover:text-gray-900",
    },
  ];

  const openLinkedIn = () => {
    window.open("https://linkedin.com/in/leonelpiter", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d1d5db] via-[#6b7280] to-[#374151]">
      <div className="max-w-4xl mx-auto">
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
            Contacto
          </h2>
          <p 
            className="text-xl text-white transform transition-all duration-700 opacity-0 -translate-y-10"
            data-animate
            data-index="subtitle"
            style={{
              opacity: visibleItems.has('subtitle') ? 1 : 0,
              transform: visibleItems.has('subtitle') ? 'translateY(0)' : 'translateY(-40px)',
              transitionDelay: '200ms'
            }}
          >
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card de Información - Desliza desde la izquierda */}
          <Card 
            className="border-slate-200 transform transition-all duration-700 opacity-0 -translate-x-10"
            data-animate
            data-index="contact-info"
            style={{
              opacity: visibleItems.has('contact-info') ? 1 : 0,
              transform: visibleItems.has('contact-info') ? 'translateX(0)' : 'translateX(-40px)',
              transitionDelay: '300ms'
            }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-slate-900">
                <MessageCircle className="w-6 h-6" />
                Información de Contacto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href !== "#" ? (
                      <a href={item.href} className="text-slate-900 hover:text-slate-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-3">Sígueme en:</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-slate-600 ${link.color} transition-colors`}
                      title={link.label}
                    >
                      <link.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de Por qué trabajar conmigo - Desliza desde la derecha */}
          <Card 
            className="border-slate-200 bg-slate-50 transform transition-all duration-700 opacity-0 translate-x-10"
            data-animate
            data-index="why-work"
            style={{
              opacity: visibleItems.has('why-work') ? 1 : 0,
              transform: visibleItems.has('why-work') ? 'translateX(0)' : 'translateX(40px)',
              transitionDelay: '400ms'
            }}
          >
            <CardHeader>
              <CardTitle className="text-slate-900">¿Por qué trabajar conmigo?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Experiencia Real</h4>
                    <p className="text-sm text-slate-600">
                      15+ años en industria me permiten entender problemas reales
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Enfoque Práctico</h4>
                    <p className="text-sm text-slate-600">Soluciones web que realmente mejoran procesos y eficiencia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Compromiso</h4>
                    <p className="text-sm text-slate-600">
                      Dedicación total a cada proyecto hasta lograr los objetivos
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="mailto:leonelpiter@gmail.com"
                  className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-10 py-2 px-4 w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar Email
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sección final - Aparece desde abajo */}
        <div 
          className="mt-12 text-center bg-slate-50 rounded-lg p-8 transform transition-all duration-700 opacity-0 translate-y-10"
          data-animate
          data-index="final-section"
          style={{
            opacity: visibleItems.has('final-section') ? 1 : 0,
            transform: visibleItems.has('final-section') ? 'translateY(0)' : 'translateY(40px)',
            transitionDelay: '500ms'
          }}
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            ¿Tienes un problema que la tecnología puede resolver?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Mi experiencia en control de calidad y desarrollo web me permite identificar oportunidades de mejora y crear
            soluciones tecnológicas efectivas. Hablemos sobre tu proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:leonelpiter@gmail.com"
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 h-11 px-8"
            >
              Contactar por Email
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={openLinkedIn}
            >
              Conectar en LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}