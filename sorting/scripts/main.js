// variables
const canvas = document.querySelector(".canvas");
let bar = [];
let bar_height = [];

const inputSize = document.querySelector("#size");
const generateButton = document.querySelector("#generate");
const algorithm = document.querySelector("#algorithm");
const inputSpeed = document.querySelector("#speed");

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
    resetAnimation();
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
    inputSize.classList.add("disabled");

    generateButton.disabled = true;
    generateButton.classList.add("disabled");

    algorithm.disabled = true;
    algorithm.classList.add("disabled");
}

// enable inputs after algorithm is completed
function enable() {
    inputSize.disabled = false;
    inputSize.classList.remove("disabled");

    generateButton.disabled = false;
    generateButton.classList.remove("disabled");

    algorithm.disabled = false;
    algorithm.classList.remove("disabled");
}

