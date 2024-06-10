import React, { useState } from "react";
import "./Navbar.css"; // Añade estilos personalizados aquí si es necesario

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDownloadCV = () => {
    // Reemplaza 'ruta/cv.pdf' con la ruta real de tu archivo CV
    window.location.href = 'ruta/cv.pdf';
  };

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuOpen ? "show" : ""}>
        <li><a href="#inicio" onClick={(e) => smoothScroll(e, 'inicio')}>Inicio</a></li>
        <li><a href="#sobre-mi" onClick={(e) => smoothScroll(e, 'sobre-mi')}>Sobre Mí</a></li>
        <li><a href="#propuestas" onClick={(e) => smoothScroll(e, 'propuestas')}>Propuestas</a></li>
        <li><a href="#contacto" onClick={(e) => smoothScroll(e, 'contacto')}>Contacto</a></li>
        <li><a href="https://drive.google.com/file/d/1Ojxuz1r1lkL9TLoECfQYBJYv7Af_h3Jq/view?usp=sharing" onClick={handleDownloadCV}>Descargar CV</a></li>
      </ul>
    </nav>
  );
}

function smoothScroll(event, targetId) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
  });
}

export default Navbar;
