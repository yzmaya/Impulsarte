

import {
    onGetTasks,
    onGetTasks2,
    onGetTasks3,
    onGetTasks4,
    onGetTasks5,
    onGetTasks6,
    onGetTasks7,
    onGetTasks8,
    onGetTasks9,
    onGetTasks10,
    onGetTasks11,
    onGetTasks12,
    onGetTasks13,
    onGetTasks14,
    onGetTasks15,
    onGetTasks16,
    onGetTasks17,
    onGetTasks18,
    onGetTasks19,
    onGetTasks20,
    onGetTasks21,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebase.js";
  
  const taskForm = document.getElementById("task-form");

  const tasksContainer2 = document.getElementById("tasks-container2");
  const tasksContainer3 = document.getElementById("tasks-container3");
  const tasksContainer4 = document.getElementById("tasks-container4");
  const tasksContainer5 = document.getElementById("tasks-container5");
  const tasksContainer6 = document.getElementById("tasks-container6");
  const tasksContainer7 = document.getElementById("tasks-container7");
  const tasksContainer8 = document.getElementById("tasks-container8");
  const tasksContainer9 = document.getElementById("tasks-container9");
  const tasksContainer10 = document.getElementById("tasks-container10");
  const tasksContainer11 = document.getElementById("tasks-container11");
  const tasksContainer12 = document.getElementById("tasks-container12");
  const tasksContainer13 = document.getElementById("tasks-container13");
  const tasksContainer14 = document.getElementById("tasks-container14");
  const tasksContainer15 = document.getElementById("tasks-container15");
  const tasksContainer16 = document.getElementById("tasks-container16");
  const tasksContainer17 = document.getElementById("tasks-container17");
  const tasksContainer18 = document.getElementById("tasks-container18");
  const tasksContainer19 = document.getElementById("tasks-container19");
  const tasksContainer20 = document.getElementById("tasks-container20");
  const tasksContainer21 = document.getElementById("tasks-container21");
  let editStatus = false;
  let id = "";
   

   

  //panel 2
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks2((querySnapshot) => {
      tasksContainer2.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer2.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
  
    
  
   
      
    });



    onGetTasks3((querySnapshot) => {
      tasksContainer3.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer3.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks4((querySnapshot) => {
      tasksContainer4.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer4.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });




    onGetTasks5((querySnapshot) => {
      tasksContainer5.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer5.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });

    onGetTasks6((querySnapshot) => {
      tasksContainer6.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer6.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });

    onGetTasks7((querySnapshot) => {
      tasksContainer7.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer7.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks8((querySnapshot) => {
      tasksContainer8.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer8.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });



    onGetTasks9((querySnapshot) => {
      tasksContainer9.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer9.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks10((querySnapshot) => {
      tasksContainer10.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer10.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });



    onGetTasks11((querySnapshot) => {
      tasksContainer11.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer11.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });



    onGetTasks12((querySnapshot) => {
      tasksContainer12.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer12.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });



    onGetTasks13((querySnapshot) => {
      tasksContainer13.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer13.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });

    onGetTasks14((querySnapshot) => {
      tasksContainer14.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer14.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks15((querySnapshot) => {
      tasksContainer15.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer15.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });

    onGetTasks16((querySnapshot) => {
      tasksContainer16.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer16.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });

    onGetTasks17((querySnapshot) => {
      tasksContainer17.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer17.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks18((querySnapshot) => {
      tasksContainer18.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer18.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks19((querySnapshot) => {
      tasksContainer19.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer19.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });


    onGetTasks20((querySnapshot) => {
      tasksContainer20.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer20.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });

    onGetTasks21((querySnapshot) => {
      tasksContainer21.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        tasksContainer21.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${task.cantidad} ${task.title}</h3>
      <p>${task.description}</p>
      <div>
      
       
      </div>
    </div>`;
      });
      
    });




  });
  
  
  //panel 3
  
 