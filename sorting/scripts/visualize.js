// variables
let operationsQueue = [];
let currentFrame = 0;
let isRendering = false;
let isPlaying = false; // track play/pause state
let frameID = null; // variable to store the requestAnimationFrame ID
let speedDelay = 75; // Default speed delay

// Update speedDelay dynamically
const speedInput = document.querySelector("#speed");
speedInput.addEventListener("input", () => {
    switch (speedInput.value) {
        case "1":
            speedDelay = 150;
            break;
        case "2":
            speedDelay = 100;
            break;
        case "3":
            speedDelay = 75;
            break;
        case "4":
            speedDelay = 50;
            break;
        case "5":
            speedDelay = 25;
            break;
    }
});

// Sort button event listener
document.querySelector("#sort").addEventListener("click", () => {
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
        resetAnimation();
    }
}

// Animation Control Functions
function startAnimation() {
    disable();
    isRendering = true;
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    document.querySelector("#sort").innerText = "Pause";
}

function pauseAnimation() {
    enable();
    isPlaying = false;
    cancelAnimationFrame(frameID);
    document.querySelector("#sort").innerText = "Resume";
}

function resumeAnimation() {
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    document.querySelector("#sort").innerText = "Pause";
}

function resetAnimation() {
    enable();
    isRendering = false;
    isPlaying = false;
    currentFrame = 0;
    operationsQueue = [];
    frameID = null;
    cancelAnimationFrame(frameID);
    document.querySelector("#sort").innerText = "Start";
}

// Function to process a single operation
function processOperation(operation) {
    const { type, indices, color } = operation;
    switch (type) {
        case "compare":
            bar[indices[0]].style.backgroundColor = "yellow";
            bar[indices[1]].style.backgroundColor = "yellow";
            break;
        case "swap":
            bar[indices[0]].style.height = bar_height[indices[0]] + "%";
            bar[indices[0]].innerText = bar_height[indices[0]];
            bar[indices[1]].style.height = bar_height[indices[1]] + "%";
            bar[indices[1]].innerText = bar_height[indices[1]];
            break;
        case "update":
            bar[indices[0]].style.backgroundColor = color;
            break;
    }
}
