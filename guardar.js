alert("Hola");
function guardar(){
    db.collection("usuarios").add({
        Nombre: document.getElementById("name"),
        Apellido: document.getElementById("last"),
       
    })
    .then((docRef) => {
        alert("Registrado");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}