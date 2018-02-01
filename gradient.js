"use strict"

let body = document.getElementById('gradient');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let csscode = document.getElementById('css-code');
let gradientDirection = document.getElementById('gradient-direction');
let gradientType = document.getElementById('gradient-type');
let disable = document.getElementById('disable');


function setGradient(){
	if(gradientType.value === "radial-gradient"){
		body.style.background = gradientType.value + "(" + color1.value + ", " + color2.value + ")";
		gradientDirection.disabled = true;
		disable.innerHTML = "No Effect of Gradient Direction In Radial Type";	
	}
	else if(gradientType.value === "linear-gradient"){
		body.style.background = gradientType.value + "(" + gradientDirection.value + " ," + color1.value + ", " + color2.value + ")";
		gradientDirection.disabled = false;
		disable.innerHTML = "";
	}
	csscode.innerHTML = "background: " + body.style.background+";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
gradientDirection.addEventListener("input", setGradient);
gradientType.addEventListener("input", setGradient);