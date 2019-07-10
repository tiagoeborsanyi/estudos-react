import React, { Component } from 'react';

import Button from './conponents/Button';
import './App.css';

class App extends Component {

  handle = () => {
    console.log('clicado.')
  }

  render() {
    return (
      <div className="App">
        <h2>Prop Types</h2>
        <Button handleClick={this.handle}>
          Click-me
        </Button>
      </div>
    );
  }

}

export default App;
