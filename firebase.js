
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
//import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  collectionGroup,
  query,
  where,
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
var destination = localStorage.getItem("destino");

console.log("users/"+userID)
console.log(destination+"que?")

//var holaperfil = "/users/"+userID+"negocio";


var pruebas = "/users/nOQszCqK8vUqRZ08RkheqwDibgy2/tareas"

//console.log(holaperfil)


var hola = "/users";
//console.log(holaperfil)



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
      //localStorage.clear();
      
    }else{
 
      
    }
  } else {
    // User is signed out
    // ...
    console.log("usuarno no logueado desde firebasejs");
  }
});


//esto va a funcionar para obtener todos los usuarios
//const querySnapshot = await getDocs(collection(db, "users"));
//querySnapshot.forEach((collection) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(collection.id, " => ", collection.data());
 //query(collectionGroup(db, "tareas"), where("uid", "==", collection.id)); 
 //console.log(query);

 //console.log(collection.data().count);


//});


      const holas = "/users/"+userID+"/"+destination;
console.log(holas)

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 * @param {string} cantidad the description of the Task
 * @param {string} uid the description of the Task
 */
//export const saveTask = (title, description) =>
  //addDoc(collection(db,  'users'), { title, description });
 
  export const saveTask = (title, description, cantidad, uid) =>
  addDoc(collection(db,  holas),  { title, description, cantidad, uid });

  export const onGetTasks = (callback) =>
  onSnapshot(collection(db, holas), callback); 



  export const onGetTasks21 = (callback) =>
  onSnapshot(collectionGroup(db, "tareas"), callback);

 // query(collectionGroup(db, "tareas"), where("uid", "==", collection.id)); 

  export const onGetTareas = (callback) =>
  onSnapshot(collection(db, "users"), callback); 

  export const onGetTareas2 = (callback) =>
  onSnapshot(collectionGroup(db, destination), callback); 

  

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, holas, id));

export const getTask = (id) => getDoc(doc(db, holas, id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, holas, id), newFields);

export const getTasks = () => getDocs(collection(db, userID));






