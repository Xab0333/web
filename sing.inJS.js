const nombre = "StacionSession"


function guardarCookie(nombre,valor,fecha) {
  document.cookie = nombre+"="+valor+";expires="+fechaFinalisma;
  }




function iniciarSesion(){
    var email1 =  document.getElementById("correo").value;
    var password1 = document.getElementById("contrasena").value;
    //Autentificación de usuarios
        firebase.auth().signInWithEmailAndPassword(email1, password1)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var fecha = new Date();
        var month = fecha.getUTCMonth();
        var monthplus1 = month + 1;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var finalMonth = months[monthplus1];
        var fechaString = fecha.toString();
        var fechaSplit = fechaString.split(" ")
        fechaSplit[1] = finalMonth;
        fechaFinalisma = fechaSplit.join();
        console.log(fechaFinalisma);
        guardarCookie();
       
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    }
function cerrarSesion(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        alert("Se ha cerrado sesión");
        
      }).catch((error) => {
        // An error happened.
      });
      
}

