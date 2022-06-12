import {firebase} from '../lib/firebase'

export async function doesUsernameexists(username) {
    const result = await firebase.firestore().collection('users').where('username', '==', username).get();// it gets the data of all the users from the firestore
    return result.docs.map((user) => user.data.length > 0); // result.docs is the array containing user information
}