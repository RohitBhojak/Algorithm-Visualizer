// Define the content for pseudocode and complexities for each algorithm
const algorithmInfo = {
    bubble: {
        pseudocode: `
            <pre>
bubbleSort(arr)
    n = arr.length
    for i = 0 to n-1
        swapped = false
        for j = 0 to n-i-1
            if arr[j] > arr[j+1]
                swap arr[j] and arr[j+1]
                swapped = true
        if not swapped
            break
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(n)</li>
                        <li><b>Average Case:</b> O(n^2)</li>
                        <li><b>Worst Case:</b> O(n^2)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(1)</li>
            </ul>
        `
    },
    insertion: {
        pseudocode: `
            <pre>
insertionSort(arr)
    n = arr.length
    for i = 1 to n
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(n)</li>
                        <li><b>Average Case:</b> O(n^2)</li>
                        <li><b>Worst Case:</b> O(n^2)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(1)</li>
            </ul>
        `
    },
    selection: {
        pseudocode: `
            <pre>
selectionSort(arr)
    n = arr.length
    for i = 0 to n-1
        minIdx = i
        for j = i+1 to n
            if arr[j] < arr[minIdx]
                minIdx = j
        swap arr[i] and arr[minIdx]
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(n^2)</li>
                        <li><b>Average Case:</b> O(n^2)</li>
                        <li><b>Worst Case:</b> O(n^2)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(1)</li>
            </ul>
        `
    },
    merge: {
        pseudocode: `
            <pre>
mergeSort(arr, low, high):
    if low < high
        mid = (low + high) / 2
        mergeSort(arr, low, mid)
        mergeSort(arr, mid + 1, high)
        merge(arr, low, mid, high)

merge(arr, low, mid, high):
    create temp list
    left = low, right = mid + 1
    while left <= mid and right <= high:
        if array[left] < array[right]:
            add array[left] to temp
            left++
        else:
            add array[right] to temp
            right++
    while left <= mid:
        add array[left] to temp
        left++    
    while right <= high:
        add array[right] to temp
        right++
    for i = low to high:
        array[i] = temp[i - low]
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(n log n)</li>
                        <li><b>Average Case:</b> O(n log n)</li>
                        <li><b>Worst Case:</b> O(n log n)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(n)</li>
            </ul>
        `
    },
    quick: {
        pseudocode: `
            <pre>
quickSort(arr,low,high)
    if low < high
        partIdx = part(arr, low, high)
        quickSort(arr, low, partIdx - 1)
        quickSort(arr, partIdx + 1, high)
        
part(arr,low,high)
    pivot = arr[low]
    i = low
    j = high
    while i < j
        while arr[i] <= pivot
            increment i
        while arr[i] > pivot
            decrement j
        if i < j
            swap arr[i] and arr[j]
        
    swap arr[low] and arr[j]
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(n log n)</li>
                        <li><b>Average Case:</b> O(n log n)</li>
                        <li><b>Worst Case:</b> O(n^2)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(log n) (Best Case)</li>
            </ul>
        `
    },
    heap: {
        pseudocode: `
            <pre>
    heapSort(arr)
        n = arr.length
        for i = n//2 to 0
            heapify(arr, i, n)
        for i = n-1 to 1
            swap arr[0] and arr[i]
            heapify(arr, 0, i)

    heapify(arr, i, n)
        left = 2 * i + 1
        right = 2 * i + 2
        largest = i
        if left < n and arr[left] > arr[i]
            largest = left
        if right < n and arr[right] > arr[largest]
            largest = right
        if largest != i
            swap arr[i] and arr[largest]
            heapify(arr, largest, n)
            </pre>
        `,
        complexities: `
            <ul>
                <li><b>Time Complexity:</b>
                    <ul>
                        <li><b>Best Case:</b> O(n log n)</li>
                        <li><b>Average Case:</b> O(n log n)</li>
                        <li><b>Worst Case:</b> O(n log n)</li>
                    </ul>
                </li>
                <li><b>Space Complexity:</b> O(1)</li>
            </ul>
        `
    }
};
