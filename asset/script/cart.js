function productListCart() {
  // Récupérer l'ID depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Vérifier si l'ID est valide
  if (productId) {
    const selectedItem = items.find(item => item.id === parseInt(productId, 10));

    if (selectedItem) {
      // Sélectionner le conteneur où afficher les détails du produit
      const cartContainer = document.querySelector('.cart-container');

      // Affichage des détails du produit sur la page product.html
      cartContainer.innerHTML = `
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
            <button class='cart-btn'>ADD CART </button>
          </div>
        </div>
        `;
    } else {
      productContainer.innerHTML = "<h3>Product Not Found</h3>";
    }
  }
}

// Appeler la fonction pour afficher le produit
productListCart();