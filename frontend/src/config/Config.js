import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDDRe2ISZzz-16rr_1x2f66-io8HiM36ls',
  authDomain: 'todolist-ced19.firebaseapp.com',
  databaseURL: 'https://todolist-ced19.firebaseio.com',
  projectId: 'todolist-ced19',
  storageBucket: 'todolist-ced19.appspot.com',
  messagingSenderId: '1013942951561'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
