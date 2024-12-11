function insertionSort() {
    const n = bar_height.length;
    let copy = [...bar_height]; 

    for (let i = 1; i < n; i++) {
        let key = copy[i];
        let j = i - 1;

        // Treat first element as sorted
        addOperation({
            type: "update",
            indices: [0],
            color: "green",
        });
        
        while (j >= 0 && copy[j] > key) {

            // Enqueue comparison operation works when both conditions are true
            addOperation({
                type: "compare",
                indices: [j, j + 1],
            });

            // Move the element one position ahead
            copy[j + 1] = copy[j];

            // Enqueue swap operation to simulate the move
            addOperation({
                type: "swap",
                indices: [j, j + 1],
            });

            // Keep the sorted elements green
            addOperation({
                type: "update",
                indices: [j + 1],
                color: "green",
            });
            j--;
        }

        //Mark the current element as sorted
        addOperation({
            type: "update",
            indices: [j + 1],
            color: "green",
        });

        copy[j + 1] = key;
    }

    startAnimation();
}
