import React from 'react'
import TodoForm from '../TodoForm/TodoForm.jsx'
import TodoList from '../TodoList/TodoList.jsx'
import Header from '../Header/Header.jsx'

const Todo = () => (
  <div className='container l-container'>
    <Header />
    <TodoForm />
    <TodoList />
  </div>
)

export default Todo
