// document.addEventListener('DOMContentLoaded', () => {
//     // Function to update the current date and time
//     function updateTime() {
//         const now = new Date();
//         const dateTimeString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
//         document.getElementById('date-time').textContent = dateTimeString;
//     }
//     setInterval(updateTime, 1000);
//     updateTime();

//     const salesForm = document.getElementById('salesForm');
//     const productNameSelect = document.getElementById('productName');
//     const productPriceInput = document.getElementById('productPrice');
//     let totalSales = 0;
//     const monthlyTarget = 5000;

//     productNameSelect.addEventListener('change', (event) => {
//         const selectedOption = event.target.selectedOptions[0];
//         const price = selectedOption.getAttribute('data-price');
//         productPriceInput.value = price ? parseFloat(price).toFixed(2) : '';
//     });

//     salesForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const productPrice = parseFloat(productPriceInput.value);
//         const productQuantity = parseInt(document.getElementById('productQuantity').value);

//         const saleAmount = productPrice * productQuantity;
//         totalSales += saleAmount;

//         document.getElementById('totalSales').textContent = totalSales.toFixed(2);
//         document.getElementById('cumulativeSales').textContent = totalSales.toFixed(2);

//         // Clear the form
//         salesForm.reset();
//     });
// });











document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-control");
    const productNameSelect = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const totalSalesElement = document.getElementById("totalSales");
    const cumulativeSalesElement = document.getElementById("cumulativeSales");
    const dateTimeElement = document.getElementById("date-time");
    let totalSales = 0;
    let cumulativeSales = 0;

    // Update date and time
    function updateDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const formattedTime = now.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        dateTimeElement.textContent = `Current Date and Time: ${formattedDate} ${formattedTime}`;
    }

    // Update product price based on selected product
    productNameSelect.addEventListener("change", function () {
        const selectedOption = productNameSelect.options[productNameSelect.selectedIndex];
        const price = selectedOption.getAttribute("data-price");
        productPriceInput.value = price || 0;
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const customerName = document.getElementById("customerName").value;
        const productName = productNameSelect.value;
        const productPrice = parseFloat(productPriceInput.value);
        const productQuantity = parseInt(document.getElementById("productQuantity").value);
        const totalSale = productPrice * productQuantity;

        // Update total and cumulative sales
        totalSales += totalSale;
        cumulativeSales += totalSale;

        // Update UI
        totalSalesElement.textContent = totalSales.toFixed(2);
        cumulativeSalesElement.textContent = cumulativeSales.toFixed(2);

        // Add new sale to table
        const salesTable = document.querySelector(".sales-summary table tbody");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${userName}</td>
            <td>${customerName}</td>
            <td>${productName}</td>
            <td>${productPrice.toFixed(2)}</td>
            <td>${productQuantity}</td>
            <td>${totalSale.toFixed(2)}</td>
            <td>${new Date().toLocaleString('en-GB')}</td>
            <td>
                <button class="btn btn-warning btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>
        `;

        salesTable.appendChild(newRow);

        // Clear form
        form.reset();
        productPriceInput.value = 0;
    });

    // Initialize date and time
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
