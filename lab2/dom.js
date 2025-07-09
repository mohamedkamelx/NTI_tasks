let img_container = document.getElementById("header");
let container = document.getElementsByClassName("center")[0];
let img = img_container.querySelector("img");
let new_img = document.createElement("img");
let new_container = document.createElement("div");
new_img.src = img.src;
new_img.style.position = "relative";
new_img.style.right = "550px";
img.style.position = "relative";
img.style.left = "550px";
let nav = container.querySelector("#nav")
nav.style.display = "inline-block";

new_container.appendChild(new_img)
container.appendChild(new_container)