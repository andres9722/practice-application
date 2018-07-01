import React, { createContext, Component } from 'react'
import { loadTasks, addTask, deleteTask, updateTask } from '../Request/Request'

const { Provider, Consumer } = createContext({
  todoList: []
})

export class TodoListProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todoList: []
    }

    this.handleOnAddTodo = this.handleOnAddTodo.bind(this)
    this.handleOnRemoveTodo = this.handleOnRemoveTodo.bind(this)
    this.handleOnUpdateTodo = this.handleOnUpdateTodo.bind(this)

    this.loadTasks()
  }

  loadTasks () {
    loadTasks().then(tasks => this.setState({todoList: tasks}))
  }

  handleOnAddTodo (e) {
    e.preventDefault()

    let text = e.target.text.value
    let isComplete = e.target.isComplete.checked

    let task = {
      text,
      isComplete
    }

    if (text) {
      addTask(task).then(task => console.log(task))
      this.loadTasks()
    }

    e.target.reset()
  }

  handleOnRemoveTodo (_id) {
    deleteTask(_id).then(task => console.log(task))
    this.loadTasks()
  }

  handleOnUpdateTodo (_id, e) {
    updateTask(_id, e.target.checked).then(task => console.log(task))
    this.loadTasks()
  }

  render () {
    return (
      <Provider value={{state: this.state,
        handleOnAddTodo: this.handleOnAddTodo,
        handleOnRemoveTodo: this.handleOnRemoveTodo,
        handleOnUpdateTodo: this.handleOnUpdateTodo }} >
        {this.props.children}
      </Provider>
    )
  }
}

export const TodoListConsumer = Consumer
