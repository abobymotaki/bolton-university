// Function to load the header content
function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const headerElement = document.getElementById('header');
            if (!headerElement) {
                throw new Error('Header element not found in the DOM');
            }
            headerElement.innerHTML = data;
            console.log('Header loaded successfully');
            // Initialize dropdown functionality after header is loaded
            initializeDropdown();
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to load the footer content
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const footerElement = document.getElementById('footer');
            if (!footerElement) {
                throw new Error('Footer element not found in the DOM');
            }
            footerElement.innerHTML = data;
            console.log('Footer loaded successfully');
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Function to initialize dropdown functionality
function initializeDropdown() {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (!dropbtn || !dropdownContent) {
        console.error('Dropdown button or content not found');
        return;
    }

    dropbtn.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
        console.log('Dropdown toggled');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
                console.log('Dropdown closed');
            }
        }
    });
}

// Load the header and footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
