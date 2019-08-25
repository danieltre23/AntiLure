import firebase from 'firebase'

const Config = {
    apiKey: "AIzaSyCTrFl4_gH1NJdvcbeBffrUuIQSVs-v634",
    authDomain: "hack2019-250821.firebaseapp.com",
    databaseURL: "https://hack2019-250821.firebaseio.com",
    projectId: "hack2019-250821",
    storageBucket: "hack2019-250821.appspot.com",
    messagingSenderId: "610975458473",
    appId: "1:610975458473:web:fd4d90083edec16f"
  };
  
  
  const fire =firebase.initializeApp(Config);
  export default fire;