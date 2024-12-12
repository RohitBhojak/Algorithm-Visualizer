// Variables
const canvas = document.querySelector(".canvas");
let box = [];
let box_value = [];

const generateButton = document.querySelector("#generate");
const algorithm = document.querySelector("#algorithm");
const search = document.querySelector("#search");

// Event listeners

// Generate array on page load
document.addEventListener("DOMContentLoaded", () => {
    createDivs(maxLength());
    generateArray();
});

// Update boxes dynamically on window resize
window.addEventListener("resize", () => {
    createDivs(maxLength());
    generateArray();
});

// Generate array on generate button click
generateButton.addEventListener("click", () => {
    generateArray();
})

// Reset color on algorithm change
algorithm.addEventListener("input", () => {
    resetColor();
    resetAnimation();
})

// Functions

// Create div elements inside the canvas
function createDivs(size) {
    canvas.innerHTML = ''; // Clear canvas
    box = []; // Reset box array

    // Create and append boxes to the canvas
    for (let i = 0; i < size; i++) {
        const boxElement = document.createElement("div");
        boxElement.setAttribute("index", i); // Add index attribute
        boxElement.classList.add("box");
        canvas.appendChild(boxElement);
        box.push(boxElement);
    }
}

// Calculate the maximum number of boxes that fit within the canvas
function maxLength() {
    const boxWidth = 80; // Width of each box
    const canvasWidth = canvas.offsetWidth - 40; // Width of the canvas without padding
    const numColumns = Math.floor(canvasWidth / boxWidth);
    return numColumns * 4; // 4 rows
}

// Generate a random array and assign values to the boxes with animation
function generateArray() {
    box_value = []; // Reset values
    resetColor();

    // Generate random, unique values
    while (box_value.length < box.length) {
        const newValue = Math.floor(Math.random() * 100); // Random value between 0 and 99
        if (!box_value.includes(newValue)) {
            box_value.push(newValue);
        }
    }

    // Sort the values for easier visualization
    box_value.sort((a, b) => a - b);

    // Animate the innerText of each box
    for (let i = 0; i < box_value.length; i++) {
        animateTextChange(box[i], box_value[i], 600); // Animate to the new value in 500ms
    }
}

// Animate innerText to change from the current value to the target value
function animateTextChange(element, targetValue, duration) {
    const startValue = parseInt(element.innerText) || 0; // Default to 0 if no text
    const startTime = performance.now();

    function update(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1); // Normalize progress (0 to 1)
        const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
        element.innerText = currentValue; // Update innerText

        if (progress < 1) {
            requestAnimationFrame(update); // Continue animation
        }
    }

    requestAnimationFrame(update);
}



// Disable inputs while the algorithm is running
function disable() {
    search.disabled = true;
    search.classList.add("disabled");

    generateButton.disabled = true;
    generateButton.classList.add("disabled");

    algorithm.disabled = true;
    algorithm.classList.add("disabled");
}

// Enable inputs after the algorithm is completed
function enable() {
    search.disabled = false;
    search.classList.remove("disabled");

    generateButton.disabled = false;
    generateButton.classList.remove("disabled");

    algorithm.disabled = false;
    algorithm.classList.remove("disabled");
}
