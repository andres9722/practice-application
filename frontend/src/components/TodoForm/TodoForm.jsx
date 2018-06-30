import React, { Fragment } from 'react'
import { TodoListConsumer } from '../../providers/TodoListProvider.jsx'
import './TodoForm.scss'

const TodoForm = () => (
  <TodoListConsumer>
    {({handleOnAddTodo}) => {
      return (
        <Fragment>
          <h2 className='title'>Add task</h2>
          <form onSubmit={e => handleOnAddTodo(e)} className='form' >
            <input className='form__checkbox' type='checkbox' name='isComplete' />
            <input className='form__input' type='text' placeholder='Text' name='text' />
            <input className='form__submit' type='submit' value='Submit' />
          </form>
        </Fragment>
      )
    }}
  </TodoListConsumer>
)

export default TodoForm
