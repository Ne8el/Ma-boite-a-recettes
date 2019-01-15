import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDQ7SBlPaH4aXT4pow5A4VXy4F0LPnGD4Y",
  authDomain: "recettes-app-a3e73.firebaseapp.com",
  databaseURL: "https://recettes-app-a3e73.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
