// List of all products (at least 12 for pagination testing)
let allProducts = [
  { name: "Wireless wire", price: "₹7,999", desc: "Noise-cancelling over-ear headphones.", image: "https://via.placeholder.com/70?text=Headphones" },
  { name: "Smartwatch", price: "₹12,999", desc: "Fitness tracking smartwatch.", image: "https://via.placeholder.com/70?text=Smartwatch" },
  { name: "Gaming Mouse", price: "₹2,499", desc: "Ergonomic gaming mouse.", image: "https://via.placeholder.com/70?text=Mouse" },
  { name: "Laptop Stand", price: "₹1,999", desc: "Adjustable aluminium stand.", image: "https://via.placeholder.com/70?text=Stand" },
  { name: "Mechanical Keyboard", price: "₹3,999", desc: "RGB mechanical keyboard.", image: "https://via.placeholder.com/70?text=Keyboard" },
  { name: "Full HD Monitor", price: "₹14,999", desc: "24-inch full HD display.", image: "https://via.placeholder.com/70?text=Monitor" },
  { name: "Webcam", price: "₹1,299", desc: "1080p webcam with microphone.", image: "https://via.placeholder.com/70?text=Webcam" },
  { name: "Pen Drive", price: "₹799", desc: "64GB USB 3.0 drive.", image: "https://via.placeholder.com/70?text=PenDrive" },
  { name: "Bluetooth Speaker", price: "₹2,999", desc: "Loud portable speaker.", image: "https://via.placeholder.com/70?text=Speaker" },
  { name: "Mobile Holder", price: "₹299", desc: "Flexible mobile holder.", image: "https://via.placeholder.com/70?text=Holder" },
  { name: "Wireless Charger", price: "₹1,499", desc: "Fast charging pad.", image: "https://via.placeholder.com/70?text=Charger" },
  { name: "USB Hub", price: "₹999", desc: "4-port USB 3.0 hub.", image: "https://via.placeholder.com/70?text=USB+Hub" }
];

// Current page we are on (starts from 1)
let currentPage = 1;

// How many products to show on one page
let productsPerPage = 10;

// Function to show products on the table
function showProducts() {
  // Find the table body and clear it
  let tableBody = document.querySelector("#productTable tbody");
  tableBody.innerHTML = "";

  // Calculate which products to show
  let startIndex = (currentPage - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;
  let productsToShow = allProducts.slice(startIndex, endIndex);

  // Add each product to the table
  for (let i = 0; i < productsToShow.length; i++) {
    let product = productsToShow[i];

    // Create a new row
    let row = document.createElement("tr");

    // Fill row with product info
    row.innerHTML = `
      <td><img src="${product.image}" alt="${product.name}"></td>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.desc}</td>
    `;

    // Add row to the table body
    tableBody.appendChild(row);
  }

  // Show current page number
  let totalPages = Math.ceil(allProducts.length / productsPerPage);
  document.getElementById("pageNumber").innerText = `Page ${currentPage} of ${totalPages}`;
}

// When "Previous" button is clicked
function prevPage() {
  if (currentPage > 1) {
    currentPage = currentPage - 1;
    showProducts(); // Show products for new page
  }
}

// When "Next" button is clicked
function nextPage() {
  let totalPages = Math.ceil(allProducts.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage = currentPage + 1;
    showProducts(); // Show products for new page
  }
}

// Show first page when website opens
showProducts();
