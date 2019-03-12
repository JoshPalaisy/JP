import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB4nEGymPqdqujDN1AmqkBcbIp0s2frmgM",
    authDomain: "joshpalaisy-portfolio.firebaseapp.com",
    databaseURL: "https://joshpalaisy-portfolio.firebaseio.com",
    projectId: "joshpalaisy-portfolio",
    storageBucket: "joshpalaisy-portfolio.appspot.com",
    messagingSenderId: "663492217904"
}

firebase.initializeApp(config)
firebase.firestore().settings({})

export default firebase