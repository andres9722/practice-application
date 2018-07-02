import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './components/Utils/Routes.jsx'
import { TodoListProvider } from './providers/TodoListProvider.jsx'
import { AuthProvider, AuthConsumer } from './providers/AuthProvider.jsx'
import { YoutubeProvider } from './providers/YoutubeProvider.jsx'
import Menu from './components/Menu/Menu.jsx'

import './index.scss'

const App = () => (
  <Router>
    <AuthProvider>
      <TodoListProvider>
        <YoutubeProvider>
          <AuthConsumer>
            {({state}) => (
              state.loading === true
              ? (
                <div className='loading'>
                  <h1>Loading...</h1>
                  <div className='spinner'>
                    <div className='double-bounce1' />
                    <div className='double-bounce2' />
                  </div>
                </div>
              )
              : (<main>
                {
                  state.authed === true
                  ? <Menu />
                  : null
                }
                <AppRoutes />
              </main>)
            )}
          </AuthConsumer>
        </YoutubeProvider>
      </TodoListProvider>
    </AuthProvider>
  </Router>
)

export default App
