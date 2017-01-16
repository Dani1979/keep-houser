import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from '../../shared/component/Menu.jsx'


class About extends Component {
  render(){
    return(
      <div>
        <h1>Quienes somos</h1>
        <Menu/>
      </div>
    );
  }
}

export default About;
