import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

let RadiumLink = Radium(Link);

function MenuBurger(){
    return (
        <Menu id={"fallDown"} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} radiumConfig={{ userAgent: 'all' }} >
          <h2><span>KeepHouser</span></h2>
          <RadiumLink className = "rLink" to="/"><i className="fa fa-fw fa-database" /><span>Home</span></RadiumLink>
          <RadiumLink className = "rLink" to="/about"><i className="fa fa-fw fa-database" /><span>Quienes Somos</span></RadiumLink>
          <RadiumLink className = "rLink" to="/services"><i className="fa fa-fw fa-database" /><span>Servicios</span></RadiumLink>
          <RadiumLink className = "rLink" to="/contact"><i className="fa fa-fw fa-database" /><span>Contacto</span></RadiumLink>
        </Menu>
    )
}





export default MenuBurger
