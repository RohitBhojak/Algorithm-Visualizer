function heapify(bar_height, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && bar_height[left] > bar_height[largest]) {
        largest = left;
    }
    if (right < n && bar_height[right] > bar_height[largest]) {
        largest = right;
    }
    if (largest != i) {
        let temp = bar_height[i];
        bar_height[i] = bar_height[largest];
        bar_height[largest] = temp;
        heapify(bar_height, n, largest);
    }
}
function heapSort() {
    const size = document.querySelector("#size");
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(bar_height, size, i);
    }
    for (let i = size - 1; i > 0; i--) {
        let temp = bar_height[0];
        bar_height[0] = bar_height[i];
        bar_height[i] = temp;
        heapify(bar_height, i, 0);
    }
}