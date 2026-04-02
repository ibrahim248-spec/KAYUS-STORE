const products = [
    { name: "Cement", price: 10000 },
    { name: "Door", price: 150000 },
    { name: "Door Lock", price: 5000 },
    { name: "Welding Machine", price: 70000 },
    { name: "Shovel", price: 6500 }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<h3>${product.name}</h3><p>Price: ₦${product.price}</p>`;
    productList.appendChild(card);
});
