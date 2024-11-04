// Task 2: Fetching products
const apiURL = 'https://www.course-api.com/javascript-store-products';

// Function to fetch product data from the API
function fetchProducts() {
    // Use fetch to get data from the API
    fetch(apiURL)
        .then(response => {
        
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            displayProducts(data);
        })
        .catch(error => {
            // Resolve errors
            showError('Failed to load products. Please try again later.');
            console.error('Fetch error:', error);
        });
}
