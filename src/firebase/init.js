import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyB6rAdhxjPW-kyO2dmVDRxsURWknZfV2kA",
    authDomain: "realtime-chat-47de4.firebaseapp.com",
    databaseURL: "https://realtime-chat-47de4.firebaseio.com",
    projectId: "realtime-chat-47de4",
    storageBucket: "realtime-chat-47de4.appspot.com",
    messagingSenderId: "356075309726"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()