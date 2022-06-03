
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  // Put you credentials here
  apiKey: "AIzaSyDpWbhtjciyB8PYvJ0PH1SbheH6TPgfs78",
  authDomain: "impulsarte-34d02.firebaseapp.com",
  projectId: "impulsarte-34d02",
  storageBucket: "impulsarte-34d02.appspot.com",
  messagingSenderId: "610928781305",
  appId: "1:610928781305:web:98ac597a62d2d1f428bf28"
};
var userID = localStorage.getItem("UserID");
var username = localStorage.getItem("UserName");
var mail = localStorage.getItem("UserMail");
console.log("users/"+userID)
var holas = "/users/"+userID+"/tareas";
var hola = "/users";
console.log(username)
document.getElementById('nombre').innerHTML = mail;



// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore();





/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
//export const saveTask = (title, description) =>
  //addDoc(collection(db,  'users'), { title, description });

  export const saveTask = (title, description) =>
  addDoc(collection(db,  holas),  { title, description });

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, holas), callback); 

export const onGetTasks2 = (callback) =>
  onSnapshot(collection(db, holas), callback);


  export const onGetTasks3 = (id) =>
  getDoc(doc(db, "users", id));

  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, holas, id));

export const getTask = (id) => getDoc(doc(db, holas, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, holas, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));
