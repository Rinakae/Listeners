"use strict";

const btn = document.querySelector("#btn");
const input = document.querySelector("#text");
const square = document.querySelector("#square");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
const rangeSpan = document.querySelector("#range-span");

const changeColor = function () {
  square.style.backgroundColor = input.value;
};

btn.addEventListener("click", changeColor);

const eBtn = document.querySelector("#e_btn");
eBtn.style.display = "none";

range.addEventListener("input", function(event) {
circle.style.width = event.target.value + "%";
circle.style.height = event.target.value + "%";
rangeSpan.textContent = event.target.value;
});
