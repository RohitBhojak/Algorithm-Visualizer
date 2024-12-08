function bubbleSort() {
    c_delay = 0;

    for (let i = 0; i < inputSize.value - 1; i++) {
        for (let j = 0; j < inputSize.value - i - 1; j++) {
            // Enqueue comparison operation
            addOperation({
                type: "compare",
                indices: [j, j + 1],
            });

            if (bar_height[j] > bar_height[j + 1]) {
                // Enqueue swap operation
                addOperation({
                    type: "swap",
                    indices: [j, j + 1]
                });

                // Enqueue update operation (optional, to change colors back)
                addOperation({
                    type: "update",
                    indices: [j, j + 1],
                    color: "blue"
                });
            } else {
                // Enqueue update operation (no swap, reset colors)
                addOperation({
                    type: "update",
                    indices: [j, j + 1],
                    color: "blue"
                });
            }
        }
        // Enqueue final color update for sorted element
        addOperation({
            type: "update",
            indices: [inputSize.value - i - 1],
            color: "green"
        });
    }
    // Enqueue update for the first element
    addOperation({
        type: "update",
        indices: [0],
        color: "green"
    });

    startAnimation(); // Start the rendering process
}
