import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cover from './components/Cover';

import Offer from './components/Offer';
import ValueProporsition from './components/ValueProporsition';
import Projects from './components/Projects';

import Footer from './components/Footer';
import Section from './components/Section';

import offer from './data/offer.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />

        <Offer offers={offer} />
        <ValueProporsition />
        <Projects />

        <Footer />
      </div>
    );
  }
}

export default App;
