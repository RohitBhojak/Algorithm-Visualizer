// variables
let operationsQueue = [];
let currentFrame = 0;
let isPlaying = false; // track play/pause state
let frameID = null; // variable to store the requestAnimationFrame ID
let speedDelay = 600; // Default speed delay
let defaultColor = getComputedStyle(document.documentElement).getPropertyValue('--bar-color'); // Get default bar color
const speedArr = [1000, 800, 600, 400, 200, 10];
const sort = document.querySelector("#start");

// colors
const yellow = "#f8d000";
const orange = "#ff9f00";
const red = "#b22222";

// Update speedDelay dynamically
const speedInput = document.querySelector("#speed");
speedInput.addEventListener("input", () => {
    speedDelay = speedArr[speedInput.value];
});

// Sort button event listener
sort.addEventListener("click", () => {
    if (isPlaying) {
        pauseAnimation();
    } else {
        switch (document.querySelector("#algorithm").value) {
            case "bubble":
                bubbleSort();
                break;
            case "insertion":
                insertionSort();
                break;
            case "selection":
                selectionSort();
                break;
            case "merge":
                mergeSort();
                break;
            case "quick":
                quickSort();
                break;
            case "heap":
                heapSort();
                break;
        }
    }
});

// functions

// Add operation to queue
function addOperation(operation) {
    operationsQueue.push(operation);
}

// Callback for rendering frames with speed control
function renderFrame() {
    if (currentFrame < operationsQueue.length && isPlaying) {
        const operation = operationsQueue[currentFrame];
        processOperation(operation);
        currentFrame++;

        // Schedule the next frame with dynamic delay
        setTimeout(() => {
            frameID = requestAnimationFrame(renderFrame);
        }, speedDelay);
    } else if (currentFrame >= operationsQueue.length) {
        completeAnimation();
    }
}

// Animation Control Functions
function startAnimation() {
    disable();
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    sort.innerText = "Pause";
}

function pauseAnimation() {
    enable();
    isPlaying = false;
    cancelAnimationFrame(frameID);
    sort.innerText = "Resume";
}

function resumeAnimation() {
    disable();
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    sort.innerText = "Pause";
}

function resetAnimation() {
    enable();
    isPlaying = false;
    currentFrame = 0;
    operationsQueue = [];
    frameID = null;
    cancelAnimationFrame(frameID);
    sort.innerText = "Start";
}

function completeAnimation(color = "green") {
    // Color bars green to indicate completion
    bar.forEach(b => b.style.backgroundColor = color);
    resetAnimation();
}

// Function to process a single operation
function processOperation(operation) {
    const { type, indices, color, newHeight } = operation;
    switch (type) {
        case "compare":
            bar[indices[0]].style.backgroundColor = yellow;
            bar[indices[1]].style.backgroundColor = yellow;
            break;
        case "swap":
            [bar_height[indices[0]], bar_height[indices[1]]] = [bar_height[indices[1]], bar_height[indices[0]]];
            bar[indices[0]].style.height = bar_height[indices[0]] + "%";
            bar[indices[0]].innerText = bar_height[indices[0]];
            bar[indices[1]].style.height = bar_height[indices[1]] + "%";
            bar[indices[1]].innerText = bar_height[indices[1]];
            break;
        case "update":
            if (newHeight !== undefined) {
                bar_height[indices[0]] = newHeight;
                bar[indices[0]].style.height = newHeight + "%";
                bar[indices[0]].innerText = newHeight;
            }
            indices.forEach(index => {
                bar[index].style.backgroundColor = color || defaultColor;
            });
            break;
    }
}

function generateIndices(start, end) {
    const indices = [];
    for (let i = start; i <= end; i++) {
        indices.push(i);
    }
    return indices;
}