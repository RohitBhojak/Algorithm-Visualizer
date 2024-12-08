// variables
const canvas = document.querySelector(".canvas");
let bar = [];
let bar_height = [];

const inputSize = document.querySelector("#size");
const generateButton = document.querySelector("#generate");
const algorithm = document.querySelector("#algorithm");
const inputSpeed = document.querySelector("#speed");

// Generate array on page load
document.addEventListener("DOMContentLoaded", () => {
    generateArr(inputSize.value);
})

// Generate array on size change
inputSize.addEventListener("input", () => {
    generateArr(inputSize.value);
})

// Generate array on generate button click
generateButton.addEventListener("click", () => {
    generateArr(inputSize.value);
})

algorithm.addEventListener("input", () => {
    completeAnimation(defaultColor);
})

// functions
function generateArr(size) {
    canvas.innerHTML = "";  // Clear canvas
    resetAnimation();

    bar = [];  // Reset bar array
    bar_height = [];  // Reset height array

    for (let i = 0; i < size; i++) {
        const height = Math.floor(Math.random() * 95) + 5;
        bar_height.push(height);

        const newBar = document.createElement("div");
        newBar.style.height = "0%"; // Initial height
        newBar.textContent = height;
        newBar.classList.add("bar");
        canvas.appendChild(newBar);

        newBar.style.transition = "all .5s ease-in-out";

        // requestAnimationFrame for better animation timing
        requestAnimationFrame(() => {
            newBar.style.height = `${height}%`;
        });

        // Store the bar element
        bar.push(newBar);
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

