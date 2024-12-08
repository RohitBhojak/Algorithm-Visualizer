function selectionSort() {
    const size = document.querySelector("#size");
    for (let i = 0; i < size - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < size; j++) {
            if (arr[j] < bar_height[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [bar_height[i], bar_height[minIndex]] = [bar_height[minIndex], bar_height[i]];
        }
    }
}