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

// Task 3: Display Product Details Dynamically
function displayProducts(products) {

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    // Looping each product in array
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            <p>Company: ${product.company}</p>
            <p>Price: $${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

// Task 4: Function to handle errors gracefully
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Call fetchProducts
fetchProducts();