
function guardar(){
    db.collection("usuarios").add({
        nombre: document.getElementById("name").value,
        apellido: document.getElementById("last").value,
       
    })
    .then((docRef) => {
        alert("Registrado");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}
window.onload = function() {
    

    // asociamos el manejador de eventos sobre el INPUT FILE
    document.getElementById('campoarchivo').addEventListener('change', function(evento){
      evento.preventDefault();
      var archivo  = evento.target.files[0];
      subirArchivo(archivo);
    });
  }


function subirArchivo(archivo) {
   
    var metadata = {
        contentType: 'image/jpg'
      };

      var refStorage = firebase.storage().ref('micarpeta').child(archivo.name);
      var uploadTask = refStorage.put(archivo);
      uploadTask.on('state_changed', null,
        function(error){
          console.log('Error al subir el archivo', error);
        },
        function(){
          console.log('Subida completada');
         
        }
      );
    }
   
  
 
