import React, { Component } from 'react';
import './App.css';

// import Navigation from './components/Navigation';
import Cover from './components/Cover';

import Main from './components/Main';

import Footer from './components/Footer';

// import { injectGlobal } from 'styled-components';
// injectGlobal`
// body {
//   font-family: 'Indie Flower';
// }
// `;

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation /> */}

        <Cover />

        <Main />
        {/* <ValueProporsition />
        <Offer offers={offer} />
        <Projects /> */}

        <Footer />
      </div>
    );
  }
}

export default App;
