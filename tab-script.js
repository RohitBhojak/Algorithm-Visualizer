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
