//I honestly don't know how this works
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
        
        // Move elements of copy[0..i-1] that are greater than key
        while (j >= 0 && copy[j] > key) {

            // Enqueue comparison operation works when both conditions are true, i.e. for swappable elements
            //swappable elements turn yellow otherwise remains defaulColored
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

            // Enqueue update operation to reset the color to
            addOperation({
                type: "update",
                indices: [j + 1],
                color: "green",
            });
            j--;
        }

        //otherwise the last elements will be left yellow
        addOperation({
            type: "update",
            indices: [j + 1],
            color: "green",
        });

        copy[j + 1] = key;
    }

    startAnimation();
}
