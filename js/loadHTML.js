// Function to load external HTML into a page
function loadHTML(elementId, file) {
    fetch(file)  // Fetch the HTML content from the file
        .then(response => response.text())  // Parse the HTML content
        .then(data => {
            document.getElementById(elementId).innerHTML = data;  // Insert it into the designated element
        })
        .catch(err => console.error('Error loading HTML: ', err));  // Error handling
}

// Load the header and footer when the page loads
window.onload = function() {
    loadHTML('navbar-container', 'navbar.html');  // Load the header content
    };
