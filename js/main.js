document.addEventListener("DOMContentLoaded", () => {
  console.log("I am done loading");
});
//-----------------Onclick method---------------------------------------------------------------
document.getElementById("stop").onclick = redCircle;
document.getElementById("ready").onclick = yellowCircle;
document.getElementById("go").onclick = greenCircle;
function redCircle() {
  clearCircle();
  document.getElementById("red-circle").style.backgroundColor = "red";
}
function yellowCircle() {
  clearCircle();
  document.getElementById("yellow-circle").style.backgroundColor = "yellow";
}
function greenCircle() {
  clearCircle();
  document.getElementById("green-circle").style.backgroundColor = "green";
}

function clearCircle() {
  document.getElementById("red-circle").style.backgroundColor = "black";
  document.getElementById("yellow-circle").style.backgroundColor = "black";
  document.getElementById("green-circle").style.backgroundColor = "black";
}

// ----------------------addEventListener Method---------------------------------------------
//red light
const stop = document.querySelector("#stop");
const redCircle = document.querySelector("#red-circle");
function redColor() {
  clearAllLights();
  redCircle.style.backgroundColor = "red";
}
stop.addEventListener("click", redColor);
//yellow light
const ready = document.querySelector("#ready");
const yellowCircle = document.querySelector("#yellow-circle");
function yellowColor() {
  clearAllLights();
  yellowCircle.style.backgroundColor = "yellow";
}
ready.addEventListener("click", yellowColor);
//green light
const go = document.querySelector("#go");
const greenCircle = document.querySelector("#green-circle");
function greenColor() {
  clearAllLights();
  greenCircle.style.backgroundColor = "green";
}
go.addEventListener("click", greenColor);
//clear all lights
function clearAllLights() {
  document.getElementById("red-circle").style.backgroundColor = "black";
  document.getElementById("yellow-circle").style.backgroundColor = "black";
  document.getElementById("green-circle").style.backgroundColor = "black";
}

//---------------------------ID Method with Boolean--------------------------------------------
// const button = document.querySelector("button");
// const redCircle = document.querySelector("#red-circle");
// let isRed = false;
// function redColor() {
//   if (isRed) {
//     document.getElementById("red-circle").style.backgroundColor = "red";
//     isRed = false;
//   } else {
//     document.getElementById("red-circle").style.backgroundColor = "black";
//     isRed = true;
//   }
// }
// button.addEventListener("click", redColor);
