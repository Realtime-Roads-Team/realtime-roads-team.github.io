// Function to load external HTML into a page
function loadHTML(elementId, file) {
    fetch(file)  // Fetch the HTML content from the file
        .then(response => response.text())  // Parse the HTML content
        .then(data => {
            document.getElementById(elementId).innerHTML = data;  // Insert it into the designated element
        })
        .catch(err => console.error('Error loading HTML: ', err));  // Error handling
}

// Function to load the navbar and set the active link
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setActiveNavbarLink();  // After navbar is loaded, set active class
        })
        .catch(err => console.error('Error loading navbar: ', err));
}

// Function to set the active class on the navbar link based on the current page
function setActiveNavbarLink() {
    // Get the current page's URL
    const currentURL = window.location.href;

    // Get all navbar links
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through the links and add 'active' class to the one that matches the current URL
    navbarLinks.forEach(link => {
        if (currentURL.includes(link.href)) {
            link.classList.add('active');  // Add 'active' class to the matching link
        } else {
            link.classList.remove('active');  // Remove 'active' class from others
        }
    });
}

// Combined onload logic
window.onload = function () {
    loadNavbar(); // Load the navbar
    loadHTML('socials-container', 'socials.html');
    loadHTML('footer-container', 'footer.html');
};
