
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
var nyzmaya = "/users/P2ry8hu4kafUbPb6UAnibTP89Ck2/tareas";
var sgarcia = "/users/iAZytm5WjMVZgS3z2mZqMBLyw4R2/tareas";
var gbringas = "/users/AWm8lSNtUpTTzjd0MeXc4i6hbt63/tareas";
var jurbano = "/users/WOcG0OA4MxQNjh2tNdX5s32tXfJ3/tareas";
var axellopez = "/users/kj3FwMnhzgbnoj78S3I7Q1VRc8G3/tareas";
var gloriamaria = "/users/VirBuqJMehRUBV0TqtYtP9TLmcE3/tareas";
var mgonzalez = "/users/GoPRch4FoCQmwaAlnjqFZlLydu02/tareas";
var rmucino = "/users/I4wCk05gcQRqee0qdaaoNT8Uk782/tareas";
var arivera = "/users/MltrRLy9O0aPjD5afa49AteJ6fl1/tareas";


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
  onSnapshot(collection(db, nyzmaya), callback);

  export const onGetTasks3 = (callback) =>
  onSnapshot(collection(db, sgarcia), callback);

  export const onGetTasks4 = (callback) =>
  onSnapshot(collection(db, gbringas), callback);

  export const onGetTasks5 = (callback) =>
  onSnapshot(collection(db, jurbano), callback);

  export const onGetTasks6 = (callback) =>
  onSnapshot(collection(db, axellopez), callback);

  export const onGetTasks7 = (callback) =>
  onSnapshot(collection(db, gloriamaria), callback);

  export const onGetTasks8 = (callback) =>
  onSnapshot(collection(db, mgonzalez), callback);

  export const onGetTasks9 = (callback) =>
  onSnapshot(collection(db, rmucino), callback);

  export const onGetTasks10 = (callback) =>
  onSnapshot(collection(db, arivera), callback);
 

  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, holas, id));

export const getTask = (id) => getDoc(doc(db, holas, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, holas, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));
