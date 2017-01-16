import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from '../../shared/component/Menu.jsx'


class Home extends Component {
  render(){
    return(
      <div>
        <h1>Home</h1>
        <Menu/>
      </div>
    );
  }
}

export default Home;
