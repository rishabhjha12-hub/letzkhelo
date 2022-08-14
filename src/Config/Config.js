import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBo2HNYjdqWcXD3w7t9Y76J0r04NNjP2i4",
  authDomain: "letzkhel.firebaseapp.com",
  projectId: "letzkhel",
  storageBucket: "letzkhel.appspot.com",
  messagingSenderId: "321804546499",
  appId: "1:321804546499:web:ba79181e3835bb48e94d76",
  measurementId: "G-64C3KJNW21"
}

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app);
export default app;
export {db}




