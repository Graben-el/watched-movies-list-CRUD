import { initializeFirebase } from 'firebase/app'
import { getFirestore } from '@firebase/firebase'
import { getAnalytics } from 'firebase/analytics'

// Add variable with the database configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYcqkMnaLlHHuLi5wXXw8NkUAjNlp0mw4",
    authDomain: "first-crud-f6aba.firebaseapp.com",
    projectId: "first-crud-f6aba",
    storageBucket: "first-crud-f6aba.appspot.com",
    messagingSenderId: "309844328723",
    appId: "1:309844328723:web:ff1d049679e9d376449ae6",
    measurementId: "G-JKJRJNBN7J"
  };

// Initialize firebase
const app = initializeFirebase(firebaseConfig)
const analytics = getAnalytics(app)
// Variable to reference the database
export const db = getFirestore(app)