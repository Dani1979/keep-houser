import React from 'react';
import {
  Match,
  Miss,
  Link,
} from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Error404 from './Error404.jsx';

// import Header from '../../shared/components/Header.jsx';


function Pages() {
  return (
    <main role="application">
      {/* <Header /> */}

      {/* Home */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* quienes somos */}
      <Match
        pattern="/about"
        exactly
        component={About}
      />
      {/* servicios */}
      <Match
        pattern="/services"
        exactly
        component={Services}
      />
      {/* Contacto */}
      <Match
        pattern="/contact"
        exactly
        component={Contact}
      />
      {/* Error 404 */}
      <Miss component={Error404}
      />
    </main>
  )
}

export default Pages;
