/**
 * @author Adam Mills
 */
document.addEventListener("click", sine);
var canvas = document.getElementById("myCanvas");
var dt = canvas.getContext('2d');
dt.moveTo(10,10);
dt.lineTo(50,50);
dt.stroke();
var aud = document.getElementById('SineWave.mp3');
function sine(){
	dt.fillText("click", event.clientX, event.clientY);
	aud.play();
}
