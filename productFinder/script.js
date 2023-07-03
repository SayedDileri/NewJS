// Mock product database
const productDatabase = {
    apple: "Produce Section, Aisle 1",
    "milk": "Dairy Section, Aisle 3",
    "bread": "Bakery Section, Aisle 2"
};


function findProduct() {
    const productInput = document.getElementById("productInput");
    const product = productInput.value.toLowerCase();

    const resultDiv = document.getElementById("result");
    if (product in productDatabase) {
        const location = productDatabase[product];
        resultDiv.innerHTML = `<p>${product} is located in ${location}.</p>`;
    } else {
        resultDiv.innerHTML = `<p>Sorry, we couldn't find ${product} in the store.</p>`;
    }
}

let searchEnter = document.getElementById('productInput').addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        findProduct();
    }
});


