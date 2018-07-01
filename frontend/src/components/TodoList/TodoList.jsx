import React from 'react'
import { TodoListConsumer } from '../../providers/TodoListProvider.jsx'
import './TodoList.scss'

const TodoList = () => (
  <TodoListConsumer>
    {({state, handleOnRemoveTodo, handleOnUpdateTodo}) => {
      return (
        <div className='todo'>
          <h1 className='todo__title'>Todo List</h1>
          <ul className='todo__list'>
            {
              state.todoList.map(todo => (
                <li key={todo._id} className='todo__item'>
                  <input className='todo__input' type='checkbox' defaultChecked={todo.isComplete} onChange={e => handleOnUpdateTodo(todo._id, e)} />
                  <span className='todo__text'>{todo.text}</span>
                  <button className='todo__remove' onClick={() => handleOnRemoveTodo(todo._id)} >Borrar</button>
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
