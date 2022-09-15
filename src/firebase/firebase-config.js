import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

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
const app = initializeApp(firebaseConfig)
// Variable to reference the database
export const db = getFirestore(app)