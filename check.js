window.onload = function() {
    const user = firebase.auth().currentUser;

    if (user) {
      console.log("hola");
    } else {
      // No user is signed in.
      window.location.replace("/index.html");
    }
}

function cerrarSesion(){
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
       
        // document.cookie = "SessionNumber=; max-age=0";
        
    }).catch((error) => {
        // An error happened.
    
    });
      

}
