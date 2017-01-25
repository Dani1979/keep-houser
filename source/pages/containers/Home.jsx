import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuBurger from '../../shared/component/MenuBurger.jsx'


class Home extends Component {
  render(){
    return(
      <div id="outer-container">
        <MenuBurger/>
        <main id="page-wrap">
          <h1 id="title">Home</h1>
        </main>
      </div>
    );
  }
}

export default Home;
