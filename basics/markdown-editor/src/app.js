'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from './components/markdown-editor'

import './css/style.css'

import('highlight.js').then(hljs => {
  marked.setOptions({
    highlight: (code) => {
      return hljs.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      isSaving: false
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.onClicked = () => {
      localStorage.setItem('md', this.state.value)
      this.setState({ isSaving: false })
    }

    this.handleRemove = () => {
      localStorage.removeItem('md');
    }
  }

  componentDidMount() {
    const value = localStorage.getItem('md')
    this.setState({
      value
    })
  }

  componentDidUpdate() {
    clearInterval(this.timer);
    this.timer = setTimeout(this.onClicked, 1000);
  }

  // caso o componente seja desmontado, limpamos o timer
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        handleRemove={this.handleRemove}
      />
    )
  }
}

export default App
