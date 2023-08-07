import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function Photo (props) {
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log(dataUri);
  }

  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
  );
}

export default Photo;