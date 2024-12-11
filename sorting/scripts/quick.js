function quickSort() {

    function partition(arr, start, end) {
        const pivot = arr[start];
        
        // Mark the starting element as the pivot
        addOperation({
            type: "update",
            indices: [start],
            color: red
        });

        let left = start + 1, right = end;
        
        while (left <= right) {
            // Find element greater than pivot from left
            while (left <= end && arr[left] <= pivot) {
                // Highlight left pointer
                addOperation({
                    type: "update",
                    indices: [left],
                    color: yellow
                });
                // Revert color to default
                addOperation({
                    type: "update",
                    indices: [left],
                    color: defaultColor
                });
                left++;
            }

            // Highlight index to be swapped
            if (left <= end) {
                addOperation({
                    type: "update",
                    indices: [left],
                    color: orange
                });
            }

            // Find element smaller than pivot from right
            while (right > start && arr[right] > pivot) {
                // Highlight right pointer
                addOperation({
                    type: "update",
                    indices: [right],
                    color: yellow
                });
                // Revert color to default
                addOperation({
                    type: "update",
                    indices: [right],
                    color: defaultColor
                });
                right--;
            }

            // Highlight index to be swapped
            if (right > start) {
                addOperation({
                    type: "update",
                    indices: [right],
                    color: orange
                });
            }

            // Swap elements if left and right haven't crossed
            if (left < right) {
                addOperation({
                    type: "swap",
                    indices: [left, right]
                });
                [arr[left], arr[right]] = [arr[right], arr[left]];
            }
        }

        if (start != right) {
            // Swap pivot to its correct position
            addOperation({
                type: "swap",
                indices: [start, right]
            });

            [arr[start], arr[right]] = [arr[right], arr[start]];

            // Revert start color to default
            addOperation({
                type: "update",
                indices: [start],
                color: defaultColor
            });
        }

        // Mark pivot as sorted
        addOperation({
            type: "update",
            indices: [right],
            color: "green"
        });

        return right;
    }

    function recursiveSort(arr, start, end) {
        if (start < end) {
            let pivotIndex = partition(arr, start, end);
            recursiveSort(arr, start, pivotIndex - 1);
            recursiveSort(arr, pivotIndex + 1, end);
        }
    }

    const arr = [...bar_height];
    recursiveSort(arr, 0, arr.length - 1);
    startAnimation();
}