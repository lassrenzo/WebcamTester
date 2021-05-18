//alert("Hellow World!!!") // TESTING

var video = document.getElementById('webcam-vid'); // GET THE TURN ON BUTTON
var screenshots = document.getElementById('screenshots'); // GET THE TAKE SCREENSHOT BUTTON
var imageCapture

var startWebcam = () => {
  if (navigator.mediaDevices.getUserMedia) { // ACCESS THE MEDIA DEVICES
    navigator.mediaDevices.getUserMedia({ // GETTING A STREAM
      video: true
    })
    .then(stream => { // USE THE STREAM
      video.srcObject = stream;
      imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
    })
    .catch(err => {
      console.log('Something went wrong', err); // HANDLE THE ERROR
    })
  }
}

var takeScreenshot = () => {
    imageCapture.takePhoto().then(blob => { 
      var img = document.createElement('img'); // CREATE SCREENSHOT FROM IMAGE CAPTURE
      img.src = window.URL.createObjectURL(blob); // CREATE IMAGE SRC
      screenshots.appendChild(img);  // DISPLAY THE SCREENSHOT
    })
  }

