document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current date and time
    function updateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        document.getElementById('date-time').textContent = dateTimeString;
    }
    setInterval(updateTime, 1000);
    updateTime();

    const salesForm = document.getElementById('salesForm');
    const productNameSelect = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    let totalSales = 0;
    const monthlyTarget = 5000;

    productNameSelect.addEventListener('change', (event) => {
        const selectedOption = event.target.selectedOptions[0];
        const price = selectedOption.getAttribute('data-price');
        productPriceInput.value = price ? parseFloat(price).toFixed(2) : '';
    });

    salesForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productPrice = parseFloat(productPriceInput.value);
        const productQuantity = parseInt(document.getElementById('productQuantity').value);

        const saleAmount = productPrice * productQuantity;
        totalSales += saleAmount;

        document.getElementById('totalSales').textContent = totalSales.toFixed(2);
        document.getElementById('cumulativeSales').textContent = totalSales.toFixed(2);

        // Clear the form
        salesForm.reset();
    });
});
