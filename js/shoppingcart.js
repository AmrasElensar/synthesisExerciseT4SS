let products = [
    {'name': 'potlood', 'prijs': 0.2},
    {'name': 'gom', 'prijs': 0.5},
    {'name': 'meetlat', 'prijs': 10},
    {'name': 'pen', 'prijs': 5},
    {'name': 'laptop', 'prijs': 1000},
];

add = (productId) => {
    let selectedProduct = document.getElementById(productId);
    selectedProduct.removeAttribute('onClick');
    let emptyButton = document.getElementById('empty-btn');

    let message = `${selectedProduct.innerHTML} will be added to your shopping cart.`;

    emptyButton.style.display = 'block';
    document.getElementById('product-list').removeChild(selectedProduct);
    document.getElementById('selected-products').appendChild(selectedProduct);

    alert(message);
    console.log(message);
};

loadProducts = () => {
    let loadButton = document.getElementById('load-button');

    let productList = '';
    for (let product of products) {
        productList += `<li id="${product.name}" onclick="add('${product.name}')">${product.name}: ${product.prijs} €</li>`
    }
    if (loadButton.style.display !== 'none') loadButton.style.display = 'none';
    document.getElementById('product-list').innerHTML = productList;
};

emptyCart = () => {
    let cart = document.getElementById('selected-products');
    let emptyButton = document.getElementById('empty-btn');

    while (cart.firstChild) {
        cart.removeChild(cart.firstChild);
    }
    emptyButton.style.display = 'none';
    loadProducts();
};

