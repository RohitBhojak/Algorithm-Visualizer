// variables
let operationsQueue = [];
let currentFrame = 0;
let isPlaying = false; // track play/pause state
let frameID = null; // variable to store the requestAnimationFrame ID
let speedDelay = 600; // Default speed delay
let defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--bar-color'); // Get default bar color
const speedArr = [1000, 800, 600, 400, 200, 10];
const start = document.querySelector("#start");

// colors
const yellow = "#f8d000";
const orange = "#ff9f00";
const red = "#b22222";

// Update speedDelay dynamically
const speedInput = document.querySelector("#speed");
speedInput.addEventListener("input", () => {
    speedDelay = speedArr[speedInput.value];
});

// start button event listener
start.addEventListener("click", () => {
    if (isPlaying) {
        pauseAnimation();
    } else if (start.innerText == "Start") {
        switch (document.querySelector("#algorithm").value) {
            case "linear":
                linearSearch();
                break;
            case "binary":
                binarySearch();
                break;
        }
    } else if (start.innerText == "Resume") {
        resumeAnimation();
    }
});

// Functions

// Add operation to queue
function addOperation(operation) {
    operationsQueue.push(operation);
}

// Callback for rendering frames with speed control
function renderFrame() {
    if (currentFrame < operationsQueue.length && isPlaying) {
        const operation = operationsQueue[currentFrame];
        processOperation(operation);
        console.log(operationsQueue.length);
        currentFrame++;

        // Schedule the next frame with dynamic delay
        setTimeout(() => {
            frameID = requestAnimationFrame(renderFrame);
        }, speedDelay);
    } else if (currentFrame >= operationsQueue.length) {
        resetAnimation();
    }
}

// Animation Control Functions
function startAnimation() {
    disable();
    resetColor();
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    start.innerText = "Pause";
}

function pauseAnimation() {
    enable();
    isPlaying = false;
    cancelAnimationFrame(frameID);
    start.innerText = "Resume";
}

function resumeAnimation() {
    disable();
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    start.innerText = "Pause";
}

function resetAnimation() {
    enable();
    isPlaying = false;
    currentFrame = 0;
    operationsQueue = [];
    frameID = null;
    cancelAnimationFrame(frameID);
    start.innerText = "Start";
}

function resetColor() {
    box.forEach(div => div.style.backgroundColor = defaultColor);
}

// Function to process a single operation
function processOperation(operation) {
    const { indices, color } = operation;
    indices.forEach(index => {
        box[index].style.backgroundColor = color || defaultColor;
    });
}

function generateIndices(start, end) {
    const indices = [];
    for (let i = start; i <= end; i++) {
        indices.push(i);
    }
    return indices;
}