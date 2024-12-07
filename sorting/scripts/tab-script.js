// Define the content for pseudocode and complexities for each algorithm
const algorithmInfo = {
    bubble: {
        pseudocode: `
            <pre>
    BubbleSort(arr)
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
    InsertionSort(arr)
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
    SelectionSort(arr)
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
    MergeSort(arr)
        n = arr.length
        if n > 1
            mid = n // 2
            left = arr[0...mid]
            right = arr[mid...n]
            MergeSort(left)
            MergeSort(right)
            merge(left, right)

    merge(left, right)
        result = []
        i = j = 0
        while i < left.length and j < right.length
            if left[i] < right[j]
                append left[i] to result
                i = i + 1
            else
                append right[j] to result
                j = j + 1
        return result
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
    QuickSort(arr)
        n = arr.length
        if n <= 1
            return arr
        pivot = arr[n // 2]
        left = []
        right = []
        for each element in arr
            if element < pivot
                append to left
            else
                append to right
        return QuickSort(left) + [pivot] + QuickSort(right)
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
    HeapSort(arr)
        n = arr.length
        buildMaxHeap(arr)
        for i = n-1 to 1
            swap arr[0] and arr[i]
            heapify(arr, 0, i)

    buildMaxHeap(arr)
        n = arr.length
        for i = n//2 to 0
            heapify(arr, i, n)

    heapify(arr, i, size)
        n = size
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and arr[left] > arr[i]
            largest = left
        else
            largest = i
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

// Get all tab buttons and tab content elements
const tabButtons = document.querySelectorAll(".tab button");
const tabContents = document.querySelectorAll(".tabcontent");

// Function to handle tab switching
function openTab(event, tabName) {
    // Hide all tab contents
    tabContents.forEach(content => {
        content.style.display = "none";
    });

    // Remove the active class from all tab buttons
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });

    // Show the clicked tab's content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
    }

    // Add the 'active' class to the clicked tab button
    event.currentTarget.classList.add("active");
}

// Open pseudocode tab by default
document.querySelector(".tab button").click();

// Event listener to update tab content dynamically when an algorithm is selected
document.querySelector("#algorithm").addEventListener("change", (event) => {
    const selectedAlgorithm = event.target.value;

    // Update the pseudocode and complexities based on the selected algorithm
    document.getElementById("pseudocode").innerHTML = algorithmInfo[selectedAlgorithm].pseudocode;
    document.getElementById("complexities").innerHTML = algorithmInfo[selectedAlgorithm].complexities;
});

// Bubble sort selected by default
window.addEventListener("DOMContentLoaded", () => {
    const initialAlgorithm = document.querySelector("#algorithm").value;
    document.getElementById("pseudocode").innerHTML = algorithmInfo[initialAlgorithm].pseudocode;
    document.getElementById("complexities").innerHTML = algorithmInfo[initialAlgorithm].complexities;
});
