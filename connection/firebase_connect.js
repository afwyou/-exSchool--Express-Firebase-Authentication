var firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyC2fvAg6VP-TwXYg6rE-h4Bpk0CZ2MBBa0",
  authDomain: "expressfirebaseauthentication.firebaseapp.com",
  databaseURL: "https://expressfirebaseauthentication-default-rtdb.firebaseio.com",
  projectId: "expressfirebaseauthentication",
  storageBucket: "expressfirebaseauthentication.appspot.com",
  messagingSenderId: "500984696315",
  appId: "1:500984696315:web:928cc60eae2e28e09ccf5e",
  measurementId: "G-QYN8DP2VG1"
};

firebase.initializeApp(firebaseConfig)
module.exports = firebase