function mergeSort() {

    function merge(arr, start, mid, end){
        // Highlight partitions before merging
        addOperation({ 
            type: "update", 
            indices: generateIndices(start, end),
            color: red
        });

        let merged = [];
        let i = start, j = mid + 1;

        while (i <= mid && j <= end) {
            addOperation({ 
                type: "compare", 
                indices: [i, j]
            });

            // Highlight elements being merged
            if (arr[i] <= arr[j]) {
                addOperation({ 
                    type: "update", 
                    indices: [i],
                    color: orange
                });
                merged.push(arr[i]);
                i++;
            } else {
                addOperation({ 
                    type: "update", 
                    indices: [j],
                    color: orange
                });
                merged.push(arr[j]);
                j++;
            }
        }
        while (i <= mid) {
            addOperation({ 
                type: "update", 
                indices: [i],
                color: orange
            });
            merged.push(arr[i]);
            i++;
        }
        while (j <= end) {
            addOperation({ 
                type: "update", 
                indices: [j],
                color: orange
            });
            merged.push(arr[j]);
            j++;
        }

        // Update original array with merged result
        for (let k = 0; k < merged.length; k++) {
            addOperation({ 
                type: "update", 
                indices: [start + k], 
                newHeight: merged[k],
                color: "green"
            });
            arr[start + k] = merged[k];
        }
    }

    function recursiveSort(arr, start, end) {
        if (start < end) {
        const mid = Math.floor((start + end) / 2);
         recursiveSort(arr, start, mid);
        recursiveSort(arr, mid + 1, end);
        return merge(arr, start, mid, end);
        }
    }

    const arr = [...bar_height];
    recursiveSort(arr, 0, arr.length - 1);
    startAnimation();
}