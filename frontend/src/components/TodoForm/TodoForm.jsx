import React, { Component } from 'react'
import { TodoListConsumer } from '../../providers/TodoListProvider.jsx'

export default class TodoForm extends Component {
  render () {
    return (
      <TodoListConsumer>
        {({handleOnAddTodo}) => {
          return (
            <form onSubmit={e => handleOnAddTodo(e)} >
              <h2>Add task</h2>
              <input type='checkbox' name='isComplete' defaultChecked />
              <input type='text' name='text' />
              <input type='submit' value='Submit' />
            </form>
          )
        }}
      </TodoListConsumer>
    )
  }
}
