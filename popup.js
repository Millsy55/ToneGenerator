/**
 * @author Adam Mills
 */
document.addEventListener("click", sine);
var canvas = document.getElementById("myCanvas");
var dt = canvas.getContext('2d');
var freq = 1000, freqMultiplier = 1;
dt.moveTo(10,10);
dt.lineTo(50,50);
dt.stroke();
var sineWave = document.getElementById('SineWave.mp3');
function sine(){
	dt.fillText("click", event.clientX, event.clientY);
	sineWave.playbackRate = freqMultiplier;
	sineWave.play();
}
