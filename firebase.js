
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


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

var nombre = localStorage.getItem('nombre');


var userID = localStorage.getItem("UserID");


console.log("users/"+userID)
var holas = "/users/"+userID+"/tareas";
var holaperfil = "/users/"+userID+"negocio";
var nyzmaya = "/users/P2ry8hu4kafUbPb6UAnibTP89Ck2/tareas";
var sgarcia = "/users/iAZytm5WjMVZgS3z2mZqMBLyw4R2/tareas";
var gbringas = "/users/AWm8lSNtUpTTzjd0MeXc4i6hbt63/tareas";
var jurbano = "/users/WOcG0OA4MxQNjh2tNdX5s32tXfJ3/tareas";
var axellopez = "/users/kj3FwMnhzgbnoj78S3I7Q1VRc8G3/tareas";
var gloriamaria = "/users/VirBuqJMehRUBV0TqtYtP9TLmcE3/tareas";
var mgonzalez = "/users/GoPRch4FoCQmwaAlnjqFZlLydu02/tareas";
var rmucino = "/users/I4wCk05gcQRqee0qdaaoNT8Uk782/tareas";
var arivera = "/users/MltrRLy9O0aPjD5afa49AteJ6fl1/tareas";
var janzures = "/users/7mAqFc0ZFAbUNnxU0iGNtOGs7oI3/tareas"
var npererira = "/users/mFSXtWpWTYa4UqGYqp7yS0JqAcq2/tareas"
var hvivanco = "/users/GYNUsSsb46hOcKxmK1NmE4hZ6P92/tareas"
var lgranados = "/users/kv5SFy1FdNgXUpLJPZ1RzRg5jti2/tareas"
var isaldivar = "/users/04yKHiZQtBTSwFegMOxT0JHmTFf1/tareas"
var irenec = "/users/88rjImpjllhwqu11fWgInxPWlZ72/tareas"
var mmorales = "/users/jtW8sCGnK0g9ilH6JUoTGi8iFar1/tareas"
var griselda = "/users/lzOdOsU6z0ZmFralJDVt6oaoAXC3/tareas"
var imegon = "/users/jPNLmlXkGmezj93DYKI3NMlcMzD2/tareas"
var amondragon = "/users/FD0sCs80yqgR8vpQeMw5g5EdI3x2/tareas"
var pruebas = "/users/nOQszCqK8vUqRZ08RkheqwDibgy2/tareas"

//console.log(holaperfil)


var hola = "/users";
console.log(holaperfil)






// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore();


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.email;
  
    // ...

    if(nombre == null){
      document.getElementById('nombre').innerHTML = uid;
    }else{
      document.getElementById('nombre').innerHTML = nombre;
    }
  } else {
    // User is signed out
    // ...
    console.log("usuarno no logueado desde firebasejs");
  }
});


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

  export const onGetPerfil = (callback) =>
  onSnapshot(collection(db, holaperfil), callback); 

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

  export const onGetTasks11 = (callback) =>
  onSnapshot(collection(db, janzures), callback);

  export const onGetTasks12 = (callback) =>
  onSnapshot(collection(db, npererira), callback);

  export const onGetTasks13 = (callback) =>
  onSnapshot(collection(db, hvivanco), callback);

  export const onGetTasks14 = (callback) =>
  onSnapshot(collection(db, lgranados), callback);

  export const onGetTasks15 = (callback) =>
  onSnapshot(collection(db, isaldivar), callback);

  export const onGetTasks16 = (callback) =>
  onSnapshot(collection(db, irenec), callback);

  export const onGetTasks17 = (callback) =>
  onSnapshot(collection(db, mmorales), callback);

  export const onGetTasks18 = (callback) =>
  onSnapshot(collection(db, griselda), callback);
 

  export const onGetTasks19 = (callback) =>
  onSnapshot(collection(db, imegon), callback);
 


  export const onGetTasks20 = (callback) =>
  onSnapshot(collection(db, amondragon), callback);


 

  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, holas, id));

export const getTask = (id) => getDoc(doc(db, holas, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, holas, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));






