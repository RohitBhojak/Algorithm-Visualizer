function binarySearch() {
    let low = 0, high = box_value.length - 1;
    while (low <= high) {
        let mid = Math.floor((high - low)/2) + low;
        addOperation({ indices: [mid], color: yellow });
        if (box_value[mid] == search.value) {
            addOperation({ indices: [mid], color: "green" });
            break;
        } else if (box_value[mid] < search.value) {
            addOperation({ indices: generateIndices(low, mid), color: red });
            low = mid + 1;
        } else {
            addOperation({ indices: generateIndices(mid, high), color: red });
            high = mid - 1;
        }
    }

    startAnimation();
}
