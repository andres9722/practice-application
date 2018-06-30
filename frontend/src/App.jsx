import React, { Component } from 'react'
import { TodoListProvider } from './providers/TodoListProvider.jsx'
import TodoForm from './components/TodoForm/TodoForm.jsx'
import TodoList from './components/TodoList/TodoList.jsx'
import './index.scss'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <TodoListProvider>
        <TodoForm />
        <TodoList />
      </TodoListProvider>
    )
  }
}
