function heapSort() {
    const arr = [...bar_height];

    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        // Highlight nodes being compared
        addOperation({
            type: "update",
            indices: [i, left, right].filter(idx => idx < n),
            color: yellow
        });

        // Find largest among root, left child and right child
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            // Highlight largest
            addOperation({
                type: "update",
                indices: [largest],
                color: orange
            });
            // Swap
            addOperation({
                type: "swap",
                indices: [i, largest]
            });

            [arr[i], arr[largest]] = [arr[largest], arr[i]];

            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }

        // Highlight heap
        addOperation({
            type: "update",
            indices: generateIndices(i, n-1),
            color: red
        });
    }

    function sort() {
        const n = arr.length;

        // Highlight heap
        addOperation({
            type: "update",
            indices: generateIndices(Math.floor(n/2), n-1),
            color: red
        })
        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            // Move current root to end
            addOperation({
                type: "swap",
                indices: [0, i]
            });

            // Swap in the actual array
            [arr[0], arr[i]] = [arr[i], arr[0]];

            // Mark as sorted
            addOperation({
                type: "update",
                indices: [i],
                color: "green"
            });

            // Call max heapify on the reduced heap
            heapify(arr, i, 0);
        }

        // Mark last element as sorted
        addOperation({
            type: "update",
            indices: [0],
            color: "green"
        });
    }

    sort();
    startAnimation();
}