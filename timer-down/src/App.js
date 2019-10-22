import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/navigation/toolbar/toolbar';
import Timer from './components/timer/Timer';
import Card from './components/card/Card';

class App extends Component {
  state = {
    value: ''
  }

  handleDate = (e) => {
    e.preventDefault();
    const dateMls = new Date(e.target.value).getTime()
    console.log(new Date(dateMls).toString())
    console.log(Date.now()  )
    this.setState({value: dateMls})
  }

  renderer = ({ days, hours, minutes, seconds}) => {
    return <span>Dias: {days} Horas: {hours} minutos: {minutes} segundos: {seconds}</span>
  }

  render () {
    return (
      <div>
        <Toolbar />
        <div className="App">
          <Timer 
            handleDateClick={this.handleDate}
            valueDate={this.state.value}
            rendererDisplay={this.renderer} />
          <br /><br /><br />
          <Card />
        </div>
      </div>
    )
  }
}

export default App;
