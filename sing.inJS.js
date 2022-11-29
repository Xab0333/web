function guardarCookie(nombre,valor,fecha) {
  var fecha = new Date();
  var month = fecha.getUTCMonth();
  var day = fecha.getDay();
  var monthplus1 = month + 1;
  if(monthplus1 == 11){
    monthplus1 = 0;

  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var finalMonth = months[monthplus1];
  var fechaString = fecha.toString();
  var fechaSplit = fechaString.split(" ")
  fechaSplit[1] = finalMonth;
  fechaFinalisma = fechaSplit.join();
  console.log(fechaFinalisma);  
  }

 


function iniciarSesion(){
    var email1 =  document.getElementById("correo").value;
    var password1 = document.getElementById("contrasena").value;
    //Autentificación de usuarios
        firebase.auth().signInWithEmailAndPassword(email1, password1).then((userCredential) => {
        // Signed in
        var valor = userCredential.user;
        console.log(valor);
        console.log(userCredential);
        guardarCookie();
        document.cookie = "SessionNumber="+valor+";expires="+fechaFinalisma;
        window.location.replace("/main.html");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        
      });
    }
function cerrarSesion(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("hola");
        window.location.replace("/index.html");
      }).catch((error) => {
        // An error happened.
      });
      
}

