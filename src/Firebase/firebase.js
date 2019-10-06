import firebase from 'firebase';

// // These imports load individual services into the firebase namespace.
// import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBSXVw1k-ntJrIJ00EJ0rBUDWP5wtw94pA",
    authDomain: "reactchatroom101.firebaseapp.com",
    databaseURL: "https://reactchatroom101.firebaseio.com",
    projectId: "reactchatroom101",
    storageBucket: "reactchatroom101.appspot.com",
    messagingSenderId: "161765093800",
    appId: "1:161765093800:web:68ace889f02eb91854ed9d",
    measurementId: "G-CQDK3GLGWS"
};
firebase.initializeApp(firebaseConfig);


export default firebase;



//firebase.database().ref("").push({})=> creates automatic defined keys
//firebase.database().ref("").child('key name').set({}) => manual defined key here key name
// firebase.database().ref("").orderByChild('').equalTo().once((snap)=>{snap}) =>query 

