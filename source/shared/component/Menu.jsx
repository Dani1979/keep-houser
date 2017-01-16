
import React from 'react';
import { Link } from 'react-router';

function Menu() {
  return (
    <nav role="navigation">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        Quienes Somos
      </Link>
      <Link to="/services">
        Servicios
      </Link>
      <Link to="/contact">
        Contactos
      </Link>
    </nav>
  )
}

export default Menu
