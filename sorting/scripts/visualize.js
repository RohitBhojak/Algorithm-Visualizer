// variables
let operationsQueue = [];
let currentFrame = 0;
let isRendering = false;
let isPlaying = false; // track play/pause state
let frameID = null; // variable to store the requestAnimationFrame ID

const inputSpeed = document.querySelector("#speed");

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
})

// functions

// add operation to queue
function addOperation(operation) {
    operationsQueue.push(operation);
}

// callback for requestAnimationFrame
function renderFrame() {
    if (currentFrame < operationsQueue.length && isPlaying) {
        const operation = operationsQueue[currentFrame];
        processOperation(operation);
        currentFrame++;
        frameID = requestAnimationFrame(renderFrame);
    } else if (currentFrame >= operationsQueue.length) {
        resetAnimation();
    }
}

// Animation Control Functions
function startAnimation() {
    isRendering = true;
    isPlaying = true;
    frameID = requestAnimationFrame(renderFrame);
    document.querySelector("#sort").innerText = "Pause";
}

function pauseAnimation() {
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
    const {type, indices, color} = operation;
    switch (type) {
        case "compare":
            bar[indices[0]].style.backgroundColor = "yellow";
            bar[indices[1]].style.backgroundColor = "yellow";
            break;
        case "swap":
            const temp = bar_height[indices[0]];
            bar_height[indices[0]] = bar_height[indices[1]];
            bar_height[indices[1]] = temp;

            bar[indices[0]].style.height = bar_height[indices[0]] + "%";
            bar[indices[1]].style.height = bar_height[indices[1]] + "%";
            break;
        case "update":
            bar[indices[0]].style.backgroundColor = color;
            break;
    }
}