import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

function MenuBurger(){
    return (
      <Menu right width={ 280 } radiumConfig={{ userAgent: 'all' }}  >
        <RadiumLink className="fa fa-fw fa-database" aria-hidden="true" to="/">Home</RadiumLink>
        <RadiumLink className="fa fa-fw fa-database" aria-hidden="true" to="/about">Quienes Somos</RadiumLink>
        <RadiumLink className="fa fa-fw fa-database" aria-hidden="true" to="/services">Servicios</RadiumLink>
        <RadiumLink className="fa fa-fw fa-database" aria-hidden="true" to="/contact">Contactos</RadiumLink>
      </Menu>
    )
}





export default MenuBurger
