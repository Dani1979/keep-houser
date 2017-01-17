import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuBurger from '../../shared/component/MenuBurger.jsx'


class About extends Component {
  render(){
    return(
      <div id = "outer-container">
        <MenuBurger pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }/>
        <div id = "page-wrap">
          <h1>Quienes Somos</h1>
        </div>

      </div>
    );
  }
}

export default About;
