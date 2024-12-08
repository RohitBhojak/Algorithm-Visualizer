function insertionSort() {
    const size = document.querySelector("#size");
    for (let i = 1; i < size; i++) {
        let key = bar_height[i];
        let j = i - 1;
        while (j >= 0 && bar_height[j] > key) {
            bar_height[j + 1] = bar_height[j];
            j--;
        }
        bar_height[j + 1] = key;
    }
}