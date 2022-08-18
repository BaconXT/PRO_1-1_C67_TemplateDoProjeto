import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB8M1IICjbXjDTrPCO7snka8gMdRBhyw28",
  authDomain: "equipedevotacao.firebaseapp.com",
  projectId: "equipedevotacao",
  storageBucket: "equipedevotacao.appspot.com",
  messagingSenderId: "277407288562",
  appId: "1:277407288562:web:84f204f578b66059e6546b"
};

};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
