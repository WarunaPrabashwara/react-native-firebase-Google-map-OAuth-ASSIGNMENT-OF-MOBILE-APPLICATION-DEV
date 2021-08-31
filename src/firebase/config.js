import  firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEJiw-spnQeWjx3dMlVB-vFYwJ5J_JlUE",
    authDomain: "assignment-bf516.firebaseapp.com",
    projectId: "assignment-bf516",
    storageBucket: "assignment-bf516.appspot.com",
    messagingSenderId: "232370724870",
    appId: "1:232370724870:web:9756132c0a032bce0be387"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };