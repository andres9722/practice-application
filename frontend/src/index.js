import React from 'react'
import { render } from 'react-dom'
import 'babel-polyfill'
import App from './App.jsx'
import './index.scss'

render(<App />, document.querySelector('#app'))
