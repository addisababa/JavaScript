	
var x = 100;
var y = 100;
var spd = 2;
var an = 1.5;
function crtaj(evt){
	if(keyPool[37]){
		an+=.2;
	}
	if(keyPool[39]){
		an-=.2;
	}
	x += spd * Math.cos(an);
	y += spd * Math.sin(an);
	div.style.top = y+"px";
	div.style.left = x+"px";
	div.style.transform = "rotate("+an+"rad)";
}


setInterval(crtaj,16);
var keyPool = {};
window.onkeyup = function(evt){
	delete keyPool[evt.keyCode];
}
window.onkeydown = function(evt){
	keyPool[evt.keyCode] = true;
	console.log(keyPool);
}
var div = document.createElement("div");
	div.style.position = "absolute";
	div.style.width = "40px";
	div.style.height = "40px";
	div.style.transformOrigin = "1 1";
	div.style.backgroundColor = "red";		
	window.document.body.appendChild(div);	