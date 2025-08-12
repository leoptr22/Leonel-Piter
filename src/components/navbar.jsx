import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import VisitCounter from './counterVisit';



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta el scroll y cambia el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              <p
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: '300',
                  fontSize: '24px',
                  color: isScrolled ? '#1e293b' : '#ffffff',
                  margin: 0,
                }}
              >
                &lt; LEONEL PITER /&gt;
              </p>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-gray-300'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </button>
            ))}
            {/* Contador integrado */}
            <VisitCounter />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-gray-300'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* ojo aca: Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-1 pt-1 pb-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
              {navItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-900 hover:text-slate-700 hover:bg-gray-100 block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-colors"
                  >
                    {item.name}
                  </button>
                  {index < navItems.length - 1 && <hr className="border-gray-200 mx-2" />}
                </React.Fragment>
              ))}
              {/* aca agrego el contador en mobile */}
              { <div className="mt-4 px-3 py-2 border-t border-gray-300">
                <VisitCounter />
              </div> }
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
