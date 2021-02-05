import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCGd9mkGcE7yksWzZRarRrw4FVUf4p7peI",
  authDomain: "mealplan-4565a.firebaseapp.com",
  projectId: "mealplan-4565a",
  storageBucket: "mealplan-4565a.appspot.com",
  messagingSenderId: "36073100850",
  appId: "1:36073100850:web:015789b819e02445b18e2b",
  measurementId: "G-JHD21MZY1E"
};
// Initialize Firebase

export const fireApp = firebase.initializeApp(firebaseConfig);

export const firebaseDb = fireApp.database();