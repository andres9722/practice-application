import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './components/Utils/Routes.jsx'
import { TodoListProvider } from './providers/TodoListProvider.jsx'
import { AuthProvider, AuthConsumer } from './providers/AuthProvider.jsx'
import Menu from './components/Menu/Menu.jsx'

import './index.scss'

const App = () => (
  <Router>
    <AuthProvider>
      <TodoListProvider>
        <AuthConsumer>
          {({state}) => (
            state.loading === true
            ? <div>Cargando...</div>
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
      </TodoListProvider>
    </AuthProvider>
  </Router>
)

export default App
