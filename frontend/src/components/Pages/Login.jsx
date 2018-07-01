import React from 'react'
import { AuthConsumer } from '../../providers/AuthProvider.jsx'
import './Login.scss'

const Login = () => (
  <AuthConsumer>
    {({googleSignIn}) => (
      <div className='login'>
        <div className='login__item'>
          <img src='/assets/astronomer.svg' alt='Logo' />
          <button className='login__button' onClick={() => googleSignIn()}>Login</button>
        </div>
      </div>
    )}
  </AuthConsumer>
)

export default Login
