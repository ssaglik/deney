/*
const video = document.getElementById("video");

function startup() {
	
	navigator.mediaDevices.getUserMedia({
		audio: true,
		video: true,
	}).then( stream => {
		video.srcObject = stream;
	}).catch(console.error)
	
}
window.addEventListener('load', startup, false);
*/

// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 400, height: 300 } }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.