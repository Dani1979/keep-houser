import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

function MenuBurger(){
    return (
      <Menu right width={ 280 } radiumConfig={{ userAgent: 'all' }}  >
        <RadiumLink className="menu-item" to="/">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/about">Quienes Somos</RadiumLink>
        <RadiumLink className="menu-item" to="/services">Servicios</RadiumLink>
        <RadiumLink className="menu-item" to="/contact">Contactos</RadiumLink>
      </Menu>
    )
}





export default MenuBurger
