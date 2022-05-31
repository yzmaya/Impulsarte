
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
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
console.log(userID)
console.log(username)
document.getElementById('nombre').innerHTML = username;


var nestor = "P2ry8hu4kafUbPb6UAnibTP89Ck2"
var judith = "WOcG0OA4MxQNjh2tNdX5s32tXfJ3"
var rodolfo = "DxotYIXpNlaYMpd1G2owqR76iy32"
var asesorventas = "ZCZa6bwW8uQNjkdLyNPBqpNjyp13"
var ivonnem = "CBNvrE3hCpNxquJSN4WOyDQj23D2"
var baruch = "uAG41FLLXJaw2iUnIRyoOUCc8WF3"
// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, userID), { title, description });

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, userID), callback);

export const onGetTasks2 = (callback) =>
  onSnapshot(collection(db, nestor), callback);

  export const onGetTasks3 = (callback) =>
  onSnapshot(collection(db, judith), callback);

  export const onGetTasks4 = (callback) =>
  onSnapshot(collection(db, rodolfo), callback);

  export const onGetTasks5 = (callback) =>
  onSnapshot(collection(db, asesorventas), callback);

  export const onGetTasks6 = (callback) =>
  onSnapshot(collection(db, ivonnem), callback);

  export const onGetTasks7 = (callback) =>
  onSnapshot(collection(db, baruch), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, userID, id));

export const getTask = (id) => getDoc(doc(db, userID, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, userID, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));
