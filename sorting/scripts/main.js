// variables
let canvas = document.querySelector(".canvas");
let bar = [];
let bar_height = [];

let inputSize = document.querySelector("#size");
let inputSpeed = document.querySelector("#speed");
let generateButton = document.querySelector("#generate");
let algorithm = document.querySelector("#algorithm");

// event listeners
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

function runAlgorithm() {
    disable();
    switch (algorithm.value) {
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
    enable();
}