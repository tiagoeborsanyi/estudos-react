import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import './App.css';

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
      <div className="App">
        <h1>Timer</h1>
        <input type="date" onChange={this.handleDate} />
        <br /><br /><br />
        <Countdown date={this.state.value} renderer={this.renderer} />
        <br /><br /><br />

        <article className="content">
          <div className="item_grid">
            <figure className="image">
              <img src={require("./escalada.png")} />
            </figure>
            <div className="wrapper">
              <header className="entry-content">
                <a href="#">
                  <time className="data">
                    <span className="year">2019</span>
                    <span className="day">30</span>
                    <span className="month">Out</span>
                  </time>
                  <div className="titulo_evento">
                    <h2 className="entry_title">Festival de montanha</h2>
                  </div>
                  <div className="clearfix">
                  </div>
                  <div className="row_info">
                    <div className="citie">
                      <span>São Paulo</span>
                    </div>
                  </div>
                </a>
              </header>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default App;
