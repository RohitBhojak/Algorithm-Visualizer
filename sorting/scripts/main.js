// variables
const canvas = document.querySelector(".canvas");
let bar = [];
let bar_height = [];

const inputSize = document.querySelector("#size");
const generateButton = document.querySelector("#generate");
const algorithm = document.querySelector("#algorithm");
const inputSpeed = document.querySelector("#speed");

// Initial adjustment on page load
adjustSizeLimit();

// Recalculate on window resize
window.addEventListener("resize", adjustSizeLimit);

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

// Reset color on algorithm change
algorithm.addEventListener("input", () => {
    completeAnimation(defaultColor);
})

// Generate random array
function generateArr(size) {
    canvas.innerHTML = "";  // Clear canvas
    if (frameID) resetAnimation();

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

// Adjust size limit dynamically
function adjustSizeLimit() {
    const maxBars = calculateMaxBars();

    inputSize.max = maxBars; // Set the maximum value of the slider dynamically

    // Adjust value if it exceeds new max
    if (inputSize.value > maxBars) inputSize.value = maxBars;
}

// Function to calculate maximum number of bars that can fit in the canvas
function calculateMaxBars() {
    const canvasWidth = canvas.offsetWidth; // Get the canvas width dynamically

    const barWidth = 18; // Minimum width of each bar (in px)
    const barSpacing = 2; // Space between bars (in px)

    // Calculate maximum number of bars that can fit in the canvas
    const maxBars = Math.floor(canvasWidth / (barWidth + barSpacing));

    return maxBars;
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

