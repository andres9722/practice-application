import React from 'react'
import { TodoListConsumer } from '../../providers/TodoListProvider.jsx'

const TodoList = () => (
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

export default TodoList
