const algorithmInfo = {
    linear: {
        pseudocode: `
            <pre>
linearSearch(arr, x):
    for i = 0 to arr.length
        if arr[i] == x
            return i
    return -1
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(1)</li>
                        <li><b>Average Case:</b> O(n)</li>
                        <li><b>Worst Case:</b> O(n)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(1)</li>
            </ul>
        `
    },
    binary: {
        pseudocode: `
            <pre>
binarySearch(arr, x):
    low = 0
    high = arr.length - 1
    while low <= high
        mid = (low + high) / 2
        if arr[mid] == x
            return mid
        else if arr[mid] < x
            low = mid + 1
        else
            high = mid - 1
    return -1
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(1)</li>
                        <li><b>Average Case:</b> O(log n)</li>
                        <li><b>Worst Case:</b> O(log n)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(1)</li>
            </ul>
        `
    }
};
