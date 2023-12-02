function displayProduct() {
  // Récupérer l'ID depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const quantityId = urlParams.get('quantity');

  // Vérifier si l'ID est valide
  if (productId) {
    const selectedItem = items.find(item => item.id === parseInt(productId, 10));

    if (selectedItem) {
      // Sélectionner le conteneur où afficher les détails du produit
      const productContainer = document.querySelector('.product-container');

      // Affichage des détails du produit sur la page product.html
      productContainer.innerHTML = `
        <figure>
          <img src="${selectedItem.image}" alt="${selectedItem.title}">
        </figure>
        <div class="product-info">
          <h2>${selectedItem.brand}</h2>
          <figcaption>${selectedItem.title}</figcaption>
          <h3 id="price">${selectedItem.price}€</h3>
          <div class="container">
            <div class='number'>
              <label for="nbProduct"><i class="fa-solid fa-bag-shopping"></i></label>
              <input type="number" name="nbProduct" id="nbProduct" value="1" min="1" max="100">
            </div>
            <button class='cart-btn' onclick="addToCart(${selectedItem.id})">ADD CART </button>
          </div>
          <div class="item-info">
            <h4>Ingredients</h4>
            <p class='ing'>${selectedItem.ingredients || 'Ingredients not available'}</p>
            <h4>How to use</h4>
            <p class='use'>${selectedItem.useInfo || 'Usage information not available'}</p>
          </div>
        </div>`;
    } else {
      productContainer.innerHTML = "<h3>Product Not Found</h3>";
    }
  }
}

// Appeler la fonction pour afficher le produit
displayProduct();
// Sélectionnez le bouton du panier

function addToCart(productId) {
  // Récupérez le bouton du panier
  const cartBtn = document.querySelector('.cart-btn');

  // Récupérez les produits actuels dans le panier depuis le localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Recherchez le produit dans le panier existant
  const existingProductIndex = cart.findIndex(item => item.id === productId);

  // Mettez à jour le panier en conséquence
  if (existingProductIndex !== -1) {
    // Si le produit est déjà dans le panier, augmentez la quantité
    cart[existingProductIndex].quantity += 1;
  } else {
    // Sinon, ajoutez le nouveau produit au panier avec une quantité de 1
    cart.push({ id: productId, quantity: 1 });
  }

  // Enregistrez le panier mis à jour dans le localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Mettez à jour le texte du bouton du panier
  if (cartBtn) {
    cartBtn.innerText = "ADDED TO CART";

    setTimeout(function () {
      cartBtn.innerText = "ADD CART";
    }, 2000);
  } else {
    console.error("Button not found with class 'cart-btn'");
  }
}
