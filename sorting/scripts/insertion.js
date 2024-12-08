function insertionSort() {
    const n = bar_height.length;

    for (let i = 1; i < n; i++) {
        let key = bar_height[i];
        let j = i - 1;

        // Highlight the current element being inserted
        addOperation({
            type: "update",
            indices: [i],
            color: "yellow",
        });

        // Move elements of bar_height[0..i-1] that are greater than key
        while (j >= 0 && bar_height[j] > key) {
            // Enqueue comparison operation
            addOperation({
                type: "compare",
                indices: [j, j + 1],
                color: "yellow",
            });

            // Move the element one position ahead
            bar_height[j + 1] = bar_height[j];

            // Enqueue update operation for moving the element
            addOperation({
                type: "swap",
                indices: [j, j + 1],
            });

            j--;
        }

        // Place the key at its correct position
        bar_height[j + 1] = key;

        // Enqueue update operation to indicate placement
        addOperation({
            type: "update",
            indices: [j + 1],
            color: "green",
        });

        // Reset colors for elements no longer involved in the current iteration
        for (let k = 0; k <= i; k++) {
            addOperation({
                type: "update",
                indices: [k],
                color: "blue",
            });
        }
    }

    // Mark all elements as sorted at the end
    for (let i = 0; i < n; i++) {
        addOperation({
            type: "update",
            indices: [i],
            color: "green",
        });
    }

    // Start the rendering process
    startAnimation();
}
