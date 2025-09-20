const img = document.querySelector("img");
const btn = document.querySelector(".button");

let isOn = false;

btn.addEventListener("click", function () {
  if (isOn) {
    img.setAttribute("src", "./img/bulbon.gif");
    btn.innerHTML = "Turn off the lamp";
    isOn = false;
  } else {
    img.setAttribute("src", "./img/bulboff.gif");
    btn.innerHTML = "Turn on the lamp";
    isOn = true;
  }
});
