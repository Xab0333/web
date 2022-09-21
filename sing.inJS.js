function iniciarSesion(){
    var email1 =  document.getElementById("correo").value;
    var password1 = document.getElementById("contrasena").value;
    //Autentificación de usuarios
        firebase.auth().signInWithEmailAndPassword(email1, password1)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.href = "https://xab0333.github.io/web/";
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