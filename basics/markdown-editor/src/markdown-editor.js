'use strict'

import React, { PropTypes} from 'react'

import './css/style.css'

const MarkdownEditor = ({ value, handleChange, getMarkup, clicked }) => (
  <section className='editor'>
    <header>
      <button onClick={clicked}>Salvar</button>
    </header>
    <textarea value={value} onChange={handleChange} autoFocus />
    <article className='view' dangerouslySetInnerHTML={getMarkup()} />
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  clicked: PropTypes.func.isRequired
}

export default MarkdownEditor
