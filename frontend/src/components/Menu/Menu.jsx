import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider.jsx'
import './Menu.scss'

const Menu = () => (
  <AuthConsumer>
    {({googleSignOut, setStateLogout}) => (
      <nav className='nav'>
        <ul className='menu l-container'>
          <li className='menu__item'> <NavLink className='menu__link' activeClassName='menu__link--active' to='/dashboard'>Dashboard</NavLink> </li>
          <li className='menu__item'> <NavLink className='menu__link' activeClassName='menu__link--active' to='/todo'>Todolist</NavLink> </li>
          <li className='menu__item'> <NavLink className='menu__link' activeClassName='menu__link--active' to='/youhub'>YouHub</NavLink> </li>
          <li className='menu__item'> <Link className='menu__link' to='/' onClick={() => {
            googleSignOut()
            setStateLogout()
          }}>Logout</Link> </li>
        </ul>
      </nav>
    )}
  </AuthConsumer>
)

export default Menu
