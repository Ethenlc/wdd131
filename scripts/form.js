const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate the Product Name dropdown
document.addEventListener("DOMContentLoaded", function () {
    const productSelect = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Set the product id as the value
        option.textContent = product.name; // Display the product name
        productSelect.appendChild(option);
    });
});

// Increment review counter on review.html page load
if (window.location.pathname.includes("review.html")) {
    // Retrieve the current count from localStorage
    let reviewCount = localStorage.getItem("reviewCount");

    // Initialize the count if it doesn't exist
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10); // Parse the string into a number
    }

    // Increment and store the updated count
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);

    // Display the review count in the console (or update the UI if needed)
    console.log(`Reviews completed: ${reviewCount}`);
}

// Footer copyright year and last modified date
const footer = document.querySelector("footer");
const year = new Date().getFullYear();
const lastModified = document.lastModified;

footer.innerHTML = `&copy; ${year} Ethen Campbell, Idaho • Last Modified: ${lastModified}`;
