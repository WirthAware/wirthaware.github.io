import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cover from './components/Cover';
import Main from './components/Main';
import Footer from './components/Footer';
import Section from './components/Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />
        <Main />
        <Section primary>
          <h1>Latest side projects ...</h1>
        </Section>
        <Footer />
      </div>
    );
  }
}

export default App;
