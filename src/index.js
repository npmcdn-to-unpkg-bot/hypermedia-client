import React from 'react'
import { render } from 'react-dom'
import App from './app'
import { navigate } from './api'
import configuration from './configuration'
import reactSelectStyles from 'react-select/dist/default.css'
import overrides from './overrides.css'
import state from './state'

function init(element) {
  if (typeof element === 'string') {
    element = document.getElementById(element)
  }

  const style = document.createElement('style')
  style.id = 'ct-styles'
  document.head.appendChild(style)

  render(<App />, element)
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('[data-endpoint]')

  if (element) {
    Cignium.init(element)
    Cignium.navigate(element.dataset.endpoint)
  }
})

export default {
  configuration,
  init,
  navigate,
  state,
}
