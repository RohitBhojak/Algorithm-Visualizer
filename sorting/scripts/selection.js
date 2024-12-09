function selectionSort() {
    const n = bar_height.length;
    let copy = [...bar_height];

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Enqueue update operation to mark the starting element as the current minimum
        addOperation({
            type: "update",
            indices: [minIndex],
            color: "orange" // Highlight the current minimum
        });

        for (let j = i + 1; j < n; j++) {
            // Enqueue comparison operation
            addOperation({
                type: "update",
                indices: [j],
                color: "yellow"
            });

            if (copy[j] < copy[minIndex]) {
                // Reset previous minimum color
                addOperation({
                    type: "update",
                    indices: [minIndex]
                });

                minIndex = j;

                // Mark the new minimum
                addOperation({
                    type: "update",
                    indices: [minIndex],
                    color: "orange"
                });
            }

            // Reset color for non-minimum elements
            if (j !== minIndex) {
                addOperation({
                    type: "update",
                    indices: [j]
                });
            }
        }

        if (minIndex !== i) {
            // Enqueue swap operation
            addOperation({
                type: "swap",
                indices: [i, minIndex]
            });

            [copy[i], copy[minIndex]] = [copy[minIndex], copy[i]];
            
            // Reset color for the swapped element
            addOperation({
                type: "update",
                indices: [minIndex]
            })
        }

        // Mark the sorted position as green
        addOperation({
            type: "update",
            indices: [i],
            color: "green"
        });

    }

    // Mark the last element as sorted (green)
    addOperation({
        type: "update",
        indices: [n - 1],
        color: "green"
    });

    // Start animation after all operations are queued
    startAnimation();
}
