// Initialize Firebase
var config = {
    apiKey: "AIzaSyBaZkCdGVXm7Ar6zHCrKIkQfJh50F0oVvc",
    authDomain: "cag-zalem-32e6e.firebaseapp.com",
    databaseURL: "https://cag-zalem-32e6e.firebaseio.com",
    projectId: "cag-zalem-32e6e",
    storageBucket: "cag-zalem-32e6e.appspot.com",
    messagingSenderId: "829120399131"
};
firebase.initializeApp(config);
var firestore = firebase.firestore();