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
        <li><a href="#inicio" onClick={(e) => {smoothScroll(e, 'inicio'); handleMenuItemClick();}}>Inicio</a></li>
        <li><a href="#sobre-mi" onClick={(e) => {smoothScroll(e, 'sobre-mi'); handleMenuItemClick();}}>Sobre Mí</a></li>
        <li><a href="#propuestas" onClick={(e) => {smoothScroll(e, 'propuestas'); handleMenuItemClick();}}>Propuestas</a></li>
        <li><a href="#contacto" onClick={(e) => {smoothScroll(e, 'contacto'); handleMenuItemClick();}}>Contacto</a></li>
        <li><a href="https://drive.google.com/file/d/1dI9HjcyKk9eYnEk994ogb4_CCLktQFBo/view" onClick={handleDownloadCV}>Descargar CV</a></li>
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
