import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBSn9RpK-5dxAF1WcimXcndBHHYw2ztPco",
	authDomain: "linkedin-clone-931f8.firebaseapp.com",
	projectId: "linkedin-clone-931f8",
	storageBucket: "linkedin-clone-931f8.appspot.com",
	messagingSenderId: "192967271189",
	appId: "1:192967271189:web:bc63e382fae8a9edf3ff1c",
	measurementId: "G-MP2D5CPEJ8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
