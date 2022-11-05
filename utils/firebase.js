const firebase = require("firebase");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtDdYDmPCIL71n77x-L0HvM3RbilIAMhA",
  authDomain: "play-pal-a1403.firebaseapp.com",
  projectId: "play-pal-a1403",
  storageBucket: "play-pal-a1403.appspot.com",
  messagingSenderId: "752586541921",
  appId: "1:752586541921:web:50d36804b26ad08ed09320",
  measurementId: "G-F3XBGRBZWB",
};

firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = { firebase }; //export the app
