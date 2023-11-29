// La fonction pour afficher le contenu du produit sur la page product.html
function displayProduct() {
  // Récupérer l'ID depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

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
          <input type="number" name="nbProduct" id="nbProduct" value="1">
          </div>
          <button class='card-btn'>ADD CARD </button>
          </div>
        </div>
      `;
    } else {
      console.log('Produit non trouvé');
    }
  }
}

// Appeler la fonction pour afficher le produit
displayProduct();
