import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuBurger from '../../shared/component/MenuBurger.jsx'



class Services extends Component {
  render(){
    return(
      <div id="outer-container">
        <MenuBurger id={"fallDown"} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          <h1 id="title">Servicios</h1>
        </main>
      </div>
    );
  }
}


export default Services;
