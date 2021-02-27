// authenticate users
import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

// add firebase config 
const config = {
    apiKey: "AIzaSyAC9C9Vg-eSflSwhtvN0hC2-Tv-vNpszH8",
    authDomain: "pomo-150fc.firebaseapp.com",
    projectId: "pomo-150fc",
    storageBucket: "pomo-150fc.appspot.com",
    messagingSenderId: "1066741338699",
    appId: "1:1066741338699:web:e129fafedc4691ebf733ce",
    measurementId: "G-V61KZ94D0E"
}

export const createUserProfileDocument = async(username, password,additionalData) => {
    // "current place" but no actual data 
    const userRef = firestore.doc(`users/$1234`);
    // get the collection reference 
    const collectionRef = firestore.collection('users'); 
    // use CRUD methods on a doc ref to get a snapshot 
    const snapShot = await userRef.get(); 

    const collectionSnapshot = await collectionRef.get(); 
    console.log({collection: collectionSnapshot.docs.map(doc => doc.data())}); 

    // if snapshot does not exiist create an object reference
    if(!snapShot.exists) { 
        const createdAt = new Date(); 

        try {
            await userRef.set({
                usename: username, 
                password: password, 
                createdAt, 
                ...additionalData
            }); 
        } catch(error) {
            console.log('error creating user', error.message); 
        }
    }

    return userRef; 
}

// Initialize Firebase
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase; 


