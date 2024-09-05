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
    // Cierra el menú después de hacer clic en un ítem
    setMenuOpen(false);
  };

  // Función para manejar el clic en un ítem del menú y cerrar el menú
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuOpen ? "show" : ""}>
        <button id="btn"><span href="#inicio" onClick={(e) => {smoothScroll(e, 'inicio'); handleMenuItemClick();}}>Inicio</span></button>
        <button id="btn"><span href="#sobre-mi" onClick={(e) => {smoothScroll(e, 'sobre-mi'); handleMenuItemClick();}}>Sobre Mí</span></button>
        <button id="btn"><span href="#propuestas" onClick={(e) => {smoothScroll(e, 'propuestas'); handleMenuItemClick();}}>Propuestas</span></button>
        <button id="btn"><span href="#contacto" onClick={(e) => {smoothScroll(e, 'contacto'); handleMenuItemClick();}}>Contacto</span></button>
        <button id="btn"><span href="https://drive.google.com/file/d/1Ojxuz1r1lkL9TLoECfQYBJYv7Af_h3Jq/view?usp=sharing" onClick={handleDownloadCV}>Descargar CV</span></button>
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
