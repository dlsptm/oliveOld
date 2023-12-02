document.addEventListener('DOMContentLoaded', function () {
  displayCart();
});


function displayCart() {
  // Récupérez le contenu du panier depuis le localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Sélectionnez le conteneur où afficher le contenu du panier
  const cartContent = document.querySelector('#cart-content');

  // Supprimez tous les éléments enfants du conteneur
  cartContent.innerHTML = '';
  let totalPrice = 0;
  let shippingFee = 4.5;

  // Vérifiez si le panier est vide
  if (cart.length === 0) {
    cartContent.innerHTML = "<p class='empty'>Your cart is empty.</p>";
  } else {
    // Affichez le contenu du panier
    cart.forEach(cartItem => {
      const selectedItem = items.find(item => item.id === cartItem.id);
      const priceByQuantity = selectedItem.price * cartItem.quantity;
      totalPrice += priceByQuantity;

      
      
      if (selectedItem) {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
          <figure>
            <img src="${selectedItem.image}" alt="${selectedItem.title}">
          </figure>
          <h2>${selectedItem.brand}</h2>
          <div class="item-infos">
            <h3>${selectedItem.title}</h3>
            <p>${selectedItem.price}€</p>
          </div>
          <p>${cartItem.quantity}</p>
          <p><span class="item-total-price">${priceByQuantity}</span>€</p>
          <span class="removeItem"><i class="fa-solid fa-trash"></i></span>
        `;
        cartContent.appendChild(cartItemDiv);

        // Ajouter un gestionnaire d'événements à chaque bouton de suppression
        const removeItemButton = cartItemDiv.querySelector('.removeItem');

        removeItemButton.addEventListener('click', (function(itemId) {
          return function() {
            removeItemFromCart(itemId);
          };
        })(cartItem.id));
      }
    });
  }

  const totalElement = document.querySelector('.subtotal-display');
  const shippingFeeDisplay = document.querySelector('.shipping-fee-display');
  const TotalPrice = document.querySelector('.total-fee');
  const toFreeShipping = 60;

  totalElement.innerText = `${totalPrice}`;
  let total =  totalPrice + shippingFee;

  if(totalPrice >= toFreeShipping) {
    shippingFee = 0
  } 
  TotalPrice.innerText = total
  shippingFeeDisplay.innerText = shippingFee




}


function removeItemFromCart(itemId) {
  // Récupérez le contenu actuel du panier depuis le localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Filtrer les éléments du panier pour exclure l'élément avec l'ID spécifié
  cart = cart.filter(item => item.id !== itemId);

  // Mettez à jour le localStorage avec le nouveau contenu du panier
  localStorage.setItem('cart', JSON.stringify(cart));

  // Mettez à jour l'affichage du panier
  displayCart();
}
