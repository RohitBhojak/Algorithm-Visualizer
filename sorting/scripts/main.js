let canvas = document.querySelector(".canvas");
let bar = [];
let bar_height = [];

let inputSize = document.querySelector("#size");
let inputSpeed = document.querySelector("#speed");
let generateButton = document.querySelector("#generate");

inputSize.addEventListener("input", () => {
    bar = [];
    bar_height = [];
    generateArr(inputSize.value);
})

generateButton.addEventListener("click", () => {
    bar = [];
    bar_height = [];
    generateArr(inputSize.value);
})

function generateArr(size) {
    canvas.innerHTML = "";
    for (let i = 0; i < size; i++) {
        bar_height.push(Math.floor(Math.random() * 95) + 5);
        bar[i] = document.createElement("div");
        bar[i].style.height = `${bar_height[i]}%`;
        bar[i].textContent = bar_height[i];
        bar[i].classList.add("bar");
        canvas.appendChild(bar[i]);
    }
}