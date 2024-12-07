// Function to handle tab switching and dynamic content loading
function openTab(evt, tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName('tabcontent');
    for (let content of tabContents) {
        content.style.display = 'none'; // Hide all tabs
    }

    // Remove the active class from all tab links (buttons)
    const tabLinks = document.getElementsByClassName('tablinks');
    for (let link of tabLinks) {
        link.classList.remove('active'); // Remove active status
    }

    // Show the selected tab and add the active class to the clicked button
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');

    // Dynamically load content based on the tabName
    if (tabName === 'pseudocode') {
        loadPseudocode(); // Load pseudocode content
    } else if (tabName === 'complexities') {
        loadComplexities(); // Load complexities content
    }
}

// Function to load pseudocode based on the selected algorithm
function loadPseudocode() {
    const algorithm = document.getElementById('algorithm').value; // Selected algorithm
    const pseudocodeDiv = document.getElementById('pseudocode'); // Target div for pseudocode

    // Clear previous pseudocode content
    pseudocodeDiv.innerHTML = '';
    // Define pseudocode for each algorithm
    let pseudocode = '';
    switch (algorithm) {
        case 'bubble':
            pseudocode = `
               
            
            
                SET n to the number of elements in the array

                REPEAT for Pass from 1 to (n-1)

                    SET swapped to FALSE

                    FOR each Index from 0 to (n - Pass - 1)

                        IF Array[Index] > Array[Index + 1] THEN

                            SWAP Array[Index] with Array[Index + 1]

                            SET swapped to TRUE

                        END IF

                    END FOR

                    IF swapped = FALSE THEN

                        BREAK out of the loop (Array is already sorted)

                    END IF

                END REPEAT
            `;
            break;
        case 'insertion':
            pseudocode = `
                
            
            
                FOR each Index from 1 to (n - 1)

                    SET CurrentElement to Array[Index]

                    SET j to Index - 1

                    WHILE j >= 0 AND Array[j] > CurrentElement

                        SHIFT Array[j] to position (j + 1)

                        DECREMENT j by 1

                    END WHILE

                    INSERT CurrentElement at position (j + 1)

                END FOR
            `;
            break;
        case 'selection':
            pseudocode = `
                
            
            
                FOR each Pass from 0 to (n - 1)

                    SET minIndex to Pass

                    FOR each Index from (Pass + 1) to (n - 1)

                        IF Array[Index] < Array[minIndex] THEN

                            SET minIndex to Index

                        END IF

                    END FOR

                    IF minIndex ≠ Pass THEN

                        SWAP Array[Pass] with Array[minIndex]

                    END IF

                END FOR

                *Note: Selection sort can be performed with minIndex as well as maxIndex 
                (only change would be: Array[Index] > Array[minIndex])
            `;
            break;
        case 'merge':
            pseudocode = `
                
            
            
                FUNCTION MergeSort(Array)

                    IF Array has one or zero elements THEN

                        RETURN Array (It is already sorted)

                    END IF

                    DIVIDE Array into LeftHalf and RightHalf

                    CALL MergeSort(LeftHalf)

                    CALL MergeSort(RightHalf)

                    RETURN Merge(LeftHalf, RightHalf)

                END FUNCTION

                FUNCTION Merge(Left, Right)

                    INITIALIZE Result as an empty array

                    SET i and j to 0 (Pointers for Left and Right)

                    WHILE i < length(Left) AND j < length(Right)

                        IF Left[i] ≤ Right[j] THEN

                            APPEND Left[i] to Result

                            INCREMENT i

                        ELSE
                            APPEND Right[j] to Result

                            INCREMENT j

                        END IF

                    END WHILE

                    APPEND remaining elements of Left (if any) to Result

                    APPEND remaining elements of Right (if any) to Result

                    RETURN Result

                END FUNCTION
            `;
            break;
        case 'quick':
            pseudocode = `
                
            
            
                FUNCTION QuickSort(Array, Start, End)

                    IF Start < End THEN

                        SET PartitionIndex to Partition(Array, Start, End)

                        CALL QuickSort(Array, Start, PartitionIndex - 1)

                        CALL QuickSort(Array, PartitionIndex + 1, End)

                    END IF

                END FUNCTION

                FUNCTION Partition(Array, Start, End)

                    SET Pivot to Array[End]

                    SET PartitionIndex to Start

                    FOR each Index from Start to (End - 1)

                        IF Array[Index] ≤ Pivot THEN

                            SWAP Array[Index] with Array[PartitionIndex]

                            INCREMENT PartitionIndex

                        END IF

                    END FOR

                    SWAP Array[PartitionIndex] with Array[End]

                    RETURN PartitionIndex

                END FUNCTION
            `;
            break;
        case 'heap':
            pseudocode = `



                FUNCTION HeapSort(Array)

                    SET n to the number of elements in Array

                    // BUILD MAX HEAP

                    FOR i from (n/2 - 1) DOWNTO 0

                        CALL Heapify(Array, n, i)

                    END FOR

                    // EXTRACT ELEMENTS FROM HEAP

                    FOR i from (n - 1) DOWNTO 1

                        SWAP Array[0] with Array[i]

                        CALL Heapify(Array, i, 0)

                    END FOR

                END FUNCTION

                FUNCTION Heapify(Array, HeapSize, RootIndex)

                    SET Largest to RootIndex

                    SET LeftChild to (2 * RootIndex + 1)

                    SET RightChild to (2 * RootIndex + 2)

                    IF LeftChild < HeapSize AND Array[LeftChild] > Array[Largest] THEN

                        SET Largest to LeftChild

                    END IF

                    IF RightChild < HeapSize AND Array[RightChild] > Array[Largest] THEN

                        SET Largest to RightChild

                    END IF

                    IF Largest ≠ RootIndex THEN

                        SWAP Array[RootIndex] with Array[Largest]

                        CALL Heapify(Array, HeapSize, Largest)

                    END IF
                    
                END FUNCTION
            `;
            break;
        default:
            pseudocode = 'Please select an algorithm from the dropdown.';
    }

    // Display the pseudocode inside the target div
    pseudocodeDiv.innerHTML = `<pre>${pseudocode}</pre>`;
}

