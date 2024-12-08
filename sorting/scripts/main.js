// variables
const canvas = document.querySelector(".canvas");
let bar = [];
let bar_height = [];

const inputSize = document.querySelector("#size");
const inputSpeed = document.querySelector("#speed");
const generateButton = document.querySelector("#generate");
const algorithm = document.querySelector("#algorithm");

// event listeners
document.addEventListener("DOMContentLoaded", () => {
    generateArr(inputSize.value);
})

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

// functions
function generateArr(size) {
    canvas.innerHTML = "";
    for (let i = 0; i < size; i++) {
        bar_height.push(Math.floor(Math.random() * 95) + 5);
        bar[i] = document.createElement("div");
        bar[i].style.height = `${bar_height[i]}%`;
        bar[i].textContent = bar_height[i];
        bar[i].classList.add("bar");
        canvas.appendChild(bar[i]);

        // add smooth animation
        bar[i].style.transition = "all .5s ease-in-out";
        bar[i].style.height = "0%";
        setTimeout(() => {
            bar[i].style.height = `${bar_height[i]}%`;
        }, 50);
    }
}

// disable inputs while algorithm is running
function disable() {
    inputSize.disabled = true;
    inputSize.classList.toggle("disabled");

    generateButton.disabled = true;
    generateButton.classList.toggle("disabled");

    algorithm.disabled = true;
    algorithm.classList.toggle("disabled");
}

// enable inputs after algorithm is completed
function enable() {
    inputSize.disabled = false;
    inputSize.classList.toggle("disabled");

    generateButton.disabled = false;
    generateButton.classList.toggle("disabled");

    algorithm.disabled = false;
    algorithm.classList.toggle("disabled");
}

