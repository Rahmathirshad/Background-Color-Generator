let body = document.querySelector("body");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let colorValues = document.querySelector(".color-values");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient() {
  body.style.background="linear-gradient(to right," + color1.value + "," + color2.value + ")";
  console.log(color1.value);
  colorValues.innerHTML=`${color1.value} ${color2.value}`;
}

