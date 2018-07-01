import React from 'react'
import { Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider.jsx'

const Menu = () => (
  <AuthConsumer>
    {({googleSignOut, setStateLogout}) => (
      <nav>
        <ul>
          <li>
            <Link to='/todo'>Todolist</Link>
          </li>
          <li>
            <Link to='/youhub'>YouHub</Link>
          </li>
          <li>
            <Link to='/' onClick={() => {
              googleSignOut()
              setStateLogout()
            }}>Logout</Link>
          </li>
        </ul>
      </nav>
    )}
  </AuthConsumer>
)

export default Menu