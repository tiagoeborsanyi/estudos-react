import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';

import Toolbar from './components/navigation/toolbar/toolbar';
import Dash from './containers/dash/Dash';
import Descricao from './components/Descricao/Descricao';
import AddFestival from './components/addFestival/AddFestival';

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
      <div className="container">
        <Toolbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dash} />
            <Route path="/descricao/:id" component={Descricao} />
            <Route path="/add_festival" component={AddFestival} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
