import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DB_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
