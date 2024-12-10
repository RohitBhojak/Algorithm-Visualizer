function heap() {
    const arr = [...bar_height];

    function heapify(arr, i, n) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        if (left < n && arr[left] > arr[i]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest != i) {
            swap(arr, i, largest);
            heapify(arr, largest, n);
        }
    }

    function heapSort(arr) {
        let n = arr.length;
        for (let i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, i, n);
        }
        for (let i = n - 1; i >= 0; i--) {
            swap(arr, 0, i);
            heapify(arr, 0, i);
        }
    }
    startAnimation();
}