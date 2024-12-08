function merge(bar_height, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);
    for (let i = 0; i < n1; i++) {
        L[i] = bar_height[l + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = bar_height[m + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            bar_height[k] = L[i];
            i++;
        } else {
            bar_height[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        bar_height[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        bar_height[k] = R[j];
        j++;
        k++;
    }    
}
function mergeSort(bar_height, l, r) {
    if (l < r) {
        let m = Math.floor(l + (r - l) / 2);
        mergeSort(bar_height, l, m);
        mergeSort(bar_height, m + 1, r);
        merge(bar_height, l, m, r);
    }    
}