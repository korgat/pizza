import firebase from "firebase/app"
import "firebase/firestore"


var firebaseConfig = {
	apiKey: "AIzaSyDdVYQ2yOPe4ZyHkaF-gsJDZ5fNMBYJmVI",
	authDomain: "pizzarestorant-4f82c.firebaseapp.com",
	projectId: "pizzarestorant-4f82c",
	storageBucket: "pizzarestorant-4f82c.appspot.com",
	messagingSenderId: "5088639739",
	appId: "1:5088639739:web:0f6516b381906a23580e5e",
	measurementId: "G-1Y0GQY21DC"
};

firebase.initializeApp(firebaseConfig);

export default firebase