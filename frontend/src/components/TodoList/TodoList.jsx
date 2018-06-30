import React, { Component } from 'react'
import { TodoListConsumer } from '../../providers/TodoListProvider.jsx'

export default class TodoList extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <TodoListConsumer>
        {({state, handleOnRemoveTodo}) => {
          return (
            <div>
              <h1>Todo List</h1>
              <ul>
                {
                  state.todoList.map(todo => (
                    <li key={todo._id}>
                      <input type='checkbox' defaultChecked={todo.isComplete} /> <span>{todo.text}</span>
                      <div>
                        <button onClick={() => handleOnRemoveTodo(todo._id)} >X</button>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }}
      </TodoListConsumer>
    )
  }
}
