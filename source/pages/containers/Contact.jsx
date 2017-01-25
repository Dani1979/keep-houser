import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuBurger from '../../shared/component/MenuBurger.jsx'



class Contact extends Component {
    render(){
      return(
        <div id="outer-container">
          <MenuBurger id={"fallDown"} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
          <main id="page-wrap">
            <h1 id="title">Contacto</h1>
          </main>
        </div>
      );
    }
  }

export default Contact;
