import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Error404 from '../Pages/Error404.jsx'
import Login from '../Pages/Login.jsx'
import Dashboard from '../Pages/Dashboard.jsx'
import Todo from '../Pages/Todo.jsx'
import Youtube from '../Youtube/Youtube.jsx'
import { AuthConsumer } from '../../providers/AuthProvider.jsx'

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    }
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={
      props => authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />
    }
  />
)

const AppRoutes = () => (
  <AuthConsumer>
    {({state}) => (
      <Switch>
        <PublicRoute path='/' authed={state.authed} exact component={Login} />
        <PrivateRoute authed={state.authed} exact path='/dashboard' component={Dashboard} />
        <PrivateRoute authed={state.authed} exact path='/todo' component={Todo} />
        <PrivateRoute authed={state.authed} exact path='/youtube' component={Youtube} />
        <Route component={Error404} />
      </Switch>
    )}
  </AuthConsumer>
)

export default AppRoutes
