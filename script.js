// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

// Search and Filter Functionality
const searchInput = document.getElementById('search');
const regionFilter = document.getElementById('region-filter');
const countryCards = document.querySelectorAll('.country-card');

// Function to filter countries
function filterCountries() {
    const searchValue = searchInput.value.toLowerCase();
    const regionValue = regionFilter.value;

    countryCards.forEach(card => {
        const countryName = card.querySelector('h2').textContent.toLowerCase();
        const countryRegion = card.querySelector('p:nth-child(3)').textContent.split(': ')[1];

        // Filter by search term and region
        const matchesSearch = countryName.includes(searchValue);
        const matchesRegion = regionValue === "" || countryRegion === regionValue;

        if (matchesSearch && matchesRegion) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });                      ,m
}

// Event Listeners for Search and Region Filter
searchInput.addEventListener('input', filterCountries);
regionFilter.addEventListener('change', filterCountries);
