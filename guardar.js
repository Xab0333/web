
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
function processSelectedFiles(fileInput) {
    console.log(fileInput);
    console.log(fileInput.files);
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
           var finalFiles =  (files[i].name);
      }
    var storageRef = firebase.storage().ref();

    var metadata = {
        contentType: 'image/jpg'
      };
    

  
  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('images/' + finalFiles).put(finalFiles, metadata);
  console.log(finalFiles);
  
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
  
        // ...
  
        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );
}