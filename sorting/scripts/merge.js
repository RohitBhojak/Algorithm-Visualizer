function mergeSort(startIndex, endIndex) {
    // Base condition: return when the segment has only one element
    if (startIndex >= endIndex) return;

    const midIndex = Math.floor((startIndex + endIndex) / 2);

    // Recursively sort the left half
    mergeSort(startIndex, midIndex);

    // Recursively sort the right half
    mergeSort(midIndex + 1, endIndex);

    // Merge the two sorted halves
    merge(startIndex, midIndex, endIndex);

    // Reset the boundary colors after merging
    addOperation({
        type: "update",
        indices: [startIndex, endIndex],
    });
}

function merge(startIndex, midIndex, endIndex) {
    const left = [];
    const right = [];
    // Mark the current segment's boundaries as red
    addOperation({
        type: "update",
        indices: [startIndex, endIndex],
        color: "red",
    });
    // bar_height the left and right halves
    for (let i = startIndex; i <= midIndex; i++) {
        left.push(bar_height[i]);
    }
    for (let i = midIndex + 1; i <= endIndex; i++) {
        right.push(bar_height[i]);
    }

    let i = 0, j = 0, k = startIndex;

    // Merge the left and right halves
    while (i < left.length && j < right.length) {
        // Highlight the elements being compared as yellow
        addOperation({
            type: "update",
            indices: [k],
            color: "yellow",
        });

        if (left[i] <= right[j]) {
            bar_height[k] = left[i];
            i++;
        } else {
            bar_height[k] = right[j];
            j++;
        }

        // Update the height of the bar and mark it as sorted (green)
        addOperation({
            type: "update",
            indices: [k],
            color: "green",
        });

        // Update the height in the DOM
        addOperation({
            type: "swap",
            indices: [k, k], // Visualizes height update
        });

        k++;
    }

    // bar_height the remaining elements of the left array
    while (i < left.length) {
        addOperation({
            type: "update",
            indices: [k],
            color: "yellow",
        });

        bar_height[k] = left[i];
        i++;

        addOperation({
            type: "update",
            indices: [k],
            color: "green",
        });

        addOperation({
            type: "swap",
            indices: [k, k],
        });

        k++;
    }

    // bar_height the remaining elements of the right array
    while (j < right.length) {
        addOperation({
            type: "update",
            indices: [k],
            color: "yellow",
        });

        bar_height[k] = right[j];
        j++;

        addOperation({
            type: "update",
            indices: [k],
            color: "green",
        });

        addOperation({
            type: "swap",
            indices: [k, k],
        });

        k++;
    }
    // Start the animation process after all operations are queued
    startAnimation();
}