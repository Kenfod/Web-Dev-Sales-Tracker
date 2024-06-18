document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-control");
    const productNameSelect = document.getElementById("productName");
    const productPriceInput = document.getElementById("productPrice");
    const totalSalesElement = document.getElementById("totalSales");
    const cumulativeSalesElement = document.getElementById("cumulativeSales");
    const dateTimeElement = document.getElementById("date-time");
    const salesTableBody = document.getElementById("salesTableBody");
    const targetBalanceStatusElement = document.getElementById("targetBalanceStatus");
    const monthlyTarget = 5000.00; // Define the monthly target here
    let totalSales = 0;
    let cumulativeSales = 0;

    // Update date and time
    function updateDateTime() {
        dateTimeElement.textContent = new Date().toLocaleString('en-GB');
    }

    // Update product price based on selected product
    productNameSelect.addEventListener("change", function () {
        const selectedOption = productNameSelect.options[productNameSelect.selectedIndex];
        const price = selectedOption.getAttribute("data-price");
        productPriceInput.value = price;
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

        // Update total sales and cumulative sales
        totalSales += totalSale;
        cumulativeSales += totalSale;

        // Update UI
        totalSalesElement.textContent = totalSales.toFixed(2);
        cumulativeSalesElement.textContent = cumulativeSales.toFixed(2);

        // Update target balance status
        updateTargetBalanceStatus();

        // Add new sale record to table
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
                <a href="/edit_sale/" class="btn btn-warning btn-sm">Edit</a>
                <a href="/delete_sale/" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this sale?');">Delete</a>
            </td>
        `;
        salesTableBody.appendChild(newRow);

        // Clear form
        form.reset();
        productPriceInput.value = 0;
    });

    // Update target balance status
    function updateTargetBalanceStatus() {
        const balance = cumulativeSales - monthlyTarget;
        if (balance < 0) {
            targetBalanceStatusElement.textContent = `Target Balance: $${(-balance).toFixed(2)}`;
            targetBalanceStatusElement.classList.remove("text-success");
            targetBalanceStatusElement.classList.add("text-danger");
        } else {
            targetBalanceStatusElement.textContent = `Target Surpassed by: $${balance.toFixed(2)}`;
            targetBalanceStatusElement.classList.remove("text-danger");
            targetBalanceStatusElement.classList.add("text-success");
        }
    }

    // Initialize date and time
    updateDateTime();
    setInterval(updateDateTime, 1000);
});