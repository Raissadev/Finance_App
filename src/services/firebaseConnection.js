import firebase from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDLLv0DdNS8rp0oqwmhiYY3vPWUMk3u3Ik",
    authDomain: "finances-45313.firebaseapp.com",
    projectId: "finances-45313",
    storageBucket: "finances-45313.appspot.com",
    messagingSenderId: "577803900575",
    appId: "1:577803900575:web:4fcddd337cfa55c3c8b4aa"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;