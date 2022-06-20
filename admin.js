

import {
 
    onGetTareas2,
    db,
   
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");

  const tasksContainer2 = document.getElementById("tasks-container2");
 
  let editStatus = false;
  let id = "";
   

   

  //panel 2
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
   
    onGetTareas2((querySnapshot) => {
      tasksContainer2.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
       // console.log(doc.id);


        
    //   if(doc.id == 'h7z5lXyQD3Mz9kkkHza0PyyMf502'){
      //  console.log('a')
     

       //}else{
        //console.log('b')

      
      //}
        tasksContainer2.innerHTML += `
        <div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.uid} ${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
  
    
  
   
      
    });



    

   



  });
  
  
  //panel 3
  
 