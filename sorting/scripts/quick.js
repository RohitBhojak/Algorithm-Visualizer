function quickSort(bar_height) {
    if (bar_height.length <= 1) {
        return bar_height;
    }

    const pivot = bar_height[bar_height.length - 1];
    const left = []; 
    const right = []; 

    for (let i = 0; i < bar_height.length - 1; i++) {
        if (bar_height[i] < pivot) {
            left.push(bar_height[i]);
        } else {
            right.push(bar_height[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}