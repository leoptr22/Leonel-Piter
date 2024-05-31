import React from "react";
import "./Navbar.css"; // Añade estilos personalizados aquí si es necesario

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#inicio" >Inicio</a></li>
        <li><a href="#sobre-mi">Sobre Mí</a></li>
        <li><a href="#propuestas">Propuestas</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
