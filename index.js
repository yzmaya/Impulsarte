

import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
  onGetTareas,
  getTasks,
  
} from "./firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");
const tasksContainerextra = document.getElementById("tasks-containerextra");
const tasksContainer2 = document.getElementById("tasks-container2");
const tasksContainer3 = document.getElementById("tasks-container3");
let editStatus = false;
let id = "";
var userID = localStorage.getItem("UserID");



window.addEventListener("DOMContentLoaded", async (e) => {
  // const querySnapshot = await getTasks();
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });


  
  onGetTareas((querySnapshot) => {
   // tasksContainer2.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();
     // console.log(doc.data());


      
   if(doc.id == userID){
     // console.log('a')
      document.getElementById('nombre').innerHTML = doc.data().nombre;
   
      
     }else{
      //console.log('b')

    
    }

    });

  

 
    
  });

  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `
      <div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.cantidad} ${task.title}</h3>
    <p>${task.description}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Eliminar
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Editar
      </button>
    </div>
  </div>`;
    });

  

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;
          taskForm["task-number"].value = task.cantidad;
          editStatus = true;
          id = doc.id;
          taskForm["btn-task-form"].innerText = "Actualizar";
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});





//agrega una tarea al repo

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];
  const cantidad = taskForm["task-number"];
  const uid = document.getElementById('nombre').innerHTML;
 
  try {
    if (!editStatus) {
      await saveTask(title.value, description.value, cantidad.value, uid);
    } else {
      await updateTask(id, {
        title: title.value,
        description: description.value,
        cantidad: cantidad.value,
        
      });

      editStatus = false;
      id = "";
      taskForm["btn-task-form"].innerText = "Save";
    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});
