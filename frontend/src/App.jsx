import React, { Component } from 'react'
import loadTasks from './components/Request/Request'
import './index.scss'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
    loadTasks().then(tasks => console.log(tasks))
  }

  render () {
    return <div>Hello moto</div>
  }
}
