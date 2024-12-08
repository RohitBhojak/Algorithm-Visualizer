function bubbleSort() {
    const n = bar_height.length; // Use bar_height.length instead of inputSize.value

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Enqueue comparison operation
            addOperation({
                type: "compare",
                indices: [j, j + 1],
                color: "yellow",
            });

            if (bar_height[j] > bar_height[j + 1]) {
                // Swap the elements in the array
                const temp = bar_height[j];
                bar_height[j] = bar_height[j + 1];
                bar_height[j + 1] = temp;

                // Enqueue swap operation
                addOperation({
                    type: "swap",
                    indices: [j, j + 1],
                });
            }

            // Reset the colors to default after comparison
            addOperation({
                type: "update",
                indices: [j],
                color: "blue",
            });
            addOperation({
                type: "update",
                indices: [j + 1],
                color: "blue",
            });
        }

        // Mark the last sorted element
        addOperation({
            type: "update",
            indices: [n - i - 1],
            color: "green",
        });
    }

    // Mark the first element as sorted
    addOperation({
        type: "update",
        indices: [0],
        color: "green",
    });

    // Start the rendering process
    startAnimation();
}
