import React from 'react';
import { View, Text, Button } from 'react-native';
import  firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC6CuBWjXHNhd12Vw2hhqeKarORXKbn558",
  authDomain: "curso-firebase-burko.firebaseapp.com",
  databaseURL: "https://curso-firebase-burko.firebaseio.com",
  projectId: "curso-firebase-burko",
  storageBucket: "curso-firebase-burko.appspot.com",
  messagingSenderId: "942133272363"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a root reference
var storageRef = firebase.storage().ref();

// File or Blob named mountains.jpg
var file = 'file:///storage/emulated/0/DCIM/Camera/IMG_20171019_160459.jpg'

// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
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
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

      case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  var downloadURL = uploadTask.snapshot.downloadURL;
});



const _action = () => {
  alert('Eita porra!')
}

export default App = () => {

    return (
      <View>
      <Text>Olá2</Text>
            <Button
                  onPress={_action}
                  title="Clique aqui"
                  color="#841584"            
            />
      </View>
    )
  
}