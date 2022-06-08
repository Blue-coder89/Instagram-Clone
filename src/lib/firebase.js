import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import seed file
const config = {
  apiKey: "AIzaSyCrI-Mvm6gwBKY5fOQ2bxbz5735sL3c3L4",
  authDomain: "instagram-clone-be298.firebaseapp.com",
  projectId: "instagram-clone-be298",
  storageBucket: "instagram-clone-be298.appspot.com",
  messagingSenderId: "471912930358",
  appId: "1:471912930358:web:19be1260dc21898a2acc97",
  measurementId: "G-Q4ZCZEX10M",
};

const firebase = Firebase.initializeApp(config); // instance of firebase application
const { fieldValue } = Firebase.firestore; // fetching data from the database
// console.log(firebase);
// console.log(fieldValue);
// call the seed file here
export { firebase, fieldValue };
