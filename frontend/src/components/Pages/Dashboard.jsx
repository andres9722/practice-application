import React from 'react'
import { AuthConsumer } from '../../providers/AuthProvider.jsx'
import './Dashboard.scss'

const Dashboard = () => (
  <AuthConsumer>
    {({state}) => (
      <div className='dashboard'>
        <h1 className='dashboard__title'>Hello <span className='dashboard__name'>{state.username}</span></h1>
      </div>
    )}
  </AuthConsumer>
)

export default Dashboard
