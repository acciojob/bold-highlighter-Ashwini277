// Function to highlight bold words
function highlight() {
    // Get all <strong> elements within the paragraph
    const boldElements = document.querySelectorAll('#paragraph strong');

    // Iterate over the NodeList and change the color to green
    boldElements.forEach(el => {
        el.style.color = 'green';
    });
}

// Function to revert the color of bold words
function return_normal() {
    // Get all <strong> elements within the paragraph
    const boldElements = document.querySelectorAll('#paragraph strong');

    // Iterate over the NodeList and change the color back to black
    boldElements.forEach(el => {
        el.style.color = 'black';
    });
}

// Add event listeners to the link
document.getElementById('highlight-link').addEventListener('mouseover', highlight);
document.getElementById('highlight-link').addEventListener('mouseout', return_normal);
