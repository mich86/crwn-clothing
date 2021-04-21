import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBRnqeI1ydhmVAn0gcUZ0EEe1ZqTc85kW0",
  authDomain: "crwn-db-17a88.firebaseapp.com",
  projectId: "crwn-db-17a88",
  storageBucket: "crwn-db-17a88.appspot.com",
  messagingSenderId: "872798155193",
  appId: "1:872798155193:web:21db124eb2b55bfb8e8668"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  //const userRef = firestore.doc('users/bcjbthvbtdvbtdb'); DUMMY DATA TESTING
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //console.log(snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;