// Function to load complexities based on the selected algorithm
function loadComplexities() {
    const algorithm = document.getElementById('algorithm').value; // Selected algorithm
    const complexitiesDiv = document.getElementById('complexities'); // Target div for complexities

    // Clear previous complexities content
    complexitiesDiv.innerHTML = '';

    // Define complexities for each algorithm
    let complexities = '';
    switch (algorithm) {
        case 'bubble':
            complexities = `



                Time Complexity
                In Bubble Sort, for every element in the list, we compare it with the next 
                element and swap if required. In the first pass, the algorithm makes n-1 comparisons. 
                In the second pass, it performs n-2 comparisons, and so on, until it completes 1 
                comparison in the last pass.

                The total number of comparisons is:

                (n-1) + (n-2) + (n-3) + ... + 1 = n(n-1)/2

                This results in a quadratic growth of comparisons, so:

                Best Case: O(n) (when the array is already sorted, one pass confirms it).
                Worst Case: O(n^2) (for a completely unsorted list).
                Average Case: O(n^2).
                Space Complexity
                Bubble Sort is an in-place sorting algorithm.

                Space Used:
                Temporary variables for swapping: Constant, i.e., O(1).
                No additional memory is allocated for recursion or auxiliary data structures.

            `;
            break;
        case 'insertion':
            complexities = `
                
            
                Time Complexity
                Insertion Sort works by iteratively building a sorted portion of the array. 
                In each step, it takes the next element and places it in the correct position 
                within the already sorted portion of the list.

                Best Case: O(n) (when the array is already sorted, no swaps are needed, only comparisons).
                Worst Case: O(n^2) (when the array is sorted in reverse order and each element needs to be 
                compared and shifted).
                Average Case: O(n^2) (on average, for a random input, each element will require shifting 
                approximately half of the already sorted portion).
                Space Complexity
                Insertion Sort is an in-place sorting algorithm.

                Space Used:
                Only one temporary variable for swapping. O(1).
                No additional memory is allocated for recursion or auxiliary data structures.
            `;
            break;
        case 'selection':
            complexities = `
                

                Time Complexity
                Selection Sort works by repeatedly finding the minimum (or maximum) element from the 
                unsorted part of the list and swapping it with the first unsorted element. It requires n-1 comparisons 
                in the first pass, n-2 in the second pass, and so on.

                Best Case: O(n^2) (since we still need to compare every element).
                Worst Case: O(n^2) (as in the best case, we need to perform n-1 comparisons, n-2 comparisons, and so on).
                Average Case: O(n^2) (on average, the number of comparisons is the same as the worst case).
                Space Complexity
                Selection Sort is an in-place sorting algorithm.

                Space Used:
                Only one temporary variable for swapping. O(1).
                No additional memory is allocated for recursion or auxiliary data structures.
            
            `;
            break;
        case 'merge':
            complexities = `



                Time Complexity
                Merge Sort is a divide-and-conquer algorithm. It recursively splits the array into halves until each
                 subarray contains a single element, and then merges the subarrays back together in sorted order.

                Best Case: O(n log n) (this occurs even when the input is already sorted because merge sort always 
                divides and merges the array).
                Worst Case: O(n log n) (since the array is divided into smaller arrays and then merged, the time 
                complexity is consistent in all cases).
                Average Case: O(n log n) (since the division and merging steps are the same for all cases).
                Space Complexity
                Merge Sort is not an in-place sorting algorithm.

                Space Used:
                O(n) (extra space is required for the temporary subarrays used during the merging process).
                No additional memory is required for recursion.
            `;
            break;
        case 'quick':
            complexities = `
            


            Time Complexity
            Quick Sort is a divide-and-conquer algorithm. It picks a pivot element, partitions the array into 
            two subarrays (one with elements smaller than the pivot and one with elements greater), and 
            recursively sorts each subarray.

            Best Case: O(n log n) (when the pivot divides the array into nearly equal halves at each step).
            Worst Case: O(n^2) (when the pivot is consistently the smallest or largest element, resulting in 
            unbalanced partitions).
            Average Case: O(n log n) (on average, the pivot divides the array into two nearly equal parts).
            Space Complexity
            Quick Sort is not an in-place sorting algorithm, but it has a relatively low space requirement.

            Space Used:
            O(log n) for recursion stack space (in the best case).
            O(n) space required in the worst case if the partitions are not balanced.

            `;
            break;
        case 'heap':
            complexities = `



                Time Complexity
                Heap Sort works by first building a max-heap (or min-heap) from the input data and then repeatedly removing the root element from the heap and placing it in the sorted portion of the array.

                Best Case: O(n log n) (the heapify process takes log n time for each element).
                Worst Case: O(n log n) (since we always perform heapify operations after removing an element).
                Average Case: O(n log n) (the heapify operation occurs on average log n times for each of n elements).
                Space Complexity
                Heap Sort is an in-place sorting algorithm.

                Space Used:
                O(1) (the sorting does not require additional space for storing temporary arrays).
                No additional memory is required for recursion, as heap sort uses a bottom-up approach.
            `;
            break;
        default:
            complexities = 'Please select an algorithm from the dropdown.';
    }

    // Display the complexities inside the target div
    complexitiesDiv.innerHTML = `<pre>${complexities}</pre>`;
}
