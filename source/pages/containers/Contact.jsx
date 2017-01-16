import React, { Component } from 'react';
import { Link } from 'react-router';
import Menu from '../../shared/component/Menu.jsx'



class Contact extends Component {
  render(){
      return(
        <div>
          <h1>Contactos</h1>
          <Menu/>
        </div>
      );
    }
  }

export default Contact;
