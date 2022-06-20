firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  
  
      // User is signed in.
  
      var user = firebase.auth().currentUser;
      console.log('usuario autentificado');
        var usuario = user.uid;
        var correo = user.email;
      localStorage.setItem("UserID", usuario);
      localStorage.setItem("UserMail", correo);
     
      
   

      var docRef = db.collection("users").doc(usuario);

      docRef.get().then((doc) => {
          if (doc.exists) {
              console.log("Document data:", doc.data().destino);
              localStorage.setItem('destino', doc.data().destino);

          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }

         window.location.href = 'home.html';
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      if(user != null){
  
      }
  
    } else {
      // No user is signed in.
  
      console.log('usuario no logueadoz')
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById('campo_email').value;
    var userPwd = document.getElementById('campo_pwd').value;
  
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPwd).catch(function(error) {
      // Handle Errors here.
      localStorage.clear();
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
 
  function cuentaNueva(){
    var nombre = document.getElementById("nuevo_nombre").value;
  //  var nomcomercial = document.getElementById("nombre_comercial").value;
  //  var negocio = document.getElementById("nuevo_negocio").value;
  //  var telefono = document.getElementById("nuevo_telefono").value;
  //  var rfc = document.getElementById("nuevo_rfc").value;
    var destino = document.getElementById("nieve").value;
    localStorage.setItem('nombre', nombre);
  //  localStorage.setItem('nomcomercial', nomcomercial);
  //  localStorage.setItem('negocio', negocio);
  //  localStorage.setItem('telefono', telefono);
  //  localStorage.setItem('rfc', rfc);
    localStorage.setItem('destino', destino);

    

    var newEmail = document.getElementById('nuevo_email').value;
    var newPwd = document.getElementById('nuevo_pwd').value;
  

   if(nombre == ''){
      alert('necesitas colocar tu nombre para poder continuar');
       document.getElementById("nuevo_nombre").focus();
    //}else if(nomcomercial == ''){
      //alert('necesitas colocar el nombre comercial de tu negocio para poder continuar');
      //document.getElementById("nombre_comercial").focus();
    //}else if(negocio == ''){
      //alert('necesitas colocar el giro de tu negocio para poder continuar');
      //document.getElementById("nuevo_negocio").focus();
    //}else if(telefono == ''){
      //alert('necesitas colocar el teléfono de tu negocio para poder continuar');
      //document.getElementById("nuevo_telefono").focus();
    //}else if(rfc == ''){
      //alert('necesitas colocar el rfc de tu negocio para poder continuar');
      //document.getElementById("nuevo_rfc").focus();
    }else if(newEmail == ''){
      alert('necesitas colocar el correo electrónico de tu negocio para poder continuar');
      document.getElementById("nuevo_email").focus();
  }else if(newPwd == ''){
      alert('necesitas colocar una contraseña en tu cuenta para poder continuar');
      document.getElementById("nuevo_pwd").focus();
    }else if(destino == ''){
      alert('necesitamos saber con quien reportaras tu trabajo');
      document.getElementById("nieve").focus();
    }else{
    
  
    firebase.auth().createUserWithEmailAndPassword(newEmail, newPwd).catch(function(error) {
    // Handle Errors here.
    
   
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  
   // window.alert(errorMessage);
    
  });
    }

  }
  
  
  function restablecePwd(){
    var auth = firebase.auth();
    
  var correo = document.getElementById('restablece_email').value;
  
  auth.sendPasswordResetEmail(correo).then(function() {
    $('#mensajito').show();
    // Email sent.
  }).catch(function(error) {
    // An error happened.
    window.alert(error);
  });
  
  }
  
  
  
  // Añadir un listener en tiempo real
   //  firebase.auth().onAuthStateChanged( firebaseUser => {
  //Si existe autenticación hacer.....
     // if(firebaseUser) {
       //    window.location.href = "form.html";
      //} else {
        //console.log('no logueado');
  
      //}    
    //});
  
  
  
  
  