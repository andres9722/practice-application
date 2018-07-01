import React, { createContext, Component } from 'react'
import { ref } from '../config/Config'
import firebase from 'firebase'

const { Provider, Consumer } = createContext({
  todoList: []
})

export class AuthProvider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      authed: false,
      loading: true
    }

    this.saveUser = this.saveUser.bind(this)
    this.setStateLogout = this.setStateLogout.bind(this)
    this.googleSignIn = this.googleSignIn.bind(this)
    this.googleSignOut = this.googleSignOut.bind(this)
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          loading: false
        })
      }
    })
  }

  componentWillUnmount () {
    this.removeListener()
  }

  saveUser (user) {
    ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    })
    .then(() => user)
  }

  setStateLogout () {
    this.setState({authed: false})
  }

  googleSignIn () {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithRedirect(provider)
      .then(result => this.saveUser(result.user))
      .catch(err => console.log(`Error: ${err.code}: ${err.message}`))
  }

  googleSignOut () {
    firebase.auth().signOut()
    .then(() => console.log(`Te has desconectado correctamente de Google`))
    .catch(() => console.log('Error al desconectarse de Google'))
  }

  render () {
    return (
      <Provider value={{state: this.state,
        googleSignIn: this.googleSignIn,
        googleSignOut: this.googleSignOut,
        setStateLogout: this.setStateLogout }} >
        {this.props.children}
      </Provider>
    )
  }
}

export const AuthConsumer = Consumer
