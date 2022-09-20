
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
//Cuando la página acaba de cargarse, se ejecuta la función
window.onload = function() {
    

    //Identificamos el elemento que queremos y con el 'event listener' hacemos que se ejecute la función cunado cambie el id="campoarchivo"
    document.getElementById('campoarchivo').addEventListener('change', function(evento){
    //bloquea el uso del interruptor para no subir más archivos
      evento.preventDefault();
      //evento.target para referirse a antes
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
   
  
 
