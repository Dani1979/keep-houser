import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuBurger from '../../shared/component/MenuBurger.jsx'


class About extends Component {
  render(){
    return(
      <div id="outer-container">
        <MenuBurger id={"fallDown"} pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          <h1 id="title">Quienes Somos</h1>
        </main>
      </div>
    );
  }
}


export default About;
