function bubbleSort() {
    const n = bar_height.length; 
    let copy = [...bar_height]; // Create a copy of bar_height for sorting
    let swapped = false;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            // Enqueue comparison operation
            addOperation({
                type: "compare",
                indices: [j, j + 1]
            });
            
            if (copy[j] > copy[j + 1]) {
                swapped = true;
                // Enqueue swap operation
                addOperation({
                    type: "swap",
                    indices: [j, j + 1]
                });
                
                // Swap the values in the copy array for simulation
                [copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
            }

            // Enqueue update operation to reset the color after comparison
            addOperation({
                type: "update",
                indices: [j, j + 1]
            });
        }

        // Mark the last sorted element in this pass as green (sorted)
        addOperation({
            type: "update",
            indices: [n - i - 1],
            color: "green"
        });

        // If no swaps occurred, break early (array is sorted)
        if (!swapped) break;
    }
    
    // Start animation after all operations are queued
    startAnimation();
}
